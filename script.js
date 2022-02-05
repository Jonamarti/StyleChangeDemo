window.onload = () => {
    console.log(document.styleSheets)
    var butt = document.getElementById("changeStyleButt");   
};

function changeStyle(lab){
    var sty = document.getElementById("stylesheet");
    sty.href = "./styles/"+lab+".css";
};