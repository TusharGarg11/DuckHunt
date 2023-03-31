let count=0;
let Timecounter=30;
// // Logic to Move the Aim Image
// function moveAimImage(e){
// let x,y;
//     if( e.clientX - 35 < 0 || e.clientY - 35 < 0){
//         x=e.clientX;
//         y=e.clientY;
//     }else{
//         x=e.clientX - 35;
//         y=e.clientY - 35;
//     }

//     var imageDiv=document.getElementById("aimImage");
//     imageDiv.style.left=x + 'px';
//     imageDiv.style.top=y + 'px';
// }

setInterval(()=>{
    if(Timecounter>=0){
        document.getElementById("currentTimer").innerHTML= --Timecounter;
    }else{
        alert("Total Score is :" + count +"\n Reload the game to play again");
    }
    
},1000);

function hideBird(clicked_id){
    document.getElementById("currentScore").innerHTML= ++count;
    document.getElementById("fireSound").play();
    document.getElementById(clicked_id).style.display="none";
    let x = Math.floor((Math.random() * 10) + 1)
    setTimeout(()=>{
        document.getElementById(clicked_id).style.display="block"; 
    },x*1000);
}