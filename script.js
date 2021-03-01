//Fonctionnalité 1
/*
  let footerget = document.querySelector('footer');

  footerget.addEventListener('click',consoleClickFooter);
  function consoleClickFooter(){
    console.log('clique');
  }*/

//Fonctionnalité 1bis
let footer = document.querySelector('footer');
let count = 0

footer.addEventListener('click',consoleClickFooter);

function consoleClickFooter(){
  count ++
  console.log('clic numéro',count);
}

//Fonctionnalité 2
let burgerMenu = document.querySelector('.navbar-toggler');
let navBar = document.querySelector('#navbarHeader');
burgerMenu.addEventListener('click',CollapseOnOff);

function CollapseOnOff(){
  navBar.classList.toggle("collapse");
}

//Fonctionnalité 3
let btnGroup1 = document.querySelectorAll('.btn-group')[0];
let editCard1 = btnGroup1.querySelectorAll('.btn')[1];
let textCard1 = document.querySelectorAll('.card-text')[0];

editCard1.addEventListener('click',changetext1);
function changetext1(){
  textCard1.style.color = 'red';
}

//Fonctionnalité 4
let btnGroup2 = document.querySelectorAll('.btn-group')[1];
let editCard2 = btnGroup2.querySelectorAll('.btn')[1];
let textCard2 = document.querySelectorAll('.card-text')[1];

editCard2.addEventListener('click',changetext2);

function changetext2(){
  if(textCard2.style.color === 'green'){
    textCard2.style.color = '';
  }else{ (textCard2.style.color === '')
  textCard2.style.color = 'green';}
}

//Fonctionnalité 5
let navBarBlock = document.querySelector('.navbar');
let link = document.getElementsByTagName('link')[0];

navBarBlock.addEventListener('dblclick', bootstrapOff);

function bootstrapOff(){
  if (link.disabled === false){
    (link.disabled = true)
  }else{
    (link.disabled = false)
  }
}
//Fonctionnalité 6
let cards = document.querySelectorAll('.card');
let cardtexts = document.querySelectorAll('.card-text');
let imgs = document.querySelectorAll('.card-img-top');

for (let i = 0; i < cards.length ; i++){
  cards[i].addEventListener('mouseover',
  function rollback(){
    cardtexts[i].style.display = 'none';
    imgs[i].style.width = '20%';
  });
  cards[i].addEventListener('mouseout',
  function reset(){
    cardtexts[i].style.display = '';
    imgs[i].style.width = '';
  });
}

//Fonctionnalité 7
function switchRight() {
  let btnRight = document.querySelector('.btn-secondary');
  
  btnRight.addEventListener('click',function() {
    let cards = document.querySelectorAll(".card");
    let lastCard = cards[cards.length -1].parentNode;
    let row = lastCard.parentNode;
    row.insertBefore(lastCard, cards[0].parentNode);
  });
}
switchRight();

//Fonctionnalité 8
function switchLeft() {
  let btnLeft = document.querySelector('.btn-primary');
  btnLeft.href = "#";

  btnLeft.addEventListener('click',function() {
    for (let i = 0; i < cards.length -1 ; i++){
      let cards = document.querySelectorAll(".card");
      let lastCard = cards[cards.length -1].parentNode;
      let row = lastCard.parentNode;
      row.insertBefore(lastCard, cards[0].parentNode);
    };
  });
}
switchLeft();