let images1=["1.jpg","2.jpg","3.jpg","istockphoto-1181008443-612x612.jpg","istockphoto-1284791462-612x612.jpg"];
let currentimage=0;

function changeimage(){
    let images=document.getElementById("images");
    currentimage=(currentimage+1)%images1.length;
    images.src=images1[currentimage];
}
