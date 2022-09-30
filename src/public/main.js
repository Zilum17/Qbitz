"use strict";
const socket = io();
const delete_game = document.querySelector(".delete_game");
let matriz = [];
let matriz_1 = [[[5,1],[3,4]],[[6,0],[6,0]],[[6,0],[6,0]],[[3,1],[5,2]],
                [[6,0],[6,0]],[[3,2],[5,3]],[[4,0],[4,0]],[[6,0],[6,0]],
                [[6,0],[6,0]],[[4,0],[4,0]],[[5,1],[3,4]],[[6,0],[6,0]],
                [[3,3],[5,4]],[[6,0],[6,0]],[[6,0],[6,0]],[[3,2],[5,3]]];

let matriz_2 = [[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[3,3],[5,4]],[[5,1],[3,4]],[[6,0],[6,0]],
                [[6,0],[6,0]],[[3,2],[5,3]],[[3,1],[5,2]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]]];

let matriz_3 = [[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[3,3],[5,4]],[[5,1],[3,4]],[[6,0],[6,0]],
                [[6,0],[6,0]],[[3,2],[5,3]],[[3,1],[5,2]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]]];

let matriz_4 = [[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[3,3],[5,4]],[[5,1],[3,4]],[[6,0],[6,0]],
                [[6,0],[6,0]],[[3,2],[5,3]],[[3,1],[5,2]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]]];

let matriz_5 = [[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[3,3],[5,4]],[[5,1],[3,4]],[[6,0],[6,0]],
                [[6,0],[6,0]],[[3,2],[5,3]],[[3,1],[5,2]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]]];

let matriz_6 = [[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[3,3],[5,4]],[[5,1],[3,4]],[[6,0],[6,0]],
                [[6,0],[6,0]],[[3,2],[5,3]],[[3,1],[5,2]],[[4,0],[4,0]],
                [[4,0],[4,0]],[[4,0],[4,0]],[[6,0],[6,0]],[[4,0],[4,0]]];
const btn_finish = document.querySelector(".finish_btn");
const btn_cancel = document.querySelector(".cancel_btn");
const messege = document.querySelector(".messege");
const message_exit = document.querySelector(".message_exit");
const user = document.querySelector(".text_user");
const game = document.querySelector(".game");
let element_1 = document.querySelectorAll(".element_1");
const cont_1 = document.querySelector(".container");
const cont_2 = document.querySelector(".game_area");
const containerFixed = document.querySelector(".container_fixed");
const start_button = document.querySelector(".button");
let documentFrag = document.createDocumentFragment();
let control_element = document.querySelectorAll(".control_element");
let img_p = document.querySelector(".img_p");
let arr_ctl_elm = [[0,control_element[1],control_element[3]],[control_element[2],control_element[0],control_element[4]],[0,control_element[5],0]];
let div_cont_element=[];
let act = false;
let move1 = document.querySelector(".move1");
let move2 = document.querySelector(".move2");
let move3 = document.querySelector(".move3");
let move4 = document.querySelector(".move4");
let move5 = document.querySelector(".move5");
let move6 = document.querySelector(".move6");
const gridArea = () => {
    let div_cont = document.createElement("DIV");
    div_cont.classList.add("grid_area");
    let element_img=[];
    for (let i = 0; i < 6; i++) {
        element_img[i] = document.createElement("IMG");
        element_img[i].classList.add("element_img");
        element_img[i].setAttribute("src",`img/img_${i+1}.svg`);
    }
    for (let i = 0; i < 6; i++) {
        div_cont_element[i] = document.createElement("DIV");
        div_cont_element[i].classList.add("grid_area_element");
        div_cont_element[i].setAttribute("data-mtz",`matriz_${i+1}`)
        div_cont_element[i].style.animation = `in ${1+(i*.3)}s both`;
        div_cont_element[i].appendChild(element_img[i]);
        div_cont.appendChild(div_cont_element[i]);
        div_cont_element[i].addEventListener("click", ()=> {
            div_cont_element[0].style.display = "none";
            div_cont_element[1].style.display = "none";
            div_cont_element[2].style.display = "none";
            div_cont_element[3].style.display = "none";
            div_cont_element[4].style.display = "none";
            div_cont_element[5].style.display = "none";
            game.style.display = "flex";
            act = true;
            console.log(div_cont_element[i].dataset.mtz)
            if (div_cont_element[i].dataset.mtz == "matriz_1") {
                matriz = matriz_1;   
            }
            if (div_cont_element[i].dataset.mtz == "matriz_2") {
                matriz = matriz_2;   
            }
            if (div_cont_element[i].dataset.mtz == "matriz_3") {
                matriz = matriz_3;   
            }
            if (div_cont_element[i].dataset.mtz == "matriz_4") {
                matriz = matriz_4;   
            }
            if (div_cont_element[i].dataset.mtz == "matriz_5") {
                matriz = matriz_5;   
            }
            if (div_cont_element[i].dataset.mtz == "matriz_6") {
                matriz = matriz_6;   
            }
            img_p.setAttribute("src",`img/img_${i+1}.svg`);
        });
    }
    return div_cont;
}
let active1 = true;
const start = () => {
    if (active1) {
        element_1.forEach(element => {
            element.style.animation = 'out 1s both';
        });       
        setTimeout(()=>{
            while (cont_1.firstChild) {
                cont_1.removeChild(cont_1.firstChild);
            }
            documentFrag.appendChild(gridArea());
            cont_1.appendChild(documentFrag);
        },1100); 
        active1 = false;  
    }
}
socket.on('refresh',()=>{
    location.reload();
});
let user_text, player, players = [];
socket.on('rtadd:Player', data => {
    players = data.players;
});
start_button.addEventListener("click", e => {
    user_text = user.value;
    if (user_text.length > 4) {
        btn_finish.setAttribute("data-id",`${user_text}`)
        socket.emit('add:Player', {player: user_text});
        start();
    }
    
});
delete_game.addEventListener("click", () => {
    socket.emit("delete:Game")
});
let arrF = [[6,0],[6,0],[6,0],[6,0],
            [6,0],[6,0],[6,0],[6,0],
            [6,0],[6,0],[6,0],[6,0],
            [6,0],[6,0],[6,0],[6,0]];
