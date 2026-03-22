/**
 * Dynamic Experience Calculator
 * Calculates years and months of experience from a fixed start date (August 2020)
 * Updates automatically on page load
 */

(function() {
    'use strict';

    // Fixed start date: August 2020
    const startDate = new Date('2020-08-01');

    /**
     * Calculate experience from start date to current date
     * @returns {Object} Object containing years, months, and formatted string
     */
    function calculateExperience() {
        const currentDate = new Date();

        // Calculate the difference
        let years = currentDate.getFullYear() - startDate.getFullYear();
        let months = currentDate.getMonth() - startDate.getMonth();

        // Adjust for negative months
        if (months < 0) {
            years--;
            months += 12;
        }

        // Calculate total months for display
        const totalMonths = years * 12 + months;

        return {
            years: years,
            months: months,
            totalMonths: totalMonths,
            formatted: `${years} year${years !== 1 ? 's' : ''}, ${months} month${months !== 1 ? 's' : ''}`
        };
    }

    /**
     * Update the experience display on the page
     */
    function updateExperienceDisplay() {
        const experience = calculateExperience();

        // Update the experience years display in the hero section
        const experienceElement = document.getElementById('experience-years');
        if (experienceElement) {
            // Animate the number
            animateValue(experienceElement, 0, experience.years, 1000);

            // Add formatted text below
            const formattedText = document.createElement('div');
            formattedText.className = 'text-sm text-gray-500 dark:text-gray-500 mt-1';
            formattedText.textContent = experience.formatted;

            // Clear any existing formatted text
            const existingFormatted = experienceElement.parentElement.querySelector('.text-sm');
            if (existingFormatted && existingFormatted !== experienceElement) {
                existingFormatted.remove();
            }

            if (!experienceElement.parentElement.querySelector('.text-sm')) {
                experienceElement.parentElement.appendChild(formattedText);
            }
        }
    }

    /**
     * Animate a number from start to end
     * @param {HTMLElement} element - The element to animate
     * @param {number} start - Starting value
     * @param {number} end - Ending value
     * @param {number} duration - Animation duration in ms
     */
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = end > start ? 1 : -1;
        const stepTime = Math.abs(Math.floor(duration / range));
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            element.textContent = current;
            if (current === end) {
                clearInterval(timer);
            }
        }, stepTime);

        // Set initial value
        element.textContent = start;
    }

    /**
     * Initialize experience calculator on page load
     */
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', updateExperienceDisplay);
        } else {
            updateExperienceDisplay();
        }
    }

    // Export for potential external use
    window.experienceCalculator = {
        calculate: calculateExperience,
        updateDisplay: updateExperienceDisplay,
        init: init
    };

    // Auto-initialize
    init();
})();
