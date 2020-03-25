let avatarIcon = document.querySelector(".fa-edit");
let lightbox = document.querySelector(".lightbox");
let close = document.querySelector(".close");
let file = document.querySelector("#file");
var output = document.getElementById('output_image');

avatarIcon.addEventListener("click", function()
{
    lightbox.style.display = "flex"
})

close.addEventListener("click", function()
{
    lightbox.style.display = "none"
})

file.addEventListener("change",function()
{
    file = document.querySelector("#file")
    let archivo =  _PREVIEW_URL = URL.createObjectURL(file.files[0]);
    output.setAttribute('src', _PREVIEW_URL);
})


