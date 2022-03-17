let  SliderGeneral = document.querySelector('.slider-general');



let SliderTitleOne = document.createElement('slider-title_one')
SliderTitleOne.textContent='Диапозон цены';
SliderTitleOne.style.cssText=`
float: left;
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 15px;
text-transform: uppercase;
color: #1F2041;`;
  
let SliderMoney = document.createElement('slider-money')
SliderMoney.textContent='₽3124 - ₽9169';
SliderMoney.style.cssText=`
float: right;
font-family: Montserrat;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
color: rgba(31, 32, 65, 0.5);`;

let SliderLineBig = document.createElement('slider-line_big')
SliderLineBig.id = 'slider';
SliderLineBig.style.cssText=`

display:inline-block;

background: #FFFFFF;
width: 266px;
height: 4px;
border: 1px solid rgba(31, 32, 65, 0.25);

border-radius: 3px;`;
let SliderLineMig = document.createElement('slider-line_min')

SliderLineMig.style.cssText=`
position: relative;

display:block;
background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
width: 100px;
height: 4px;

border-radius: 3px;`;

let SliderCircleOne = document.createElement('slider-circle_one')
SliderCircleOne.id = 'CircleOne';
SliderCircleOne.style.cssText=`
cursor: pointer;

position: absolute;
margin-top:-10px;
width: 12px;
height: 12px;
background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
border: 2px solid #FFFFFF;
border-radius: 10px;`;

let SliderCircleTwo = document.createElement('slider-circle_two')
SliderCircleTwo.id = 'CircleTwo';
SliderCircleTwo.style.cssText=`
cursor: pointer;
position: absolute;
margin-top:-10px;
width: 12px;
    height: 12px;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    border: 2px solid #FFFFFF;
    border-radius: 10px;`;
let SliderTitleTwo = document.createElement('slider-title_two')
SliderTitleTwo.textContent='Стоимость за сутки пребывания в номере';
SliderTitleTwo.style.cssText=`
display:inline-block;
font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    color: rgba(31, 32, 65, 0.5);`;


SliderGeneral.appendChild(SliderTitleOne)
SliderGeneral.appendChild(SliderMoney)
SliderGeneral.appendChild(SliderLineBig)
SliderLineBig.appendChild(SliderLineMig)
SliderLineBig.appendChild(SliderCircleOne)
SliderLineBig.appendChild(SliderCircleTwo)
SliderGeneral.appendChild(SliderTitleTwo)






SliderCircleOne.onmousedown = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - SliderCircleOne.getBoundingClientRect().left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - SliderCircleOne.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    SliderCircleOne.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

SliderCircleOne.ondragstart = function() {
  return false;
};



SliderCircleTwo.onmousedown = function(event) {
  event.preventDefault(); // предотвратить запуск выделения (действие браузера)

  let shiftX = event.clientX - SliderCircleTwo.getBoundingClientRect().left;
  // shiftY здесь не нужен, слайдер двигается только по горизонтали

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(event) {
    let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

    // курсор вышел из слайдера => оставить бегунок в его границах.
    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - SliderCircleTwo.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    SliderCircleTwo.style.left = newLeft + 'px';
  }

  function onMouseUp() {
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }

};

SliderCircleTwo.ondragstart = function() {
  return false;
};


