window.onload = function() {
    var skills = document.getElementById('skill_id');
    var addButton = document.getElementById('adItem');
    var areas = document.querySelector('.areas');
    var form = document.querySelector(".formulario");
    deleteSkill();
    addButton.addEventListener('click', function(){
        let checkHidden = document.querySelectorAll('.hiddenSkill');
        let ass = 0;
        for(let i = 0; i< checkHidden.length; i++)
        {
            if(checkHidden[i].value == skills.value)
            {
                ass = 1;
            }
        }
        if(ass==0){

            var div = document.createElement('DIV');
            div.setAttribute('class','item');
            div.setAttribute('id',skills.value);
            
            var hiddenInput = document.createElement('INPUT');
            hiddenInput.setAttribute('name','elskill');
            hiddenInput.setAttribute('class','hiddenSkill');
            hiddenInput.setAttribute('type','hidden');
            hiddenInput.value = skills.value;
            form.appendChild(hiddenInput);

            var a = document.createElement('A')
            a.setAttribute('id','deleteSkill');
            a.innerHTML = "X";

            var h2 = document.createElement('H2');
            h2.setAttribute('id',skills.value);
            h2.innerHTML = skills[skills.selectedIndex].innerHTML;

            areas.appendChild(div);
            div.appendChild(a);
            div.appendChild(h2);

            deleteSkill();
        
        }
    })
    function deleteSkill()
    {
        let hidInput = document.querySelectorAll('.hiddenSkill');
        var del = document.querySelectorAll('#deleteSkill');
        for(var i = 0; i<del.length;i++){
            del[i].addEventListener('click',function(){
                for(let n = 0;n<hidInput.length;n++)
                {
                    if(hidInput[n].value == this.parentNode.children[1].getAttribute('id')){
                        hidInput[n].remove();
                    }
                }
                this.parentNode.remove();
                
            })
        }
    }
    
}