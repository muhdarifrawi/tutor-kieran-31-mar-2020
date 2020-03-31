function changeBlue(){
    document.getElementsByTagName("h1")[1].style.color="blue";

}

function changeRed(){
    document.getElementsByTagName("h1")[1].style.color="red";

}

function changeGreen(){
    document.getElementsByTagName("h1")[1].style.color="green";

}

function boxColorA(){
    let x = document.getElementsByClassName("box-a")[0];
    console.log(x)
    x.style.backgroundColor="grey";
}

function boxColorB(){
    document.getElementsByClassName("box-a")[0].style.backgroundColor="blue";
}

function boxColorC(){
     document.getElementById("box-b").style.backgroundColor="grey";
}

function boxColorD(){
    document.getElementById("box-b").style.backgroundColor="blue";
}