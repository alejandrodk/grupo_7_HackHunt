let labels = document.querySelectorAll('.menu dl');

labels.forEach( label => {
    label.addEventListener('click',function() {
        label.classList.toggle('active')
    })
})