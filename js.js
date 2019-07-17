var i=0;
var images=[];
var time=1000;
//khai bao ảnh
images[0]='../images/banner1.jpg';
images[1]='../images/banner2.jpg';
images[2]='../images/banner3.jpg';
images[3]='../images/banner4.jpg';
images[4]='../images/banner5.jpg';
///change images
function changeImages() {
    document.slide.src=images[i];
    if (i<images.length-1){
        i++;
    }else {
        i=0;
    }
    setTimeout("changeImages()",time);
    
}
window.onload=changeImages;