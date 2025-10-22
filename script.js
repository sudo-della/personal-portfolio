function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.menu-links').classList.remove('open');
        document.querySelector('.hamburger-icon').classList.remove('open');
    });
});

function closeMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    menu.classList.remove('open');
    icon.classList.remove('open');
    menu.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.forms['submit-to-google-sheet'];
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwtRoMCzcpyHHf8xNbZTLkfcPyth67SIXlnJPMGjOxkJ_U6bWpUFrM-ZsEgIsg0Zxw/exec';
        
        const msg = document.getElementById('msg-success');
        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            console.log('Success!', response);
            alert('Message sent successfully!');
            setTimeout(function(){
                msg.innerHTML = ""},5000)
                form.reset();
            })
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Something went wrong. Please try again later.');
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector(".multiple-text");
    const words = ["Software Engineer"];
    let wordIndex = 0;
    let charIndex = 0;
    let typingSpeed = 150;
    let erasingSpeed = 100;
    let delayBetweenWords = 1000;

    function type() {
        if (charIndex < words[wordIndex].length) {
            textElement.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenWords);
        }
    }

    function erase() {
        if (charIndex > 0) {
            textElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, 500);
        }
    }

    if (textElement) type();
});

