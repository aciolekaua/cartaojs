const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

function prev() {
    const inName = document.getElementById("inName").value;
    const inBirth = document.getElementById("inBirth").value;
    const inField = document.getElementById("inField").value;
    const inYear = document.getElementById("inYear").value;
    const inNum = document.getElementById("inNum").value;

    const name = document.getElementById("name");
    const birth = document.getElementById("birth");
    const fieldYear = document.getElementById("fieldYear");
    const num = document.getElementById("num");


    name.innerHTML = inName;
    birth.innerHTML = inBirth;
    fieldYear.innerHTML = inField + "0" + inYear;
    num.innerHTML= inNum;


    const canvas = document.getElementById("result");

    canvas.height = canvas.width / 1.616;
    const ctx = canvas.getContext("2d");
    ctx.font = "20px Helvetica";


    ctx.beginPath();
    ctx.fillStyle = "#159"
    ctx.rect(0, 0, 300, 56);
    ctx.fill();
    
    ctx.fillStyle = "#fff"
    ctx.fillText("Campus Card", 10, 25);
    ctx.font = "16px Arial"
    ctx.fillText("Undergraduate", 15, 45);
    const logo = document.getElementById("logo");
    ctx.drawImage(logo, 230, 3, 50, 50);

    ctx.beginPath();
    ctx.fillStyle = "#fff";
    ctx.rect(0, 56, 300, 120);
    ctx.fill();
    
    ctx.fillStyle = "#000";
    ctx.fillText(name.innerHTML, 110, 90);
    ctx.fillText(birth.innerHTML, 110, 115);
    ctx.fillText(fieldYear.innerHTML, 110, 140);
    ctx.fillText("SubN° " + num.innerHTML, 110, 165);
    
    
    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 10, 65, 80, 105);
}


const down = document.getElementById("down");
down.addEventListener("click", function(){
    
    const canvas = document.getElementById("result");

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Cartão.png";
    a.click();
    document.body.removeChild(a);
});


function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
}

