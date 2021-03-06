window.onload = function () {
    let errorMsg = document.querySelector('#errorMsg');
    let form = document.querySelector('#registerForm');
    let formInputs = Array.from(form.elements);

    formInputs.pop();
    formInputs.pop();

    let errores = {};
 
    async function usedEmail()
    {
        let email = document.querySelector('#user_email')
        let url = "/api/clientes/email?check="+email.value;
        let response = await fetch(url);
        let data = await response.json();
        if(data.response)
        { 
            
                        email
                            .classList
                            .add('is-invalid')
                        email
                            .classList
                            .remove('is-valid')
                        email.nextElementSibling.innerHTML = `Email en uso`;    
            return true;
        }
        else
        {
        
                            email
                                .classList
                                .remove('is-invalid')
                            email
                                .classList
                                .add('is-valid')
                            email.nextElementSibling.innerHTML = ``;
    
                            delete errores[email.name];
            return false;
        }
    }


    formInputs.forEach(function (oneInput) {
        oneInput.addEventListener('blur', function () {

            let inputValue = this.value; 
            if (validator.isEmpty(inputValue, {ignore_whitespace: true})) {
                this
                    .classList
                    .remove('is-valid')
                this
                    .classList
                    .add('is-invalid')
                this.nextElementSibling.innerHTML = `El campo ${this.dataset.name} es obligatorio`;

                errores[this.name] = true;

                console.log(errores);
            } else {
                // validar que el texto ingresado en el input sea un email
                if (this.dataset.name == 'Email') {
                    if (validator.isEmail(this.value, {ignore_whitespace: true})) {
                        usedEmail();
                    } else {
                        this
                            .classList
                            .add('is-invalid')
                        this
                            .classList
                            .remove('is-valid')
                        this.nextElementSibling.innerHTML = `Debes ingresar un Email valido`;
                    }
                } else {

                    this
                        .classList
                        .remove('is-invalid')
                    this
                        .classList
                        .add('is-valid')
                    this.nextElementSibling.innerHTML = ``;

                    delete errores[this.name];
                }

                console.log(errores);
            }
        });
    });

    form.addEventListener('submit', function (e) {

        formInputs.forEach(function (oneInput) {

            let inputValue = oneInput.value;

            if (validator.isEmpty(inputValue, {ignore_whitespace: true})) {

                oneInput
                    .classList
                    .add('is-invalid')
                oneInput.nextElementSibling.innerHTML = `El campo ${oneInput.dataset.name} es obligatorio`;

                errores[oneInput.name] = true;
            }
        });

        if (Object.keys(errores).length > 0) {
            console.log(errores);
            e.preventDefault();
            errorMsg.innerHTML = 'Uno o mas campos contienen errores'
        }

    })
}
