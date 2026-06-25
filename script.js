// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    if (navbar.style.display === "block") {

        navbar.style.display = "none";

    } else {

        navbar.style.display = "block";

        navbar.style.position = "absolute";
        navbar.style.top = "80px";
        navbar.style.left = "0";
        navbar.style.width = "100%";

        navbar.style.background = "#111827";

        navbar.style.padding = "20px";

        navbar.style.borderTop =
            "1px solid rgba(255,255,255,0.08)";
    }

});

// ================================
// COUNTER ANIMATION
// ================================

const counters =
    document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
                +counter.getAttribute("data-target");

            const count =
                +counter.innerText;

            const increment =
                target / speed;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count + increment);

                setTimeout(updateCounter, 15);

            } else {

                counter.innerText = target;

            }

        };

        updateCounter();

    });

};

// ================================
// OBSERVER FOR COUNTER
// ================================

const statsSection =
    document.querySelector(".stats");

let counterStarted = false;

const counterObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (
                entry.isIntersecting &&
                !counterStarted
            ) {

                startCounter();

                counterStarted = true;

            }

        });

    });

counterObserver.observe(statsSection);

// ================================
// NAVBAR SHADOW ON SCROLL
// ================================

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 10px 30px rgba(0,0,0,0.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements =
    document.querySelectorAll(
        ".service-card, .process-card, .testimonial-card, .stat-box"
    );

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0px)";
                }

            });

        },
        {
            threshold: 0.15
        }
    );

// Initial State

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        "all 0.8s ease";

    revealObserver.observe(el);

});

// ================================
// ACTIVE NAV LINK
// ================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {

            current =
                section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});

// ================================
// CONTACT FORM DEMO
// ================================

const contactForm =
    document.querySelector(".contact-form");

contactForm.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        alert(
            "Thank you! Your message has been submitted."
        );

        contactForm.reset();
    }
);