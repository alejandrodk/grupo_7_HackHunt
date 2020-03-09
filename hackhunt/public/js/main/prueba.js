
function prueba(){
    let probando;
    fetch('/api/favoritos')
        .then(response => response.json())
        .then(result => {
            probando = result; 
        })
        .catch(error => console.log(error))
        return probando;
    }

    console.log(prueba());