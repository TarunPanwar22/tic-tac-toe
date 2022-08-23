console.log("Welcome to My Tic Tac Toe Game.....");


let turn = "X"; 
let audioTurn = new Audio("ting.mp3");

let isgameover = false; 

const changeTurn = () =>{
    return turn === "X"?"0":"X"; 
}
let boxes = document.getElementsByClassName('box');



let checkWin = () =>{

    let boxtext = document.getElementsByClassName('boxtext');

    let win = [
        [0 , 1 , 2 , 0 , 5 , 0 ],
        [3 , 4 , 5 , 0 , 15 , 0 ],
        [6 , 7 , 8 , 0 , 25 , 0 ],
        [0 , 3 , 6 , -10 , 15 , -90 ],
        [1 , 4 , 7 , 0 , 15 , -90 ],
        [2 , 5 , 8 , 10 , 15 , 90 ],
        [0 , 4 , 8 , 0 , 15 , -135 ],
        [2 , 4 , 6 , 0 , 15 , 135 ],
    ]

    Array.from(win).forEach(e =>{
        console.log(boxtext.innerText)
        if(boxtext[e[0]].innerText === boxtext[e[1]].innerText && boxtext[e[2]].innerText === boxtext[e[1]].innerText && boxtext[e[0]].innerText !== ""){
            document.querySelector('.info').innerText =  boxtext[e[0]].innerText + "Win"
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector('.lines').style.width =  "30vw";
            document.querySelector('.lines').style.transform =  `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            isgameover = true;
        }
    })
}


Array.from(boxes).forEach(element =>{
    
    let boxtext = element.querySelector('.boxtext');

    element.addEventListener('click' , (e) =>{
    
        // console.log(e);
        if ( boxtext.innerText === ""){
            boxtext.innerText = turn ;
            turn = changeTurn(); 
            audioTurn.play();
            checkWin();
            if(!isgameover)
            document.querySelector('.info').innerText = "Turn for "+turn;
        }
    })
})


reset.addEventListener('click' , () =>{

    let boxtext = document.getElementsByClassName('boxtext');

    Array.from(boxtext).forEach(element =>{
        element.innerText = "";

    })
    let turn = "X"; 
    document.querySelector('.info').innerText = "Turn for "+turn; 
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
    document.querySelector('.lines').style.width =  "0vw";

})