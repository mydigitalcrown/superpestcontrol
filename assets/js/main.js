// Super Pest Control Mumbai - Main JavaScript File

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    initializeMobileMenu();
    
    // Form Validation and Submission
    initializeContactForm();
    
    // Smooth Scrolling for Navigation Links
    initializeSmoothScrolling();
    
    // Performance Optimizations
    initializeLazyLoading();
    
    // Accessibility Enhancements
    initializeAccessibility();
});

/**
 * Initialize Mobile Menu Functionality
 */
function initializeMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Early return if mobile menu elements don't exist
    if (!mobileMenuButton || !mobileMenu) return;
    
    const menuIcon = mobileMenuButton.querySelector('[data-lucide="menu"]');
    
    mobileMenuButton.addEventListener('click', function() {
        const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
        
        // Toggle menu visibility
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('show');
        
        // Update ARIA attributes
        mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        
        // Update icon
        if (menuIcon) {
            if (isExpanded) {
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                menuIcon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons();
        }
        
        // Manage focus for accessibility
        if (!isExpanded) {
            // Menu is opening - focus first menu item
            const firstMenuItem = mobileMenu.querySelector('a');
            if (firstMenuItem) {
                setTimeout(() => firstMenuItem.focus(), 100);
            }
        }
    });
    
    // Close mobile menu when clicking navigation links
    const mobileMenuLinks = mobileMenu.querySelectorAll('a[href^="#"]');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            
            if (menuIcon) {
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            
            if (menuIcon) {
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        }
    });
    
    // Handle escape key to close mobile menu
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenuButton.focus();
            
            if (menuIcon) {
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        }
    });
}

/**
 * Initialize Contact Form Validation and Submission
 */
function initializeContactForm() {
    // Handle main contact form (homepage)
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        initializeMainContactForm(contactForm);
    }
    
    // Handle detailed contact form (contact page)
    const detailedContactForm = document.getElementById('contactForm');
    if (detailedContactForm) {
        initializeDetailedContactForm(detailedContactForm);
    }
}

/**
 * Initialize main contact form (homepage)
 */
function initializeMainContactForm(contactForm) {
    const formFields = {
        name: contactForm.querySelector('#name'),
        phone: contactForm.querySelector('#phone'),
        email: contactForm.querySelector('#email'),
        location: contactForm.querySelector('#location'),
        service: contactForm.querySelector('#service'),
        message: contactForm.querySelector('#message')
    };
    
    // Real-time validation
    Object.entries(formFields).forEach(([fieldName, field]) => {
        if (!field) return;
        
        field.addEventListener('blur', function() {
            validateField(fieldName, field);
        });
        
        field.addEventListener('input', function() {
            // Clear error state on input
            clearFieldError(field);
        });
    });
    
    // Form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validate all fields
        let isValid = true;
        Object.entries(formFields).forEach(([fieldName, field]) => {
            if (field && !validateField(fieldName, field)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            submitMainForm(contactForm);
        } else {
            // Focus first invalid field
            const firstError = contactForm.querySelector('.form-field.error input, .form-field.error select, .form-field.error textarea');
            if (firstError) {
                firstError.focus();
            }
        }
    });
}

/**
 * Initialize detailed contact form (contact page)
 */
