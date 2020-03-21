// insertar skills en el select ------------------------------
let selectSkills = document.querySelector('#skill_id');

axios.get('/api/skills')
.then(response => {

    let skills = response.data.response;
    for(let skill of skills){
        selectSkills.innerHTML += `<option value="${skill.skill_id}">${skill.skill_name}</option>`
    }
})

// agregar skills al CV ---------------------------------------
let buttonAdd = document.querySelector('#add');
let cliente = selectSkills.getAttribute('data-user');

// funcion para comprobar si el cliente ya tiene el skill
function checkSkill(skill, skills){

    for(item of skills){
        if(item.user_skill.skill_id == skill){
            return true
        }
    }
}

// traer e imprimir los skills del cliente 
function imprimirSkills(add){
    axios.get(`/api/clientes/skills/${cliente}`)
    .then(result => {

        let data = result.data.response.skill;
        let skillsWrapper = document.querySelector('.skills .areas');
        if(add){
            skillsWrapper.innerHTML = '';
        }
        for(item of data){

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
buttonAdd.addEventListener('click', function(){

    let skill = selectSkills.value;
    // traer todos los skills
    axios.get(`/api/clientes/skills/${cliente}`)
    .then(result => {
        let data = result.data.response.skill;
        // comprobar si el skill ya esta guardado
        if(!checkSkill(skill, data)){
            // si el skill no esta en la DB ejecutamos
            axios.post('/api/clientes/skills/', {
                user_id: cliente,
                skill_id: skill
            })
            .then(response => {
                console.log(response);
                // con el param true, sobreescribe el contenido del div
                imprimirSkills(true);
                traerBotones();
            })
            .catch( error => console.log(error) )
        }
    })

})

// eliminar skills ---------------------------------------------

function deleteSkill(user,skill,callback){
    axios.delete('/api/clientes/skills/', {
                user_id: user,
                skill_id: skill
            })
            .then(response => {
                console.log(response);
                // con el param true, sobreescribe el contenido del div
                callback(true);
            })
            .catch( error => console.log(error) ) 
}

function traerBotones(){

    let deleteButtons = document.querySelectorAll("#delete");

    for(button of deleteButtons){

        let id = button.getAttribute('data-id');

        button.addEventListener('click',function(){

            deleteSkill(cliente,id,imprimirSkills);
            
        })
    }
}

// esperar que se carguen los skills del cliente
setTimeout(function(){
    traerBotones()
},3000);