window.onload = function () {
    let errorMsg = document.querySelectorAll('#errorMsg');
	let form = document.querySelectorAll('.configForm');
	let arrayInputs = [];

	form.forEach((oneForm,i) => {
		arrayInputs.push(Array.from(oneForm.elements));
		arrayInputs[i].pop();
	})


	let errores = {};
	for(let i = 0; i < arrayInputs.length;i++)
	{

		arrayInputs[i].forEach(function (oneInput) {
			oneInput.addEventListener('blur', function () {
	
				let inputValue = this.value;
				if (validator.isEmpty(inputValue, { ignore_whitespace: true })) {
					this.classList.remove('is-valid')
					this.classList.add('is-invalid')
					this.nextElementSibling.innerHTML = `El campo ${this.dataset.name} es obligatorio`;
						
					errores[this.name] = true;
	
					console.log(errores);
				} else {
					// validar que el texto ingresado en el input sea un email
					if(this.dataset.name == 'Email'){
						if(validator.isEmail(this.value, { ignore_whitespace: true })){
	
							this.classList.remove('is-invalid')
							this.classList.add('is-valid')
							this.nextElementSibling.innerHTML = ``;
								
							delete errores[this.name];
						} else {
							this.classList.add('is-invalid')
							this.classList.remove('is-valid')
							this.nextElementSibling.innerHTML = `Debes ingresar un Email valido`;
						}
					} else {
	
						this.classList.remove('is-invalid')
						this.classList.add('is-valid')
						this.nextElementSibling.innerHTML = ``;
							
						delete errores[this.name];
					}
					
					console.log(errores);
				}
			});
		});
	}
	form.forEach((oneForm,i) =>{

		oneForm.addEventListener('submit', function(e) {
	
			arrayInputs[i].forEach(function (oneInput) {
	
				let inputValue = oneInput.value;
	
				if (validator.isEmpty(inputValue, { ignore_whitespace: true })) {
	
					oneInput.classList.add('is-invalid')
					oneInput.nextElementSibling.innerHTML = `El campo ${oneInput.dataset.name} es obligatorio`;
	
					 errores[oneInput.name] = true;
				} 
			});
	
			if (Object.keys(errores).length > 0) {
				console.log(errores);
				e.preventDefault();
				errorMsg[i].innerHTML = 'Uno o mas campos contienen errores'
			}
			 
		})
	})
		}
