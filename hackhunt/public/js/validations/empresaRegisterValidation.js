window.onload = function () {
    let errorMsg = document.querySelector('#errorMsg');
    let form = document.querySelector('#registerForm');
    let formInputs = Array.from(form.elements);

    formInputs.pop();
    formInputs.pop();
    formInputs.pop();

    let errores = {};


    async function verificarEmail()
{
   
    let input = document.querySelector("#cmp_user_email")
    let url = "/api/empresas/email?email=" + input.value;
    let fetchEmail = await fetch(url);
    let emailUsed = await fetchEmail.json();
    if(emailUsed.response[0])
    {
        input
        .classList
        .add('is-invalid')
    input
        .classList
        .remove('is-valid')
    input.nextElementSibling.innerHTML = `Email en uso`;
        return false
    }
    else
    {
        input
                            .classList
                            .remove('is-invalid')
                        input
                            .classList
                            .add('is-valid')
                        input.nextElementSibling.innerHTML = ``;
                        delete errores[input.name];
        return true
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


                        verificarEmail()
                      
                    }
                    else
                    {
                        this
                        .classList
                        .add('is-invalid')
                    this
                        .classList
                        .remove('is-valid')
                    this.nextElementSibling.innerHTML = `El formato de email es invalido`;
                    } 
                }
                
                else {

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
