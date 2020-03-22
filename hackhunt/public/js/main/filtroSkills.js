let filtros = document.querySelector('#filter-skills');

axios.get(`/api/skills/`)
        .then(result => {

        let skills = result.data.response;
        for(let skill of skills){
            filtros.innerHTML += `
            <dd><a href="/skill/${skill.skill_name}/">${skill.skill_name}<span id="cant">(56)</span></a></dd>
            `
        }
        }).catch(error => console.log(error))