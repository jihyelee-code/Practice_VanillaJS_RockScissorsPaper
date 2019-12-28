const userInput = document.querySelector('#userInput'),
    image = document.querySelector('#image'),
    h2=document.querySelector('div h2');
let left =-15;
let inter='';
let imageX = '';
let clickedBtnNumber ='';
const rps={
    rock : -15,
    scissors : -100,
    paper : -190 
}
function clickHandler(event){
    const ET=event.target;
    if(ET.classList.contains('user')){
        clearInterval(inter);
        const clickedBtn=ET.id; //userCLICKEDbUTTON
        const rpsObj = Object.entries(rps);
        let comNum='';
        let meNum='';
        if(rpsObj[0][0]===imageX){
            comNum=1;
        }else if(rpsObj[1][0]===imageX){
            comNum=0;
        }else if(rpsObj[2][0]===imageX){
            comNum=-1;
        }
        if(clickedBtn==='rock'){
            meNum=1;
        }else if(clickedBtn==='scissors'){
            meNum=0;
        }else if(clickedBtn==='paper'){
            meNum=-1;
        }

        if(comNum-meNum===0){
            h2.innerText='Draw';
            h2.classList.add('show');
        }else if((comNum-meNum===-2) || (comNum-meNum===1)){
            h2.innerText='Computer Win';
            h2.classList.add('show');
        }else if((comNum-meNum===-1) || (comNum-meNum===2)){
            h2.innerText='You win';
            h2.classList.add('show');
        }
        
    }
    setTimeout(loadImage,2000);
}
function loadImage(){
    h2.classList.remove('show')
    inter = setInterval(function(){
        if(left===rps.rock){
            left=rps.scissors;
            imageX='scissors';
        }else if(left===rps.scissors){    
            left=rps.paper;
            imageX='paper';
        }else if(left===rps.paper){
            left=rps.rock;
            imageX='rock';
        }
        image.style.backgroundPositionX=`${left}px`;
    },200);
}
function init(){
    loadImage();
    userInput.addEventListener('click',clickHandler);
    
}

init();