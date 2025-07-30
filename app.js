// Enhanced Steam Portfolio JavaScript - Bug Fixes
class SteamPortfolio {
    constructor() {
        this.init();
    }

    init() {
        this.setupSmoothScrolling();
        this.setupActiveNavigation();
        this.setupSkillBars();
        this.setupScrollAnimations();
        this.setupContactForm();
        this.setupEnhancedBackgroundParticles();
        this.setupSteamNotifications();
        this.setupHoverEffects();
        this.setupParallaxScrolling();
        this.setupProjectInteractions();
        this.fixExternalLinks();
        this.initializeContinuousAnimations();
        this.addDynamicStyles();
    }

    // Fixed Enhanced Moving Background with Continuous Particles
    setupEnhancedBackgroundParticles() {
        const particlesContainer = document.querySelector('.steam-particles');
        if (!particlesContainer) {
            console.error('Steam particles container not found');
            return;
        }

        console.log('Setting up enhanced background particles...');

        // Create multiple particle types
        const createFloatingParticle = () => {
            const particle = document.createElement('div');
            particle.className = 'steam-particle';
            
            const size = Math.random() * 6 + 2;
            const opacity = Math.random() * 0.6 + 0.3;
            const hue = Math.random() > 0.7 ? '200' : '190';
            const duration = Math.random() * 15 + 10;
            const randomX = (Math.random() - 0.5) * 200;
            const startX = Math.random() * 100;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: hsla(${hue}, 70%, 65%, ${opacity});
                border-radius: 50%;
                left: ${startX}%;
                top: 100vh;
                pointer-events: none;
                box-shadow: 0 0 ${size * 3}px hsla(${hue}, 70%, 65%, 0.8);
                z-index: 1;
            `;
            
            particlesContainer.appendChild(particle);
            
            // Animate the particle
            let startTime = null;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);
                
                if (progress < 1 && particle.parentNode) {
                    const currentY = 100 - (progress * 120); // Move from bottom to above top
                    const currentX = startX + (randomX * progress * 0.5);
                    const currentOpacity = progress < 0.1 ? progress * 10 * opacity : 
                                         progress > 0.9 ? (1 - progress) * 10 * opacity : opacity;
                    const rotation = progress * 360;
                    const scale = 0.5 + (progress * 0.5);
                    
                    particle.style.transform = `translateY(${currentY}vh) translateX(${currentX - startX}%) rotate(${rotation}deg) scale(${scale})`;
                    particle.style.opacity = currentOpacity;
                    
                    requestAnimationFrame(animate);
                } else if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            };
            
            requestAnimationFrame(animate);
        };

        // Create glowing orbs
        const createGlowOrb = () => {
            const orb = document.createElement('div');
            orb.className = 'steam-orb';
            
            const size = Math.random() * 20 + 15;
            const opacity = Math.random() * 0.4 + 0.2;
            const duration = Math.random() * 25 + 20;
            const randomX = (Math.random() - 0.5) * 300;
            const startX = Math.random() * 100;
            
            orb.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, rgba(102, 192, 244, ${opacity}) 0%, rgba(102, 192, 244, ${opacity * 0.3}) 50%, transparent 100%);
                border-radius: 50%;
                left: ${startX}%;
                top: 100vh;
                pointer-events: none;
                z-index: 1;
            `;
            
            particlesContainer.appendChild(orb);
            
            // Animate the orb
            let startTime = null;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);
                
                if (progress < 1 && orb.parentNode) {
                    const currentY = 100 - (progress * 120);
                    const currentX = startX + (randomX * progress * 0.3);
                    const currentOpacity = progress < 0.1 ? progress * 10 : 
                                         progress > 0.9 ? (1 - progress) * 10 : 1;
                    const scale = 0.8 + (Math.sin(progress * Math.PI * 4) * 0.2);
                    
                    orb.style.transform = `translateY(${currentY}vh) translateX(${currentX - startX}%) scale(${scale})`;
                    orb.style.opacity = currentOpacity;
                    
                    requestAnimationFrame(animate);
                } else if (orb.parentNode) {
                    orb.parentNode.removeChild(orb);
                }
            };
            
