

let userscore =0;
let compscore =0;

const choices = document.querySelectorAll('.choice');
const message = document.querySelector("#message");

const userscoreparagraph = document.querySelector("#userscore");
const compscoreparagraph = document.querySelector("#compscore");

const genCompChoice = () => {
    const options = ['stone', 'paper', 'scissors'];
   const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const draw = () => {
    console.log("its a tie");
    message.innerText = "its a tie";
    message.style.backgroundColor = "gray";
};

const showWinner = (userwins,userchoice,compchoice) => {
    if(userwins){
        userscore++;
        userscoreparagraph.innerText = userscore;
        console.log("you wins");
        message.innerText = `You wins! your ${userchoice} beats ${compchoice}`;
        message.style.backgroundColor = "green";
    }else{
        compscore++;
        compscoreparagraph.innerText = compscore;
        message.innerText = `You lose. your ${userchoice} beats ${compchoice}`;
message.style.backgroundColor = "red";
    }}
const playgame = (userchoice) => {
console.log("user choice is " + userchoice); 
const compchoice = genCompChoice();
console.log("computer choice is " + compchoice);

if(userchoice === compchoice){
    draw();
}else{
    let userwins = true;
    if(userchoice ==="rock")
{
   userwins = compchoice==="paper"? false : true;
}else if(userchoice ==="paper"){
    userwins = compchoice==="scissors"? false : true;
}else{
    userwins = compchoice==="rock"? false : true;
}
showWinner(userwins,userchoice,compchoice);
}};


choices.forEach((choice => {
    choice.addEventListener('click', () => {
        const userchoice = choice.getAttribute('id');
    console.log(" choice was clicked " + userchoice);
    playgame(userchoice);
    });
}))