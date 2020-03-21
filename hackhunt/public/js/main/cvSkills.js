// insertar skills en el select
let selectSkills = document.querySelector('#skill_id');

axios.get('/api/skills')
.then(response => {

    let skills = response.data.response;
    for(let skill of skills){
        selectSkills.innerHTML += `<option value="${skill.skill_id}">${skill.skill_name}</option>`
    }
})

// agregar skills al CV
let buttonAdd = document.querySelector('#add');
let cliente = selectSkills.getAttribute('data-user');

// funcion para comprobar si el cliente ya tiene el skill
function checkSkill(skill, skills){

    for(item of skills){
        if(item.skill_id == skill){
            return true
        }
    }
}

// traer e imprimir los skills del cliente 
axios.get(`/api/clientes/skills/${cliente}`)
.then(result => {

    let data = result.data.response;
    let skillsWrapper = document.querySelector('.skills .areas');
    console.log(data);
    
    for(item of data){
        
        let elem = `
        <div class="item" data-id="${item.skill_id}">
            <span id="delete">X</span>
            <h2>skill</h2>
        </div>
        `;
        skillsWrapper.innerHTML += elem;
    }
}).catch(error => console.log(error))

// event handler
buttonAdd.addEventListener('click', function(){

    let skill = selectSkills.value;
    // traer todos los skills
    axios.get(`/api/clientes/skills/${cliente}`)
    .then(result => {
        let data = result.data.response;
        // comprobar si el skill ya esta guardado
        if(!checkSkill(skill, data)){
            // si el skill no esta en la DB ejecutamos
            axios.post('/api/clientes/skills/', {
              user_id: cliente,
              skill_id: skill
            })
            .then(response => {
              console.log(response);
            })
            .catch( error => console.log(error) )
        }
    })

})