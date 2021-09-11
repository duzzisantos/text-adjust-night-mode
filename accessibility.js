const button = document.getElementById('button');
const body = document.querySelector('body');
const moonIcon = document.getElementById('moon');
const sunIcon = document.createElement('i');
const title = document.querySelector('h1');
const article = document.querySelectorAll('article');
const para = document.querySelectorAll('p');
const textBtn = document.getElementById('textBtn');
const textBtn1 = document.getElementById('textBtn1');
const textBtn2 = document.getElementById('textBtn2');


sunIcon.id = 'sun';
sunIcon.innerHTML = '<i class="fas fa-sun"></i>';
sunIcon.style.color = 'gold';


function nightMode() {
    button.addEventListener('click', () => {
        setTimeout(() => {
            body.style.backgroundColor = 'black';
            button.style.backgroundColor = 'black';
            button.removeChild(moonIcon);
            button.appendChild(sunIcon);
            title.innerText = 'Night Mode';
            title.style.color = 'whitesmoke';
            para[0].style.color = 'grey';
            para[1].style.color = 'grey';
            para[2].style.color = 'grey';
            para[3].style.color = 'grey';
        }, 100);
    });
}


function dayMode() {
    button.addEventListener('dblclick', () => {
        setTimeout(() => {
            body.style.backgroundColor = 'aliceblue';
            button.style.backgroundColor = 'aliceblue';
            button.removeChild(sunIcon);
            button.appendChild(moonIcon);
            title.innerText = 'Day Mode';
            para[0].style.color = 'black';
            para[1].style.color = 'black';
            para[2].style.color = 'black';
            para[3].style.color = 'black';
        }, 100)
    })
}


function textDecrease() {
    textBtn.addEventListener('click', () => {
        para[0].style.fontSize = '15px';
        para[1].style.fontSize = '15px';
        para[2].style.fontSize = '15px';
        para[3].style.fontSize = '15px';
        article[0].style.marginLeft = '170px';
        article[1].style.marginLeft = '170px';
    });
}

function textNormal(){
    textBtn1.addEventListener('click', () =>{
        para[0].style.fontSize = '17px';
        para[1].style.fontSize = '17px';
        para[2].style.fontSize = '17px';
        para[3].style.fontSize = '17px';
        article[0].style.marginLeft = '165px';
        article[1].style.marginLeft = '165px';
    });
}

function textIncrease(){
    textBtn2.addEventListener('click', () =>{
        para[0].style.fontSize = '19px';
        para[1].style.fontSize = '19px';
        para[2].style.fontSize = '19px';
        para[3].style.fontSize = '19px';
        article[0].style.marginLeft = '160px';
        article[1].style.marginLeft = '160px';
    })
}