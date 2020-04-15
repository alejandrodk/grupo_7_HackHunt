let divSkills = document.querySelector('.container');

// 1- insertar skills en el select ------------------------------
let selectSkills = document.querySelector('#skill_id');
console.log('insertar skills en el select')
axios.get('/api/skills')
    .then(response => {

        let skills = response.data.response;
        for (let skill of skills) {
            selectSkills.innerHTML += `<option value="${skill.skill_id}">${skill.skill_name}</option>`
        }
    })

// agregar skills al CV ---------------------------------------
let buttonAdd = document.querySelector('#add');
// 2- traer n° de cliente
let cliente = selectSkills.getAttribute('data-user');

// funcion para comprobar si el cliente ya tiene el skill
function checkSkill(skill, skills) {
    console.log('---- checkSkill() -----');

    for (item of skills) {
        if (item.user_skill.skill_id == skill) {
            return true
        }
    }
}

// 3- traer e imprimir los skills del cliente 
function imprimirSkills(add) {
    console.log('---- imprimirSkills() -----');
    divSkills.style.cursor = 'auto';
    axios.get(`/api/clientes/skills/${cliente}`)
        .then(result => {

            let data = result.data.response.skill;
            let skillsWrapper = document.querySelector('.skills .areas');
            /*
            si la funcion recibe un parametro true, borramos todos los skills del box
            antes de volver a agregarlos, de lo contrario se sumarian los ya existentes
            */
            if (add) {
                skillsWrapper.innerHTML = '';
            }
            // agregamos los skills al box
            for (item of data) {
                let elem = `
            <div class="item">
                <span id="delete" data-id="${item.user_skill.skill_id}">X</span>
                <h2>${item.skill_name}</h2>
            </div>
            `;
                skillsWrapper.innerHTML += elem;
            }
        }).catch(error => console.log(error))
}
// Traemos los skills y los imprimimos con la funcion imprimirSkills()
// con el param false, agrega el contenido al div sin borrar el anterior
imprimirSkills(false);

// Evento agregar skill --------------------------------------------
buttonAdd.addEventListener('click', function () {
    console.log('---- Agregar Skill -----');
    divSkills.style.cursor = 'wait';
    let skill = selectSkills.value;
    // traer todos los skills
    axios.get(`/api/clientes/skills/${cliente}`)
        .then(result => {
            let data = result.data.response.skill;
            // comprobar si el skill ya esta guardado
            if (!checkSkill(skill, data)) {
                // si el skill no esta en la DB ejecutamos
                axios.post('/api/clientes/skills/', {
                        user_id: cliente,
                        skill_id: skill
                    })
                    .then(response => {
                        console.log(response);
                        // con el param true, sobreescribe el contenido del div
                        imprimirSkills(true);
                        traerBotonesDelay();
                    })
                    .catch(error => console.log(error))
            }
        })

})

// eliminar skills ---------------------------------------------

function deleteSkill(user, skill) {
    console.log('---- deleteSkill() -----');
    divSkills.style.cursor = 'wait';
    axios.post('/api/clientes/skills/delete', {
            user_id: user,
            skill_id: skill
        })
        .then(() => {

            // con el param true, sobreescribe el contenido del div
            imprimirSkills(true);
            traerBotonesDelay()
        })
        .catch(error => console.log(error))
}

function traerBotones(deleteEvents) {
    console.log('---- traerBotones() -----');

    let deleteButtons = document.querySelectorAll("#delete");

    for (button of deleteButtons) {

        let id = button.getAttribute('data-id');

        button.addEventListener('click', function () {

            deleteSkill(cliente, id);

        })
    }
}

// esperar que se carguen los skills del cliente
function traerBotonesDelay() {
    divSkills.style.cursor = 'wait';
    console.log('---- traerBotonesDelay() -----');
    setTimeout(function () {
        console.log('setTimeOut activado');
        traerBotones()
    }, 1500);
}
traerBotonesDelay();