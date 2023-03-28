// Logic to Move the Aim Image
function moveAimImage(e){
let x,y;
    if( e.clientX - 35 < 0 || e.clientY - 35 < 0){
        x=e.clientX;
        y=e.clientY;
    }else{
        x=e.clientX - 35;
        y=e.clientY - 35;
    }

    var imageDiv=document.getElementById("aimImage");
    imageDiv.style.left=x + 'px';
    imageDiv.style.top=y + 'px';
}


