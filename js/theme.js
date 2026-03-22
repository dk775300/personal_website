/**
 * Theme Toggle Module
 * Handles dark/light mode switching with localStorage persistence
 * and system preference detection
 */

(function() {
    'use strict';

    const THEME_KEY = 'portfolio-theme';
    const DARK_CLASS = 'dark';

    /**
     * Get stored theme preference
     * @returns {string|null} 'dark', 'light', or null
     */
    function getStoredTheme() {
        return localStorage.getItem(THEME_KEY);
    }

    /**
     * Store theme preference
     * @param {string} theme - 'dark' or 'light'
     */
    function storeTheme(theme) {
        localStorage.setItem(THEME_KEY, theme);
    }

    /**
     * Check if system prefers dark mode
     * @returns {boolean}
     */
    function systemPrefersDark() {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    /**
     * Apply theme to document
     * @param {string} theme - 'dark' or 'light'
     */
    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.classList.add(DARK_CLASS);
        } else {
            document.documentElement.classList.remove(DARK_CLASS);
        }
    }

    /**
     * Initialize theme based on storage or system preference
     */
    function initTheme() {
        const stored = getStoredTheme();

        if (stored) {
            // Use stored preference
            applyTheme(stored);
        } else {
            // Fall back to system preference
            applyTheme(systemPrefersDark() ? 'dark' : 'light');
        }
    }

    /**
     * Toggle between dark and light modes
     */
    function toggleTheme() {
        const isDark = document.documentElement.classList.contains(DARK_CLASS);
        const newTheme = isDark ? 'light' : 'dark';

        applyTheme(newTheme);
        storeTheme(newTheme);

        // Announce change for screen readers
        announceThemeChange(newTheme);
    }

    /**
     * Announce theme change for accessibility
     * @param {string} theme - 'dark' or 'light'
     */
    function announceThemeChange(theme) {
        const announcement = `Theme changed to ${theme} mode`;

        // Check for existing announcement element
        let announcer = document.getElementById('theme-announcement');
        if (!announcer) {
            announcer = document.createElement('div');
            announcer.id = 'theme-announcement';
            announcer.setAttribute('aria-live', 'polite');
            announcer.setAttribute('aria-atomic', 'true');
            announcer.className = 'sr-only';
            announcer.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
            document.body.appendChild(announcer);
        }

        announcer.textContent = announcement;

        // Clear after announcement
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    }

    /**
     * Set up theme toggle button event listener
     */
    function setupToggleButton() {
        const toggleButton = document.getElementById('theme-toggle');

        if (toggleButton) {
            toggleButton.addEventListener('click', toggleTheme);

            // Add keyboard support
            toggleButton.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            });

            // Set aria attributes
            toggleButton.setAttribute('aria-label', 'Toggle dark mode');
            toggleButton.setAttribute('aria-pressed', document.documentElement.classList.contains(DARK_CLASS));

            // Update aria-pressed when theme changes
            const observer = new MutationObserver(() => {
                toggleButton.setAttribute('aria-pressed', document.documentElement.classList.contains(DARK_CLASS));
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
            });
        }
    }

    /**
     * Set up mobile menu toggle
     */
    function setupMobileMenu() {
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');

                // Update aria-expanded
                const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
                menuBtn.setAttribute('aria-expanded', !expanded);
            });

            // Close menu when clicking on links
            const links = mobileMenu.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    menuBtn.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    /**
     * Listen for system theme changes
     */
    function listenForSystemChanges() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

            // Modern browsers
            if (mediaQuery.addEventListener) {
                mediaQuery.addEventListener('change', (e) => {
                    if (!getStoredTheme()) {
                        applyTheme(e.matches ? 'dark' : 'light');
                    }
                });
            }
            // Legacy browsers
            else if (mediaQuery.addListener) {
                mediaQuery.addListener((e) => {
                    if (!getStoredTheme()) {
                        applyTheme(e.matches ? 'dark' : 'light');
                    }
                });
            }
        }
    }

    /**
     * Initialize all theme functionality
     */
    function init() {
        initTheme();
        setupToggleButton();
        setupMobileMenu();
        listenForSystemChanges();
    }

    // Export for external use
    window.themeManager = {
        toggle: toggleTheme,
        getStored: getStoredTheme,
        apply: applyTheme,
        init: init
    };

    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
