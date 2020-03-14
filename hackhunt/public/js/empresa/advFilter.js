/*window.onload = function()
{
    let form = document.getElementById("filterForm");
    let formItems = Array.from(form.elements);
    
    formItems.forEach(oneItem =>{
        oneItem.addEventListener('click', function(){
            let url = `/empresa/anuncios?filter=${this.value}`;
            fetch(url)
            .then(result =>{
                return result.json();
            })
            .then(response =>{
                console.log(response)
            })
        })
    })
}*/