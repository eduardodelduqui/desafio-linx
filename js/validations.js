const formNewsletter = document.querySelector('.form-section-newsletter');
const formRegister = document.querySelector('.form-section-register');

formNewsletter.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateInputs(formNewsletter)){
        formNewsletter.submit()
    }
});

formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    if(validateInputs(formRegister)){
        formRegister.submit()
    }
});

/**
 * Returns a Boolean value that indicates whether inputs are valid
 * @param {Object} required form - A DOM Object form
 * @returns {boolean]} 
 */
function validateInputs(form) {
    const formValue = getValues(form);
    let validValues = []
    
    if(!validName(formValue.name)){
        form.elements.namedItem('name').classList.add('invalid-input');
        form.querySelector('.invalid-name').classList.remove('invisible');
        validValues.push(false)
    }else{
        form.elements.namedItem('name').classList.remove('invalid-input');
        form.querySelector('.invalid-name').classList.add('invisible');
        validValues.push(true)
    }

    if(!validEmail(formValue.email)){
        form.elements.namedItem('email').classList.add('invalid-input');
        form.querySelector('.invalid-email').classList.remove('invisible');
        validValues.push(false)
    }else {
        form.elements.namedItem('email').classList.remove('invalid-input');
        form.querySelector('.invalid-email').classList.add('invisible');
        validValues.push(true)
    }

    if(formValue.cpf){
        if(!validCPF(formValue.cpf)){
            form.elements.namedItem('cpf').classList.add('invalid-input');
            form.querySelector('.invalid-cpf').classList.remove('invisible');
            validValues.push(false)
        }else {
            form.elements.namedItem('cpf').classList.remove('invalid-input');
            form.querySelector('.invalid-cpf').classList.add('invisible');
            validValues.push(true)
        }
    }
    if(!validValues.includes(false)){
        return true
    }
}

/**
 * Returns values from a DOM Object form
 * @param {DOM Object} form 
 */
function getValues(form) {
    const nameValue = form.elements.namedItem('name').value.trim();
    const emailValue = form.elements.namedItem('email').value.trim();
    const cpfInput = form.elements.namedItem('cpf');
    if(cpfInput) {
        const cpfValue = cpfInput.value.trim();
        return {
            name: nameValue,
            email: emailValue,
            cpf: cpfValue
        }
    }
    return {
        name: nameValue,
        email: emailValue,
    }
}

/**
 * Returns a Boolean value that indicates whether an e-mail is valid
 * @param {any} required email
 * @returns {boolean]} 
 */
function validEmail(email) {
    const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

/**
 * Returns a Boolean value that indicates whether a name is valid
 * @param {any} required name
 * @returns {boolean]} 
 */
function validName(name) {
    const reg = /^[A-Za-z ]+$/
    return reg.test(name);
}

/**
 * Returns a Boolean value that indicates whether a CPF is valid
 * @param {Object} required strCPF
 * @returns {boolean]} 
 */
function validCPF(strCPF) {
    var sum;
    var rest;
    sum = 0;
    strCPF = strCPF.replace(/\./g,'').replace('-','');
  if (strCPF == "00000000000") return false;

  for (i=1; i<=9; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(strCPF.substring(9, 10)) ) return false;

  sum = 0;
    for (i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest == 10) || (rest == 11))  rest = 0;
    if (rest != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}