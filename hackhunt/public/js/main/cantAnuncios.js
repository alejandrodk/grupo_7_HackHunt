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
            
            
        
            let anu = anuncios.filter( adv => {
             console.log(adv.adv_description)
              return adv.adv_description.includes(filtro)
                
            } )  
            // el tag <span> es hijo del <a> del filtro, por lo que
            // con la prop lastElementChild le inyectamos el total de 
            // anuncios que incluyen ese filtro     
            filtro.lastElementChild.innerHTML = `(${anu.length})`
            
        }
        
    })

    
},2000)