setTimeout(() => {
    // la funcion se hace asincrona ya que los filtros de skills vienen desde Api
    // traemos todos los filtros
    const params = document.querySelectorAll('.menu dd a');
    
    // traemos todos los anuncios
    axios.get('/api/anuncios') 
    .then(result => {
        let anuncios = result.data.response;

        // recorremos cada uno de los filtros
        for(let filtro of params){
            // traemos todos los anuncios donde se encuentre ese filtro
            
            
            let anu = []
            anuncios.map( adv => {
                    
                    if(filtro.text.toLowerCase().includes(adv.adv_working_day.toLowerCase()))
                    {
                       return anu.push(adv) 
                    }

                    if(adv.adv_description.toLowerCase().includes(filtro.text.toLowerCase()) || adv.adv_title.toLowerCase().includes(filtro.text.toLowerCase()))
                    {
                       return anu.push(adv) 
                    }
                
                
                    adv.adv_skills.forEach(unSkill =>
                        {
                            if(filtro.text == unSkill.skill_name)
                            {
                                anu.push(adv)
                            }
                        })
                
             
                   
                
            } )  
            // el tag <span> es hijo del <a> del filtro, por lo que
            // con la prop lastElementChild le inyectamos el total de 
            // anuncios que incluyen ese filtro     
            filtro.lastElementChild.innerHTML = `(${anu.length})`
            
        }
        
    })

    
},2000)