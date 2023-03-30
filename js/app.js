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


function hideBird(clicked_id){
    document.getElementById(clicked_id).style.display="none";
    let x = Math.floor((Math.random() * 10) + 1)
    setTimeout(()=>{
        document.getElementById(clicked_id).style.display="block"; 
    },x*1000);
}