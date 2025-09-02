const nameinput = document.getElementById('name');
const password = document.getElementById('password');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const form = document.getElementById('regrestaionform');
const successmessage = document.getElementById('successMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    errorDisplay.style.display = 'block'; 
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    errorDisplay.style.display = 'none'; 
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
    const re = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
    return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const namevalue = nameinput.value.trim();
    const passwordValue = password.value.trim();
    const phonevalue = phone.value.trim();
    const emailvalue = email.value.trim();

    let isFormvalid = true; // ✅ outer flag

    
    if (namevalue === '') {
        setError(nameinput, 'Name is required');
        isFormvalid = false;
    } else {
        setSuccess(nameinput);
    }

    
    if (emailvalue === '') {
        setError(email, 'Email is required');
        isFormvalid = false;
    } else if (!isValidEmail(emailvalue)) {
        setError(email, 'Provide a valid email');
        isFormvalid = false;
    } else {
        setSuccess(email);
    }

    // Password
    if (passwordValue === '') {
        setError(password, 'Password is required');
        isFormvalid = false;
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters');
        isFormvalid = false;
    } else if (!/[A-Z]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one uppercase letter');
        isFormvalid = false;
    } else if (!/[a-z]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one lowercase letter');
        isFormvalid = false;
    } else if (!/[0-9]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one number');
        isFormvalid = false;
    } else if (!/[!@#$%^&*]/.test(passwordValue)) {
        setError(password, 'Password must contain at least one special character (!@#$%^&*)');
        isFormvalid = false;
    } else {
        setSuccess(password);
    }

    
    if (phonevalue === '') {
        setError(phone, 'Phone number is required');
        isFormvalid = false;
    } else if (!/^\d{10}$/.test(phonevalue)) {
        setError(phone, 'Phone must be 10 digits');
        isFormvalid = false;
    } else {
        setSuccess(phone);
    }

    
    if (isFormvalid) {
        successmessage.innerText = 'Form submitted successfully!';
        successmessage.style.display = 'block';
        form.reset();

        
        setTimeout(() => {
            successmessage.style.display = 'none';
        }, 3000);
    } else {
        successmessage.innerText = '';
        successmessage.style.display = 'none';
    }
};
