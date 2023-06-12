let bar=document.querySelector('.bar')
let ball=document.querySelector('.ball')

let barX=0;

onkeydown=barMove;
function barMove(e){
    if(e.keycode=== 39){
        if(barX<500){
            barX+=20;
        }
        console.log(barX);
    }
}