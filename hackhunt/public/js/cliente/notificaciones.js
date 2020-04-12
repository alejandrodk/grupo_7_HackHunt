
let form = document.querySelector(".notificaciones_form")
let form_array = Array.from(form.elements)
let user_email = document.getElementById("user_email").value
let notificaciones = {};

(async function getDatos()
{
   await fetch('/api/clientes/notificaciones',{method:"GET"})
    .then(result => result.json())
    .then(data => {
        console.log(data)
        notificaciones = data
        checkbox();
    })
    .catch(error => console.log(error))
})();



function checkbox(){
    form_array.forEach(oneItem =>
        {
            if(notificaciones.response)
            {
                notificaciones.response.forEach(oneNoti =>
                    {
                        if(oneNoti.notification_name == oneItem.getAttribute("name"))
                        {
                            oneItem.checked = true;
                        }
                    })
            }
    
            oneItem.addEventListener('click',function()
            {
                let body = {
                    email: user_email,
                    input_form: oneItem.name,
                    input_value: oneItem.checked
                }
                fetch('/api/clientes/notificaciones',
                {
                    method: "POST",
                    body: JSON.stringify(body),
                    headers : {
                        'content-type' : 'application/json'
                    }
                })
                .then(result => result.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))
            })
        })
}

