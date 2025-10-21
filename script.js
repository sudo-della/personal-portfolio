function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
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
