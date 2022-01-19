Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality:90
});

camera = document.getElementById("webcam");
Webcam.attach("#webcam");
function snap(){
Webcam.snap(function (any){
document.getElementById("picture").innerHTML= "<img id='img1' src='" +any+ "'/>";
});
}
console.log("ml5 verzion", ml5.verzion);