setTimeout(() => {
    // la funcion se hace asincrona ya que los filtros de skills vienen desde Api
    // traemos todos los filtros
    const params = document.querySelectorAll('dd a');
    // traemos todos los anuncios
    axios.get('/api/anuncios')
    .then(result => {
        let anuncios = result.data.response;
        // recorremos cada uno de los filtros
        for(let filtro of params){
            // traemos todos los anuncios donde se encuentre ese filtro
            let total = anuncios.filter( adv => {
                return(
                    adv.adv_description.includes(filtro.text.substring(0,5)) || 
                    adv.adv_working_day.includes(filtro.text.substring(0,5)) ||
                    adv.adv_title.includes(filtro.text.substring(0,5)) ||
                    adv.adv_position.includes(filtro.text.substring(0,5))
                )
            } )  
            // el tag <span> es hijo del <a> del filtro, por lo que
            // con la prop lastElementChild le inyectamos el total de 
            // anuncios que incluyen ese filtro     
            filtro.lastElementChild.innerHTML = `(${total.length})`
            
        }
        
    })

    
},2000)