function initializeDetailedContactForm(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Basic validation
        if (!data.firstName || !data.lastName || !data.email || !data.phone) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\+]?[0-9\-\(\)\s]+$/;
        if (!phoneRegex.test(data.phone)) {
            showFormMessage('Please enter a valid phone number.', 'error');
            return;
        }
        
        // Consent check
        if (!data.consent) {
            showFormMessage('Please agree to be contacted by checking the consent box.', 'error');
            return;
        }
        
        // Submit form to PHP handler
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        submitButton.innerHTML = '<i data-lucide="loader-2" class="inline h-5 w-5 mr-2 animate-spin"></i>Sending...';
        submitButton.disabled = true;
        
        // Send data to PHP handler
        fetch('/contact-handler.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(result => {
            if (result.success) {
                // Show success message
                showFormMessage(result.message, 'success');
                
                // Reset form
                this.reset();
                
                // Also create WhatsApp backup option
                const message = `New Contact Form Submission:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address || 'Not provided'}
Service: ${data.serviceType || 'Not specified'}
Urgency: ${data.urgency}
Message: ${data.message || 'No additional message'}`;
                
                const whatsappUrl = `https://wa.me/918097941077?text=${encodeURIComponent(message)}`;
                
                // Show WhatsApp option after successful email submission
                setTimeout(() => {
                    if (confirm('Would you also like to send this inquiry via WhatsApp for faster response?')) {
                        window.open(whatsappUrl, '_blank');
                    }
                }, 2000);
                
            } else {
                // Show error message
                showFormMessage(result.message || 'Failed to send message. Please try again.', 'error');
                
                // Offer WhatsApp as fallback
                setTimeout(() => {
                    if (confirm('Email submission failed. Would you like to send your inquiry via WhatsApp instead?')) {
                        const message = `New Contact Form Submission:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address || 'Not provided'}
Service: ${data.serviceType || 'Not specified'}
Urgency: ${data.urgency}
Message: ${data.message || 'No additional message'}`;
                        
                        const whatsappUrl = `https://wa.me/918097941077?text=${encodeURIComponent(message)}`;
                        window.open(whatsappUrl, '_blank');
                    }
                }, 1000);
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            showFormMessage('Network error. Please check your connection and try again.', 'error');
            
            // Offer WhatsApp as fallback
            setTimeout(() => {
                if (confirm('Network error occurred. Would you like to send your inquiry via WhatsApp instead?')) {
                    const message = `New Contact Form Submission:
Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}
Address: ${data.address || 'Not provided'}
Service: ${data.serviceType || 'Not specified'}
Urgency: ${data.urgency}
Message: ${data.message || 'No additional message'}`;
                    
                    const whatsappUrl = `https://wa.me/918097941077?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                }
            }, 1000);
        })
        .finally(() => {
            // Reset button
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
            
            // Reinitialize Lucide icons
            lucide.createIcons();
        });
    });
}

/**
 * Validate individual form field
 */
function validateField(fieldName, field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';
    
    // Clear previous error
    clearFieldError(field);
    
    switch (fieldName) {
        case 'name':
            if (!value) {
                errorMessage = 'Name is required';
                isValid = false;
            } else if (value.length < 2) {
                errorMessage = 'Name must be at least 2 characters';
                isValid = false;
            }
            break;
            
        case 'phone':
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!value) {
                errorMessage = 'Phone number is required';
                isValid = false;
            } else if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                errorMessage = 'Please enter a valid phone number';
                isValid = false;
            }
            break;
            
        case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (value && !emailRegex.test(value)) {
                errorMessage = 'Please enter a valid email address';
                isValid = false;
            }
            break;
            
        case 'location':
            if (!value) {
                errorMessage = 'Location is required';
                isValid = false;
            }
            break;
            
        case 'service':
            if (!value) {
                errorMessage = 'Please select a service';
                isValid = false;
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    } else {
        showFieldSuccess(field);
    }
    
    return isValid;
}

/**
 * Show form message (success or error)
 */
function showFormMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = 'form-message mb-6 p-4 rounded-lg border';
    
    let iconName, bgColor, borderColor, textColor;
    
    switch (type) {
        case 'success':
            iconName = 'check-circle';
            bgColor = 'bg-green-50';
            borderColor = 'border-green-200';
            textColor = 'text-green-800';
            break;
        case 'error':
            iconName = 'alert-circle';
            bgColor = 'bg-red-50';
            borderColor = 'border-red-200';
            textColor = 'text-red-800';
            break;
        default:
            iconName = 'info';
            bgColor = 'bg-blue-50';
            borderColor = 'border-blue-200';
            textColor = 'text-blue-800';
    }
    
    messageElement.className += ` ${bgColor} ${borderColor}`;
    messageElement.innerHTML = `
        <div class="flex items-center">
            <i data-lucide="${iconName}" class="h-5 w-5 ${textColor} mr-3 flex-shrink-0"></i>
            <p class="${textColor} font-medium">${message}</p>
        </div>
    `;
    
    // Find the contact form and insert message before it
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.parentNode.insertBefore(messageElement, contactForm);
        
        // Initialize Lucide icons for the new message
        lucide.createIcons();
        
        // Scroll to message
        messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Auto-remove message after 10 seconds for success messages
        if (type === 'success') {
            setTimeout(() => {
                messageElement.remove();
            }, 10000);
        }
        
        // Announce to screen readers
        announceToScreenReader(message);
    }
}

/**
 * Show field error
 */
function showFieldError(field, message) {
    const fieldContainer = field.closest('div');
    fieldContainer.classList.add('form-field', 'error');
    
    // Remove existing error message
    const existingError = fieldContainer.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Add error message
    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    fieldContainer.appendChild(errorElement);
    
    // Update ARIA attributes
    field.setAttribute('aria-invalid', 'true');
    field.setAttribute('aria-describedby', field.id + '-error');
    errorElement.id = field.id + '-error';
}

/**
 * Show field success
 */
function showFieldSuccess(field) {
    const fieldContainer = field.closest('div');
    fieldContainer.classList.remove('error');
    fieldContainer.classList.add('form-field', 'success');
    field.setAttribute('aria-invalid', 'false');
}

/**
 * Clear field error
 */
function clearFieldError(field) {
    const fieldContainer = field.closest('div');
    fieldContainer.classList.remove('form-field', 'error', 'success');
    
    const errorMessage = fieldContainer.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
    
    field.removeAttribute('aria-invalid');
    field.removeAttribute('aria-describedby');
}

/**
 * Submit main form (homepage)
 */
function submitMainForm(form) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner mr-2"></span>Sending...';
    form.classList.add('form-loading');
    
    // Collect form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Simulate form submission (replace with actual submission logic)
    setTimeout(() => {
        // Reset form
        form.reset();
        
        // Show success message
        showSuccessMessage();
        
        // Reset button state
        submitButton.disabled = false;
        submitButton.textContent = originalText;
        form.classList.remove('form-loading');
        
        // Clear all field states
        form.querySelectorAll('.form-field').forEach(field => {
            field.classList.remove('form-field', 'error', 'success');
        });
        
        // Announce success to screen readers
        announceToScreenReader('Your quote request has been submitted successfully. We will contact you soon.');
        
    }, 2000);
}

/**
 * Show success message
 */
function showSuccessMessage() {
    const form = document.querySelector('#contact form');
    const successMessage = document.createElement('div');
    successMessage.className = 'bg-green-50 border border-green-200 rounded-lg p-4 mb-6';
    successMessage.innerHTML = `
        <div class="flex items-center">
            <i data-lucide="check-circle" class="h-5 w-5 text-green-600 mr-3"></i>
            <div>
                <h4 class="text-green-800 font-semibold">Quote Request Sent!</h4>
                <p class="text-green-700 text-sm">We'll contact you within 24 hours to discuss your pest control needs.</p>
            </div>
        </div>
    `;
    
    form.parentNode.insertBefore(successMessage, form);
    lucide.createIcons();
    
    // Auto-remove success message after 10 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 10000);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/**
 * Initialize Smooth Scrolling
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                event.preventDefault();
                
                // Calculate offset for fixed header
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update focus for accessibility
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
                targetElement.addEventListener('blur', function() {
                    this.removeAttribute('tabindex');
                }, { once: true });
            }
        });
    });
}

/**
 * Initialize Lazy Loading for Images
 */
function initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

/**
 * Initialize Accessibility Enhancements
 */
function initializeAccessibility() {
    // Keyboard navigation for interactive elements
    document.addEventListener('keydown', function(event) {
        // Handle Enter key as click for custom buttons
        if (event.key === 'Enter') {
            const target = event.target;
            if (target.getAttribute('role') === 'button' && !target.disabled) {
                target.click();
            }
        }
    });
    
    // Announce dynamic content changes to screen readers
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    announcer.id = 'announcer';
    document.body.appendChild(announcer);
    
    // Focus management for better keyboard navigation
    let focusableElements = [];
    let currentFocusIndex = -1;
    
    function updateFocusableElements() {
        focusableElements = Array.from(document.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        ));
    }
    
    updateFocusableElements();
    
    // Update focusable elements when DOM changes
    const observer = new MutationObserver(updateFocusableElements);
    observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Announce message to screen readers
 */
function announceToScreenReader(message) {
    const announcer = document.getElementById('announcer');
    if (announcer) {
        announcer.textContent = message;
        setTimeout(() => {
            announcer.textContent = '';
        }, 1000);
    }
}

/**
 * Handle window resize events
 */
window.addEventListener('resize', function() {
    // Close mobile menu on resize to desktop
    if (window.innerWidth >= 768) {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('show');
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            
            const menuIcon = mobileMenuButton.querySelector('[data-lucide]');
            if (menuIcon) {
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        }
    }
});

/**
 * Performance optimization: Preload critical resources
 */
function preloadCriticalResources() {
    // Preload web fonts if using custom fonts
    const fontPreloads = [
        // Add font URLs here if needed
    ];
    
    fontPreloads.forEach(fontUrl => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = fontUrl;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
    });
}

// Initialize performance optimizations
preloadCriticalResources();

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed');
            });
    });
}
