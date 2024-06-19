function downloadResume() {
    var fileUrl = 'https://github.com/banojmishra/My-Documents/raw/main/Banoj%20Kumar%20Mishra%20Resume.pdf';
    var a = document.createElement('a');
    a.href = fileUrl;
    a.download = 'Banoj_Kumar_Mishra_Resume.pdf';
    a.style.display = 'none';

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}

function visitGithub() {
    var githubProfileUrl = 'https://github.com/banojmishra';
    // Redirect to your GitHub profile
    window.location.href = githubProfileUrl;
}

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', highlightNavLink);

    function highlightNavLink() {
        const sections = document.querySelectorAll('section');

        sections.forEach((section) => {
            const navLink = document.querySelector(`[href="#${section.id}"]`);
            const rect = section.getBoundingClientRect();

            if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                // Add your highlighting logic here
                navLink.classList.add('active');
            } else {
                // Remove highlighting if not in the current section
                navLink.classList.remove('active');
            }
        });
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById('scrollToTopBtn');
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
});

// Function to scroll to the top
function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// document.addEventListener('DOMContentLoaded', function () {
//     var skills = document.querySelectorAll('.skill');

//     skills.forEach(function (skill) {
//         var progress = parseInt(skill.dataset.progress, 10);

//         var progressBar = skill.querySelector('.progress');

//         // Animate the progress bar width from 0 to the specified percentage
//         progressBar.style.width = progress + '%';
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     function updateProgress(skill) {
//         var progress = parseInt(skill.dataset.progress, 10);
//         var progressBar = skill.querySelector('.progress');

//         // Reset progress to 0 before starting the animation
//         progressBar.style.width = '0%';

//         // Animate the progress bar width from 0 to the specified percentage
//         progressBar.style.width = progress + '%';

//         // Use setTimeout to create a delay between animations
//         setTimeout(function () {
//             // Call the function recursively for the next skill
//             updateProgress(skill.nextElementSibling || skills[0]);
//         }, 1000); // Change the delay as needed
//     }

//     var skills = document.querySelectorAll('.skill');
//     updateProgress(skills[0]); // Start the loop with the first skill
// });

document.addEventListener('DOMContentLoaded', function () {
    function updateProgress() {
        var skills = document.querySelectorAll('.skill');

        skills.forEach(function (skill) {
            var progress = parseInt(skill.dataset.progress, 10);
            var progressBar = skill.querySelector('.progress');

            // Reset progress to 0 before starting the animation
            progressBar.style.width = '0%';

            // Animate the progress bar width from 0 to the specified percentage
            progressBar.style.width = progress + '%';
        });
    }

    function handleScroll() {
        var aboutSection = document.getElementById('about');
        var aboutSectionTop = aboutSection.getBoundingClientRect().top;
        var aboutSectionBottom = aboutSection.getBoundingClientRect().bottom;

        // Check if the "About" section is in the viewport
        if (aboutSectionTop < window.innerHeight && aboutSectionBottom >= 0) {
            updateProgress();
        } else {
            // If not in the "About" section, reset progress to 0
            updateProgressReset();
        }
    }

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    handleScroll();

    // Function to reset progress to 0
    function updateProgressReset() {
        var skills = document.querySelectorAll('.skill');

        skills.forEach(function (skill) {
            var progressBar = skill.querySelector('.progress');
            progressBar.style.width = '0%';
        });
    }
});