let cubo = [[[0],[2],[4]],[[3,1],[1],[5,1]],[[0],[6],[0]]];
let game_element=[],element_img=[];
const reset = () => {
    for (let i = 0; i < 16; i++) {
        element_img[i].src=`img/lado1.jpg`;
        if(cubo[1][1][0] == 3 || cubo[1][1][0] == 5) {
            element_img[i].style.transform = `rotate(0deg)`;
            arrF[i][0] = cubo[1][1][0];
            arrF[i][1] = cubo[1][1][1];
        } else {
            arrF[i][0] = cubo[1][1][0];
            arrF[i][1] = 0;
        }
    }
    act = false;
    socket.emit('delete:Players');
}
const elementGame = () => {
    for (let i = 0; i < 16; i++) {
        game_element[i] = document.createElement("DIV");
        game_element[i].classList.add("game_area_element1");
        element_img[i] = document.createElement("IMG");
        element_img[i].classList.add("game_img");
        element_img[i].setAttribute("src",`img/lado1.jpg`);
        // if(matriz_1[i][0][0] == 5 || matriz_1[i][0][0] == 3) {
        //     element_img.style.transform = `rotate(${((matriz_1[i][0][1]) - 1) * 90}deg)`;
        // }
        game_element[i].appendChild(element_img[i]);
        game_element[i].addEventListener("click", () => {
            element_img[i].src=`img/lado${cubo[1][1][0]}.jpg`;
            if(cubo[1][1][0] == 3 || cubo[1][1][0] == 5) {
                element_img[i].style.transform = `rotate(${(cubo[1][1][1]-1) * 90}deg)`;
                arrF[i][0] = cubo[1][1][0];
                arrF[i][1] = cubo[1][1][1];

            } else {
                arrF[i][0] = cubo[1][1][0];
                arrF[i][1] = 0;
            }
        });
        documentFrag.appendChild(game_element[i]);
        cont_2.appendChild(documentFrag);
    }
}
elementGame();
const up = (cub) => {
    let vp = 0,vps;
    arr_ctl_elm[0][1].classList.replace(`lds2`,`lds4`);
    arr_ctl_elm[1][1].classList.replace(`lds1`,`lds2`);
    arr_ctl_elm[2][1].classList.replace(`lds6`,`lds1`);
    arr_ctl_elm[0][2].classList.replace(`lds4`,`lds6`);
    vps = arr_ctl_elm[0][1];
    arr_ctl_elm[0][1] = arr_ctl_elm[1][1];
    arr_ctl_elm[1][1] = arr_ctl_elm[2][1];
    arr_ctl_elm[2][1] = arr_ctl_elm[0][2];
    arr_ctl_elm[0][2] = vps;
    vp = cub[0][1];  
    cub[0][1] = cub[1][1];
    cub[1][1] = cub[2][1];
    cub[2][1] = cub[0][2];
    cub[0][2] = vp; 
    if(cub[1][0][0] == 3 || cub[1][2][0] == 5 || cub[1][0][0] == 5 || cub[1][2][0] == 3){
        cub[1][0][1] -=1;
        if (cub[1][0][1] == 0) {
            cub[1][0][1] = 4; 
        }
        arr_ctl_elm[1][0].style.transform = `rotate(${(cub[1][0][1] - 1) * 90}deg)`;
        cub[1][2][1] +=1;
        if (cub[1][2][1] == 5) {
            cub[1][2][1] = 1; 
        }
        arr_ctl_elm[1][2].style.transform = `rotate(${(cub[1][2][1] - 1) * 90}deg)`;
    }
    return cub;
}
const down = (cub) => {
    let vp = 0,vps;
    arr_ctl_elm[0][1].classList.replace(`lds2`,`lds1`);
    arr_ctl_elm[1][1].classList.replace(`lds1`,`lds6`);
    arr_ctl_elm[2][1].classList.replace(`lds6`,`lds4`);
    arr_ctl_elm[0][2].classList.replace(`lds4`,`lds2`);
    vps = arr_ctl_elm[2][1];
    arr_ctl_elm[2][1] = arr_ctl_elm[1][1];
    arr_ctl_elm[1][1] = arr_ctl_elm[0][1];
    arr_ctl_elm[0][1] = arr_ctl_elm[0][2];
    arr_ctl_elm[0][2] = vps;
    vp = cub[2][1];
    cub[2][1] = cub[1][1];
    cub[1][1] = cub[0][1];
    cub[0][1] = cub[0][2];
    cub[0][2] = vp;
    if(cub[1][0][0] == 3 || cub[1][2][0] == 5 || cub[1][0][0] == 5 || cub[1][2][0] == 3){
        cub[1][0][1] +=1;
        if (cub[1][0][1] == 5) {
            cub[1][0][1] = 1; 
        }
        arr_ctl_elm[1][0].style.transform = `rotate(${(cub[1][0][1] - 1) * 90}deg)`;
        cub[1][2][1] -=1;
        if (cub[1][2][1] == 0) {
            cub[1][2][1] = 4; 
        }
        arr_ctl_elm[1][2].style.transform = `rotate(${(cub[1][2][1] - 1) * 90}deg)`;
    }
    return cub;
}
const left = (cub) => {
    let vp = 0,vps;
    arr_ctl_elm[1][0].classList.replace(`lds3`,`lds4`);
    arr_ctl_elm[1][1].classList.replace(`lds1`,`lds3`);
    arr_ctl_elm[1][2].classList.replace(`lds5`,`lds1`);
    arr_ctl_elm[0][2].classList.replace(`lds4`,`lds5`);
    vps = arr_ctl_elm[1][0];
    arr_ctl_elm[1][0] = arr_ctl_elm[1][1];
    arr_ctl_elm[1][1] = arr_ctl_elm[1][2];
    arr_ctl_elm[1][2] = arr_ctl_elm[0][2];
    arr_ctl_elm[0][2] = vps;
    vp = cub[1][0];
    cub[1][0] = cub[1][1];
    cub[1][1] = cub[1][2];
    cub[1][2] = cub[0][2];
    cub[0][2] = vp;
    return cub;
}
const rigth = (cub) => {
    let vp = 0,vps;
    arr_ctl_elm[1][0].classList.replace(`lds3`,`lds1`);
    arr_ctl_elm[1][1].classList.replace(`lds1`,`lds5`);
    arr_ctl_elm[1][2].classList.replace(`lds5`,`lds4`);
    arr_ctl_elm[0][2].classList.replace(`lds4`,`lds3`);
    vps = arr_ctl_elm[1][2];
    arr_ctl_elm[1][2] = arr_ctl_elm[1][1];
    arr_ctl_elm[1][1] = arr_ctl_elm[1][0];
    arr_ctl_elm[1][0] = arr_ctl_elm[0][2];
    arr_ctl_elm[0][2] = vps;
    vp = cub[1][2];
    cub[1][2] = cub[1][1];
    cub[1][1] = cub[1][0];
    cub[1][0] = cub[0][2];
    cub[0][2] = vp;
    return cub;
}
const gleft = (cub) => {
    let vp = 0,vps;
    arr_ctl_elm[0][1].classList.replace(`lds2`,`lds3`);
    arr_ctl_elm[1][0].classList.replace(`lds3`,`lds6`);
    arr_ctl_elm[2][1].classList.replace(`lds6`,`lds5`);
    arr_ctl_elm[1][2].classList.replace(`lds5`,`lds2`);
    vps = arr_ctl_elm[0][1];
    arr_ctl_elm[0][1] = arr_ctl_elm[1][2];
    arr_ctl_elm[1][2] = arr_ctl_elm[2][1];
    arr_ctl_elm[2][1] = arr_ctl_elm[1][0];
    arr_ctl_elm[1][0] = vps;
    vp = cub[0][1];
    cub[0][1] = cub[1][2];
    cub[1][2] = cub[2][1];
    cub[2][1] = cub[1][0];
    cub[1][0] = vp;
    if (cub[0][1][0] == 3 && cub[2][1][0] == 5 || cub[0][1][0] == 5 && cub[2][1][0] == 3) {
        cub[0][1][1] -=1;
        if (cub[0][1][1] == 0) {
            cub[0][1][1] = 4; 
        }
        arr_ctl_elm[0][1].style.transform = `rotate(${(cub[0][1][1] - 1) * 90}deg)`;
        cub[2][1][1] -=1;
        if (cub[2][1][1] == 0) {
            cub[2][1][1] = 4; 
        }
        arr_ctl_elm[2][1].style.transform = `rotate(${(cub[2][1][1] - 1) * 90}deg)`;
    }
    if (cub[1][0][0] == 3 && cub[1][2][0] == 5 || cub[1][0][0] == 5 && cub[1][2][0] == 3) {
        
        cub[1][0][1] -=1;
        if (cub[1][0][1] == 0) {
            cub[1][0][1] = 4; 
        }
        arr_ctl_elm[1][0].style.transform = `rotate(${(cub[1][0][1] - 1) * 90}deg)`;
        cub[1][2][1] -=1;
        if (cub[1][2][1] == 0) {
            cub[1][2][1] = 4; 
        }
        arr_ctl_elm[1][2].style.transform = `rotate(${(cub[1][2][1] - 1) * 90}deg)`;
    }
    if (cubo[1][1][0] == 3 || cubo[1][1][0] == 5){
        cub[1][1][1] -=1;
        if (cub[1][1][1] == 0) {
            cub[1][1][1] = 4; 
        }
        arr_ctl_elm[1][1].style.transform = `rotate(${(cub[1][1][1] - 1) * 90}deg)`;
        cub[0][2][1] +=1;
        if (cub[0][2][1] == 5) {
            cub[0][2][1] = 1; 
        }
        arr_ctl_elm[0][2].style.transform = `rotate(${(cub[0][2][1] - 1) * 90}deg)`;
    }
    return cub;
}
const grigth = (cub) => {
    let vp = 0,vps;
    arr_ctl_elm[0][1].classList.replace(`lds2`,`lds5`);
    arr_ctl_elm[1][0].classList.replace(`lds3`,`lds2`);
    arr_ctl_elm[2][1].classList.replace(`lds6`,`lds3`);
    arr_ctl_elm[1][2].classList.replace(`lds5`,`lds6`);
    vps = arr_ctl_elm[0][1];
    arr_ctl_elm[0][1] = arr_ctl_elm[1][0];
    arr_ctl_elm[1][0] = arr_ctl_elm[2][1];
    arr_ctl_elm[2][1] = arr_ctl_elm[1][2];
    arr_ctl_elm[1][2] = vps;
    vp = cub[0][1];
    cub[0][1] = cub[1][0];
    cub[1][0] = cub[2][1];
    cub[2][1] = cub[1][2];
    cub[1][2] = vp;
    if (cub[0][1][0] == 3 && cub[2][1][0] == 5 || cub[0][1][0] == 5 && cub[2][1][0] == 3) {
        console.log(124)
        cub[0][1][1] +=1;
        if (cub[0][1][1] == 5) {
            cub[0][1][1] = 1; 
        }
        arr_ctl_elm[0][1].style.transform = `rotate(${(cub[0][1][1] - 1) * 90}deg)`;
        cub[2][1][1] +=1;
        if (cub[2][1][1] == 5) {
            cub[2][1][1] = 1; 
        }
        arr_ctl_elm[2][1].style.transform = `rotate(${(cub[2][1][1] - 1) * 90}deg)`;
    }
    if (cub[1][0][0] == 3 && cub[1][2][0] == 5 || cub[1][0][0] == 5 && cub[1][2][0] == 3) {
        console.log(125)
        cub[1][0][1] +=1;
        if (cub[1][0][1] == 5) {
            cub[1][0][1] = 1; 
        }
        arr_ctl_elm[1][0].style.transform = `rotate(${(cub[1][0][1] - 1) * 90}deg)`;
        cub[1][2][1] +=1;
        if (cub[1][2][1] == 5) {
            cub[1][2][1] = 1; 
        }
        arr_ctl_elm[1][2].style.transform = `rotate(${(cub[1][2][1] - 1) * 90}deg)`;
    }
    if (cubo[1][1][0] == 3 || cubo[1][1][0] == 5){
        cub[1][1][1] +=1;
        if (cub[1][1][1] == 5) {
            cub[1][1][1] = 1; 
        }
        arr_ctl_elm[1][1].style.transform = `rotate(${(cub[1][1][1] - 1) * 90}deg)`;
        cub[0][2][1] -=1;
        if (cub[0][2][1] == 0) {
            cub[0][2][1] = 4; 
        }
        arr_ctl_elm[0][2].style.transform = `rotate(${(cub[0][2][1] - 1) * 90}deg)`;
    }
    return cub;
}