            requestAnimationFrame(animate);
        };

        // Create star particles
        const createStarParticle = () => {
            const star = document.createElement('div');
            star.className = 'steam-star';
            
            const size = Math.random() * 4 + 2;
            const opacity = Math.random() * 0.8 + 0.4;
            const duration = Math.random() * 20 + 15;
            const randomX = (Math.random() - 0.5) * 150;
            const startX = Math.random() * 100;
            
            star.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(199, 213, 224, ${opacity});
                border-radius: 50%;
                left: ${startX}%;
                top: 100vh;
                pointer-events: none;
                box-shadow: 0 0 ${size * 4}px rgba(199, 213, 224, 0.8);
                z-index: 1;
            `;
            
            particlesContainer.appendChild(star);
            
            // Animate the star
            let startTime = null;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);
                
                if (progress < 1 && star.parentNode) {
                    const currentY = 100 - (progress * 120);
                    const currentX = startX + (randomX * progress * 0.4);
                    const currentOpacity = progress < 0.1 ? progress * 10 * opacity : 
                                         progress > 0.9 ? (1 - progress) * 10 * opacity : opacity;
                    const twinkle = 0.8 + (Math.sin(progress * Math.PI * 8) * 0.2);
                    
                    star.style.transform = `translateY(${currentY}vh) translateX(${currentX - startX}%)`;
                    star.style.opacity = currentOpacity * twinkle;
                    
                    requestAnimationFrame(animate);
                } else if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            };
            
            requestAnimationFrame(animate);
        };

        // Continuous particle generation
        const startParticleSystem = () => {
            // Regular particles every 1.5 seconds
            setInterval(() => {
                createFloatingParticle();
            }, 1500);
            
            // Glowing orbs every 4 seconds
            setInterval(() => {
                createGlowOrb();
            }, 4000);
            
            // Star particles every 2.5 seconds
            setInterval(() => {
                createStarParticle();
            }, 2500);
        };

        // Initial burst of particles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => createFloatingParticle(), i * 200);
        }
        
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createGlowOrb(), i * 600);
        }
        
        for (let i = 0; i < 15; i++) {
            setTimeout(() => createStarParticle(), i * 300);
        }

        // Start continuous system after initial burst
        setTimeout(() => {
            startParticleSystem();
            console.log('Continuous particle system started');
        }, 2000);
    }

    // Fixed Smooth Scrolling Navigation
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('.nav-item');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Navigation link clicked:', link.getAttribute('href'));
                
                const targetId = link.getAttribute('href').replace('#', '');
                
                // Remove active class from all nav items
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                // Add active class to clicked nav item
                link.classList.add('active');
                
                if (targetId === 'profile') {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                    this.showSteamNotification('🏠 Navigating to Profile...', 'info');
                    return;
                }
                
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const headerOffset = 100;
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    this.showSteamNotification(`📍 Navigating to ${targetId.charAt(0).toUpperCase() + targetId.slice(1)}...`, 'info');
                    console.log(`Scrolled to section: ${targetId}`);
                } else {
                    console.error(`Section not found: ${targetId}`);
                    this.showSteamNotification('❌ Section not found!', 'error');
                }
            });
        });
    }

    // Fixed Contact Form
    setupContactForm() {
        const form = document.getElementById('contactForm');
        
        if (form) {
            console.log('Contact form found, setting up event handlers...');
            
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log('Contact form submitted');
                
                const formData = new FormData(form);
                const name = formData.get('name').trim();
                const email = formData.get('email').trim();
                const message = formData.get('message').trim();
                
                console.log('Form data:', { name, email, message: message.substring(0, 50) + '...' });
                
                if (!name || !email || !message) {
                    this.showSteamNotification('⚠️ All fields are required!', 'error');
                    return;
                }
                
                if (!this.isValidEmail(email)) {
                    this.showSteamNotification('⚠️ Please enter a valid email address!', 'error');
                    return;
                }
                
                // Simulate sending
                const submitBtn = form.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                submitBtn.style.background = '#57cbde';
                
                // Show immediate feedback
                this.showSteamNotification('📤 Sending your message...', 'info');
                
                setTimeout(() => {
                    this.showSteamNotification('✅ Message sent successfully! I\'ll get back to you soon.', 'success');
                    form.reset();
                    
                    submitBtn.textContent = 'Message Sent!';
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 2000);
                }, 1500);
            });

            // Enhanced input focus effects
            const inputs = form.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                input.addEventListener('focus', () => {
                    input.style.borderColor = '#66c0f4';
                    input.style.boxShadow = '0 0 15px rgba(102, 192, 244, 0.4)';
                    input.style.background = 'rgba(22, 32, 45, 0.95)';
                });
                
                input.addEventListener('blur', () => {
                    if (!input.value) {
                        input.style.borderColor = 'rgba(102, 192, 244, 0.3)';
                        input.style.boxShadow = '';
                        input.style.background = 'rgba(22, 32, 45, 0.9)';
                    }
                });
            });
        } else {
            console.error('Contact form not found');
        }
    }

    // Fixed External Links
    fixExternalLinks() {
        console.log('Fixing external links...');
        
        // Fix specific gaming profile links
        const gamingLinks = [
            { selector: 'a[href*="xxyPUNKxxy"]', url: 'https://steamcommunity.com/id/xxyPUNKxxy' },
            { selector: 'a[href*="IndianScammerFrontier"]', url: 'https://steamcommunity.com/id/IndianScammerFrontier' },
            { selector: 'a[href*="PapaGsiege"]', url: 'https://steamcommunity.com/id/PapaGsiege/' },
            { selector: 'a[href*="Punker123"]', url: 'https://steamcommunity.com/id/Punker123/' }
        ];

        gamingLinks.forEach(linkInfo => {
            const links = document.querySelectorAll(linkInfo.selector);
            links.forEach(link => {
                link.href = linkInfo.url;
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
                console.log(`Fixed gaming link: ${linkInfo.url}`);
            });
        });

        // Fix LinkedIn links
        const linkedinLinks = document.querySelectorAll('a[href*="linkedin"], a[href*="abhishek-t-b32078114"]');
        linkedinLinks.forEach(link => {
            link.href = 'https://www.linkedin.com/in/abhishek-t-b32078114/';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            console.log('Fixed LinkedIn link');
        });

        // Fix GitHub links
        const githubLinks = document.querySelectorAll('a[href*="github"], a[href*="CyborPunk-2077"]');
        githubLinks.forEach(link => {
            if (!link.href.includes('github.com')) {
                link.href = 'https://github.com/CyborPunk-2077';
            }
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            console.log('Fixed GitHub link');
        });

        // Fix project links
        const projectLinks = document.querySelectorAll('.project-link');
        projectLinks.forEach(link => {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            
            // Add click handler for feedback
            link.addEventListener('click', (e) => {
                console.log(`Project link clicked: ${link.href}`);
                
                // Enhanced click animation
                link.style.transform = 'scale(0.95)';
                link.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.6)';
                
                setTimeout(() => {
                    link.style.transform = '';
                    link.style.boxShadow = '';
                }, 200);
                
                // Show notification
                setTimeout(() => {
                    this.showSteamNotification('🚀 Opening project repository...', 'info');
                }, 300);
            });
        });

        // Fix all external links generically
        const allExternalLinks = document.querySelectorAll('a[href^="http"], a[href^="https://"], a[href^="mailto:"]');
        allExternalLinks.forEach(link => {
            if (!link.target) {
                link.target = '_blank';
                link.rel = 'noopener noreferrer';
            }
            
            // Add click tracking
            link.addEventListener('click', (e) => {
                const linkText = link.textContent.trim();
                console.log(`External link clicked: ${linkText} -> ${link.href}`);
                
                if (link.href.includes('steamcommunity.com')) {
                    this.showSteamNotification('🎮 Opening Steam profile...', 'info');
                } else if (link.href.includes('linkedin.com')) {
                    this.showSteamNotification('💼 Opening LinkedIn profile...', 'info');
                } else if (link.href.includes('github.com')) {
                    this.showSteamNotification('📁 Opening GitHub repository...', 'info');
                }
            });
        });

        console.log(`Fixed ${allExternalLinks.length} external links`);
    }

    // Email validation
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Enhanced Parallax Scrolling
    setupParallaxScrolling() {
        let ticking = false;
        
        const updateParallax = () => {
            const scrolled = window.pageYOffset;
            const overlay = document.querySelector('.steam-overlay');
            const particles = document.querySelector('.steam-particles');
            
            if (overlay) {
                overlay.style.transform = `translateY(${scrolled * 0.4}px) rotate(${scrolled * 0.02}deg)`;
            }
            
            if (particles) {
                particles.style.transform = `translateY(${scrolled * 0.15}px)`;
            }
            
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });
    }

    // Active Navigation Highlighting
    setupActiveNavigation() {
        const sections = document.querySelectorAll('.content-section');
        const navLinks = document.querySelectorAll('.nav-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;
                    
                    navLinks.forEach(link => link.classList.remove('active'));
                    
                    const activeLink = document.querySelector(`.nav-item[href="#${sectionId}"]`);
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-100px 0px -100px 0px'
        });

        sections.forEach(section => {
            observer.observe(section);
        });

        // Handle profile section
        window.addEventListener('scroll', () => {
            if (window.pageYOffset < 300) {
                navLinks.forEach(link => link.classList.remove('active'));
                const profileLink = document.querySelector('.nav-item[href="#profile"]');
                if (profileLink) {
                    profileLink.classList.add('active');
                }
            }
        });
    }

    // Enhanced Skill Progress Bars
    setupSkillBars() {
        const skillBars = document.querySelectorAll('.skill-progress');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const width = progressBar.getAttribute('data-width');
                    
                    if (!progressBar.classList.contains('animated')) {
                        progressBar.classList.add('animated');
                        setTimeout(() => {
                            progressBar.style.width = width + '%';
                            progressBar.style.boxShadow = `0 0 15px rgba(102, 192, 244, 0.6)`;
                        }, 500);
                    }
                }
            });
        }, { threshold: 0.5 });

        skillBars.forEach(bar => {
            observer.observe(bar);
        });
    }

    // Enhanced Scroll Animations
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll(
            '.project-card, .steam-block, .activity-item, .achievement-item'
        );
        
        animatedElements.forEach(element => {
            element.classList.add('fade-in');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }

    // Enhanced Hover Effects
    setupHoverEffects() {
        // Project cards with enhanced effects
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-6px) scale(1.02)';
                card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(102, 192, 244, 0.3)';
                card.style.borderColor = '#66c0f4';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.boxShadow = '';
                card.style.borderColor = '';
            });
        });

        // Navigation with glow effects
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                if (!item.classList.contains('active')) {
                    item.style.background = 'rgba(102, 192, 244, 0.15)';
                    item.style.borderColor = 'rgba(102, 192, 244, 0.4)';
                    item.style.boxShadow = '0 0 15px rgba(102, 192, 244, 0.3)';
                    item.style.textShadow = '0 0 8px rgba(102, 192, 244, 0.5)';
                }
            });
            
            item.addEventListener('mouseleave', () => {
                if (!item.classList.contains('active')) {
                    item.style.background = '';
                    item.style.borderColor = '';
                    item.style.boxShadow = '';
                    item.style.textShadow = '';
                }
            });
        });

        // Gaming profile links with special effects
        const gamingLinks = document.querySelectorAll('.gaming-link, .steam-profile-link');
        gamingLinks.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.background = 'rgba(102, 192, 244, 0.2)';
                link.style.borderColor = 'rgba(102, 192, 244, 0.5)';
                link.style.boxShadow = '0 0 15px rgba(102, 192, 244, 0.4)';
                link.style.transform = 'translateX(5px)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.background = '';
                link.style.borderColor = '';
                link.style.boxShadow = '';
                link.style.transform = '';
            });
        });
    }

    // Enhanced Project Interactions
    setupProjectInteractions() {
        // This is handled in fixExternalLinks now
    }

    // Enhanced Steam Notifications
    setupSteamNotifications() {
        if (!document.querySelector('.notification-container')) {
            const container = document.createElement('div');
            container.className = 'notification-container';
            container.style.cssText = `
                position: fixed;
                top: 80px;
                right: 20px;
                z-index: 10000;
                pointer-events: none;
            `;
            document.body.appendChild(container);
        }
    }

    showSteamNotification(message, type = 'info') {
        console.log(`Showing notification: ${message} (${type})`);
        
        const container = document.querySelector('.notification-container');
        const notification = document.createElement('div');
        notification.className = `steam-notification ${type}`;
        
        const icons = {
            success: '✅',
            error: '⚠️',
            info: 'ℹ️'
        };
        
        const colors = {
            success: '#57cbde',
            error: '#ff6b6b',
            info: '#66c0f4'
        };
        
        const icon = icons[type] || 'ℹ️';
        const borderColor = colors[type] || '#66c0f4';
        
        notification.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 16px;">${icon}</span>
                <span>${message}</span>
            </div>
        `;

        notification.style.cssText = `
            background: linear-gradient(135deg, rgba(27, 40, 56, 0.95) 0%, rgba(22, 32, 45, 0.95) 100%);
            border: 2px solid ${borderColor};
            border-radius: 5px;
            padding: 15px 20px;
            color: #ffffff;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5), 0 0 20px ${borderColor}40;
            backdrop-filter: blur(15px);
            transform: translateX(100%);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            margin-bottom: 10px;
            pointer-events: auto;
            cursor: pointer;
            max-width: 400px;
            min-width: 300px;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        `;

        container.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Click to dismiss
        notification.addEventListener('click', () => {
            this.dismissNotification(notification);
        });

        // Auto dismiss
        setTimeout(() => {
            if (notification.parentNode) {
                this.dismissNotification(notification);
            }
        }, 5000);
    }

    dismissNotification(notification) {
        notification.style.transform = 'translateX(100%)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 400);
    }

    // Initialize Continuous Animations
    initializeContinuousAnimations() {
        const floatingElements = document.querySelectorAll('.level-badge, .status-indicator');
        
        floatingElements.forEach((element, index) => {
            element.style.animation = `steamBob ${3 + index}s ease-in-out infinite alternate`;
        });

        const onlineStatus = document.querySelector('.online-status');
        if (onlineStatus) {
            onlineStatus.style.animation = 'steamGlow 2s ease-in-out infinite alternate';
        }
    }

    // Add Dynamic Styles
    addDynamicStyles() {
        if (!document.getElementById('dynamic-styles')) {
            const style = document.createElement('style');
            style.id = 'dynamic-styles';
            style.textContent = `
                @keyframes steamBob {
                    0% { transform: translateY(0px); }
                    100% { transform: translateY(-3px); }
                }
                
                @keyframes steamGlow {
                    0% { filter: brightness(1) drop-shadow(0 0 5px rgba(87, 203, 222, 0.5)); }
                    100% { filter: brightness(1.2) drop-shadow(0 0 10px rgba(87, 203, 222, 0.8)); }
                }
                
                .steam-particle {
                    box-shadow: 0 0 10px rgba(102, 192, 244, 0.6);
                }
                
                .project-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .nav-item {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .steam-block {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .steam-text-enhanced {
                    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(255, 255, 255, 0.1);
                    color: #ffffff !important;
                }
                
                @media (prefers-reduced-motion: reduce) {
                    *, *::before, *::after {
                        animation-duration: 0.01ms !important;
                        animation-iteration-count: 1 !important;
                        transition-duration: 0.01ms !important;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Initializing Enhanced Steam Portfolio...');
    
    const portfolio = new SteamPortfolio();
    
    // Enhanced loading animation
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.8s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 200);
    
    // Welcome notification
    setTimeout(() => {
        portfolio.showSteamNotification('🎮 Welcome to Abhishek\'s Developer Portfolio!', 'success');
    }, 1500);
    
    // Enhance text visibility
    setTimeout(() => {
        const importantTexts = document.querySelectorAll('.profile-name, .profile-title, .block-header h2, .block-header h3');
        importantTexts.forEach(text => {
            text.classList.add('steam-text-enhanced');
        });
    }, 500);
});

// Handle window resize
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        window.dispatchEvent(new Event('optimizedResize'));
    }, 250);
});

// Performance monitoring
window.addEventListener('load', () => {
    if (window.performance) {
        const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
        console.log(`🚀 Portfolio loaded in ${loadTime}ms`);
    }
});

// Gaming Easter Egg - Konami Code
let konamiCode = [];
const konamiSequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        document.body.style.filter = 'hue-rotate(120deg) saturate(1.8) brightness(1.1)';
        document.body.style.transition = 'filter 1s ease';
        
        const portfolio = new SteamPortfolio();
        portfolio.showSteamNotification('🏆 ACHIEVEMENT UNLOCKED: Konami Code Master! 🎮', 'success');
        
        const particlesContainer = document.querySelector('.steam-particles');
        if (particlesContainer) {
            for (let i = 0; i < 20; i++) {
                setTimeout(() => {
                    const specialParticle = document.createElement('div');
                    specialParticle.style.cssText = `
                        position: absolute;
                        width: 8px;
                        height: 8px;
                        background: gold;
                        border-radius: 50%;
                        left: ${Math.random() * 100}%;
                        top: ${Math.random() * 100}%;
                        pointer-events: none;
                        box-shadow: 0 0 20px gold;
                        animation: steamFloat 3s linear forwards;
                    `;
                    particlesContainer.appendChild(specialParticle);
                }, i * 100);
            }
        }
        
        setTimeout(() => {
            document.body.style.filter = '';
        }, 8000);
        
        konamiCode = [];
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SteamPortfolio;
}