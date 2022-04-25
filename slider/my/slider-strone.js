let SliderGeneral = document.querySelector('.slider-general');



let SliderTitleOne = document.createElement('slider-title_one')
SliderTitleOne.textContent = 'Диапозон цены';
SliderTitleOne.style.cssText = `
  float: left;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #1F2041;`;

let SliderMoney = document.createElement('slider-money')
SliderMoney.style.cssText = `
  float:right;
  vertical-align:top;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: rgba(31, 32, 65, 0.5);`;

let SliderMoneyOne = document.createElement('slider-money-one')
SliderMoneyOne.textContent = `₽0`;
let SliderMoneyThree = document.createElement('slider-money-three')
SliderMoneyOne.textContent = ` - `;
let SliderMoneyTwo = document.createElement('slider-money-two')
SliderMoneyTwo.textContent = `₽0`;


let SliderLine = document.createElement('slider')
SliderLine.id = 'slider';
SliderLine.style.cssText = `
  display:inline-block;
  background: #FFFFFF;
  height: 4px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 3px;`;

let SliderLineWidth = 266;
SliderLine.style.width = SliderLineWidth + 'px';


let SliderCircleOne = document.createElement('slider-circle_one')
SliderCircleOne.id = 'CircleOne';
SliderCircleOne.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  margin-top:-6px;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;`;

let SliderCircleOneWidthHeight = 12;

SliderCircleOne.style.width = SliderCircleOneWidthHeight + 'px';

SliderCircleOne.style.height = SliderCircleOneWidthHeight + 'px';

let SliderCircleTwo = document.createElement('slider-circle_two')
SliderCircleTwo.id = 'CircleTwo';
SliderCircleTwo.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  margin-top:-6px;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;`;

let SliderCircleTwoWidthHeight = 12;

SliderCircleTwo.style.width = SliderCircleTwoWidthHeight + 'px';

SliderCircleTwo.style.height = SliderCircleTwoWidthHeight + 'px';

let SliderCircleBorder = 2;

let SliderLineMin = document.createElement('slider-line_min')
SliderLineMin.style.cssText = `
  position: relative;
  display:block;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  width: 100px;
  height: 4px;`;

let SliderTitleTwo = document.createElement('slider-title_two')
SliderTitleTwo.textContent = 'Стоимость за сутки пребывания в номере';
SliderTitleTwo.style.cssText = `
  display:inline-block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: rgba(31, 32, 65, 0.5);`;



SliderGeneral.appendChild(SliderTitleOne)
SliderGeneral.appendChild(SliderMoney)
SliderMoney.appendChild(SliderMoneyOne)
SliderMoney.appendChild(SliderMoneyThree)
SliderMoney.appendChild(SliderMoneyTwo)


SliderGeneral.appendChild(SliderLine)
SliderLine.appendChild(SliderCircleOne)
SliderLine.appendChild(SliderCircleTwo)
SliderLine.appendChild(SliderLineMin)
SliderGeneral.appendChild(SliderTitleTwo)


let MaximumValue = 20000;
let coefficient = (MaximumValue / (SliderLineWidth - SliderCircleOneWidthHeight - SliderCircleBorder)).toFixed(2);


let startingPointCircleOne = 0;
let startingPointCircleTwo = 60;

let newLeftCircleOne = 0;
let newLeftCircleTwo = startingPointCircleTwo;




SliderCircleOne.style.left = startingPointCircleOne + 'px';
SliderCircleTwo.style.left = startingPointCircleTwo + 'px';

SliderLineMin.style.left = startingPointCircleOne + 'px';
SliderLineMin.style.width = startingPointCircleTwo - startingPointCircleOne + 'px';

SliderMoneyOne.textContent = `₽${ startingPointCircleOne }`;
SliderMoneyThree.textContent = ` - `;
SliderMoneyTwo.textContent = ` ₽${ Math.trunc(startingPointCircleTwo*coefficient) }`;






SliderCircleOne.onmousedown = function(event) {
    event.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftXOne = event.clientX - SliderCircleOne.getBoundingClientRect().left;
    // shiftY здесь не нужен, слайдер двигается только по горизонтали

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {

        newLeftCircleOne = event.clientX - shiftXOne - slider.getBoundingClientRect().left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeftCircleOne < 0) {
            newLeftCircleOne = 0;
        }


        let rightEdge = slider.offsetWidth - SliderCircleOne.offsetWidth;
        if (newLeftCircleOne > rightEdge) {
            newLeftCircleOne = rightEdge;
        }

        SliderCircleOne.style.left = newLeftCircleOne + 'px';

        if (newLeftCircleOne < newLeftCircleTwo) {
            SliderLineMin.style.left = newLeftCircleOne + 'px';
            SliderLineMin.style.width = newLeftCircleTwo - newLeftCircleOne + 'px';
            SliderMoneyOne.textContent = `₽${ Math.trunc(newLeftCircleOne*coefficient) }`;
        }
        if (newLeftCircleOne > newLeftCircleTwo) {
            SliderLineMin.style.left = newLeftCircleTwo + 'px';
            SliderLineMin.style.width = newLeftCircleOne - newLeftCircleTwo + 'px';
            SliderMoneyTwo.textContent = `₽${ Math.trunc(newLeftCircleOne*coefficient) }`;
        }


        //деньги

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

        newLeftCircleTwo = event.clientX - shiftX - slider.getBoundingClientRect().left;

        // курсор вышел из слайдера => оставить бегунок в его границах.
        if (newLeftCircleTwo < 0) {
            newLeftCircleTwo = 0;
        }
        let rightEdge = slider.offsetWidth - SliderCircleTwo.offsetWidth;
        if (newLeftCircleTwo > rightEdge) {
            newLeftCircleTwo = rightEdge;
        }
        if (newLeftCircleTwo > newLeftCircleOne) {
            SliderLineMin.style.left = newLeftCircleOne + 'px';
            SliderLineMin.style.width = newLeftCircleTwo - newLeftCircleOne + 'px';
            SliderMoneyTwo.textContent = ` ₽${ Math.trunc(newLeftCircleTwo*coefficient) }`;
        }
        if (newLeftCircleTwo < newLeftCircleOne) {
            SliderLineMin.style.left = newLeftCircleTwo + 'px';
            SliderLineMin.style.width = newLeftCircleOne - newLeftCircleTwo + 'px';
            SliderMoneyOne.textContent = ` ₽${ Math.trunc(newLeftCircleTwo*coefficient) }`;
        }


        SliderCircleTwo.style.left = newLeftCircleTwo + 'px';

        //деньги
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
};

SliderCircleTwo.ondragstart = function() {
    return false;
};