document.addEventListener('keydown', (event) => {
    let keyValue = event.key;
    if (act == true) {
        if (keyValue == "w") {
            cubo = up(cubo);
        }
        if (keyValue == "s") {
            cubo = down(cubo);
        }
        if (keyValue == "a") {
            cubo = left(cubo);
        }
        if (keyValue == "d") {
            cubo = rigth(cubo);
        }
        if (keyValue == "q") {
            cubo = gleft(cubo);
        }
        if (keyValue == "e") {
            cubo = grigth(cubo);
        }
    }
});
move1.addEventListener("click", () => {
    cubo = up(cubo);
});
move2.addEventListener("click", () => {
    cubo = down(cubo);
});
move3.addEventListener("click", () => {
    cubo = left(cubo);
});
move4.addEventListener("click", () => {
    cubo = rigth(cubo);
});
move5.addEventListener("click", () => {
    cubo = gleft(cubo);
});
move6.addEventListener("click", () => {
    cubo = grigth(cubo);
});
let correcto = false;
btn_finish.addEventListener("click", () => {
    for (let i = 0; i < 16; i++) {
        if(matriz[i][0][0] == arrF[i][0] && matriz[i][0][1] == arrF[i][1] || matriz[i][1][0] == arrF[i][0] && matriz[i][1][1] == arrF[i][1]) {
            correcto = true;
        }else{
            correcto = false;
            break;
        }
    }
    if (correcto == true) {
        // message_exit.style.display = 'flex';
        // setTimeout(()=>{
        // message_exit.style.display = 'none';
            div_cont_element[0].style.display = "flex";
            div_cont_element[1].style.display = "flex";
            div_cont_element[2].style.display = "flex";
            div_cont_element[3].style.display = "flex";
            div_cont_element[4].style.display = "flex";
            div_cont_element[5].style.display = "flex";
            game.style.display = "none";
            correcto = false;
        // },7000);
        reset();
        
    } else {
        console.log("incorrecto");
    }
});