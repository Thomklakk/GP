function showSection(sectionName) {
    var foodSection = document.getElementById('matMeny');
    var drinkSection = document.getElementById('drikkeMeny');

    if (sectionName === 'drikke') {
        foodSection.style.display = 'none';
        drinkSection.style.display = 'block';
    } else if (sectionName === 'mat') {
        foodSection.style.display = 'block';
        drinkSection.style.display = 'none';
    }

}

document.addEventListener('DOMContentLoaded', function() {
    showSection('drikke'); // Show the drink section by default
});



let mybtn = document.getElementById("topBtn");

if (mybtn) {
    // scroll down 1000px from the top, show the button.
    window.onscroll = function() {scrollFunctionTop()};

    function scrollFunctionTop() {
        if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
            mybtn.style.display = "block";
        } else {
            mybtn.style.display = "none";
        }
    }

    // click on the button, scroll to the top.
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

function scrollFunction() {
    var aboutSection = document.getElementById("arrangementer-section");
    var historieSection = document.getElementById("historie-section");
    var screenHeight = window.innerHeight;

    // Animasjon for arrangementer og historie seksjonene
    const arrangementerText = document.querySelector('.arrangementer-text');
    const historieText = document.querySelector('.historie-text');
    const arrangementerRect = arrangementerText.getBoundingClientRect();
    const historieRect = historieText.getBoundingClientRect();

    if (arrangementerRect.top <= screenHeight && arrangementerRect.bottom >= 0) {
        arrangementerText.classList.add('animate-fade-in');
    } else {
        arrangementerText.classList.remove('animate-fade-in');
    }

    if (historieRect.top <= screenHeight && historieRect.bottom >= 0) {
        historieText.classList.add('animate-fade-in');
    } else {
        historieText.classList.remove('animate-fade-in');
    }

    // Animasjon for aktivitetselementene
    const activities = document.querySelectorAll('.activity');
    const images = document.querySelectorAll('.animate-on-scroll');

    activities.forEach(activity => {
        const rect = activity.getBoundingClientRect();

        if (rect.top <= screenHeight && rect.bottom >= 0) {
            activity.classList.add('animate-fade-in');
        } else {
            activity.classList.remove('animate-fade-in');
        }
    });

    images.forEach(image => {
        const rect = image.getBoundingClientRect();

        if (rect.top <= screenHeight && rect.bottom >= 0) {
            image.classList.add('animate-fade-in');
        } else {
            image.classList.remove('animate-fade-in');
        }
    });
}

window.addEventListener('scroll', function() {
    scrollFunction();
});

// Trigger scroll function on page load
window.addEventListener('load', function() {
    scrollFunction();
});