var originalText = "Hover over an image below to display here!";
function upDate(previewPec){
    document.getElementById("image").style.backgroundImage = "url('"+ previewPec.src + "')";
    document.getElementById("image").innerHTML = previewPec.alt;
}

function unDo(){
    document.getElementById("image").style.backgroundImage = "url('')";
    document.getElementById("image").innerHTML = originalText;
    console.log("Mouse left the image.");
}