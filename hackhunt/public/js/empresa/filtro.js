window.onload = function()
{

let radioPostulantes = document.querySelectorAll(".filtrar");
let radioAnuncios = document.querySelectorAll(".adv_filtro");

if(radioPostulantes != "")
{

    radioPostulantes.forEach(unRadio => {
        unRadio.addEventListener("click", function()
        {
            if(unRadio.getAttribute("data-name") == "all")
            {
                location.href = "/empresa/anuncios/postulantes/"+unRadio.getAttribute("id");    
            }
            else
            {
                location.href = "/empresa/anuncios/postulantes/"+unRadio.getAttribute("id")+"?filter="+unRadio.getAttribute("data-name");
            }
        })
    })
}

if(radioAnuncios != "")
{
    radioAnuncios.forEach(unRadio => {
        unRadio.addEventListener("click", function()
        {
            
            if(unRadio.getAttribute("data-name") == "all")
            {
                location.href = "/empresa/anuncios/";    
            }
            else
            {
                location.href = "/empresa/anuncios?filter="+unRadio.getAttribute("data-name");
            }
        })
    })
}



}