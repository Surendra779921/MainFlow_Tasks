document.addEventListener('DOMContentLoaded', function() {
    // Form Validation
    document.getElementById('myForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;

        // Name validation
        const name = document.getElementById('name').value;
        const nameError = document.getElementById('nameError');
        if (name === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Email validation
        const email = document.getElementById('email').value;
        const emailError = document.getElementById('emailError');
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Invalid email address.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (isValid) {
            alert('Form submitted successfully!');
            // Form submission logic here
        }
    });

    // Interactive Menu
    const menuItems = document.querySelectorAll('#menu > li');
    menuItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) submenu.style.display = 'block';
        });

        item.addEventListener('mouseout', function() {
            const submenu = this.querySelector('.submenu');
            if (submenu) submenu.style.display = 'none';
        });
    });

    // Dynamic Content Update
    document.getElementById('dynamicInput').addEventListener('input', function() {
        const input = this.value;
        document.getElementById('dynamicOutput').textContent = input;
    });
});
