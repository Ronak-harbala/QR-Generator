const inputBox = document.querySelector("#input-text");
const btn = document.querySelector("#btn")
const image = document.querySelector("#image");

btn.addEventListener("click",()=>{
    if(inputBox.value === ''){
        alert("Input field can't be empty :)");
    }else{
    let api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`;
    image.setAttribute("src",api);
    image.classList.remove("hide");
    inputBox.value = "";
    }
})