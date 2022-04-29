let SliderGeneral = document.querySelector('.slider-general');
SliderGeneral.style.cssText = `
display: inline-block;
position: relative;
width: 100%;
margin: 0;`;
let SliderTitleOne = document.createElement('slider-title_one')
SliderTitleOne.textContent = 'Диапозон цены';
SliderTitleOne.style.cssText = `
  display:inline-block;
  vertical-align:top;
  position:static;
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
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 3px;`;

let SliderCircleOneG = document.createElement('slider-circle_one')
SliderCircleOneG.id = 'CircleOne';
SliderCircleOneG.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  background: linear-gradient(90deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  display:none;`;
let SliderCircleOneV = document.createElement('slider-circle_one')
SliderCircleOneV.id = 'CircleOne';
SliderCircleOneV.style.cssText = `
    z-index: 999999;
    cursor: pointer;
    position: absolute;
    background: linear-gradient(90deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%);
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    display:none;`;

let SliderCircleTwoG = document.createElement('slider-circle_two')
SliderCircleTwoG.id = 'CircleTwo';
SliderCircleTwoG.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  background: linear-gradient(90deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  display:none;`;
let SliderCircleTwoV = document.createElement('slider-circle_two')
SliderCircleTwoV.id = 'CircleTwo';
SliderCircleTwoV.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  background: linear-gradient(90deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  display:none;`;
let SliderLineMin = document.createElement('slider-line_min')
SliderLineMin.style.cssText = `
  position: relative;
  display:block;
  background: linear-gradient(90deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%);`;
let SliderTitleTwo = document.createElement('slider-title_two')
SliderTitleTwo.textContent = 'Стоимость за сутки пребывания в номере';
SliderTitleTwo.style.cssText = `
  display:block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  margin-top:20px;
  font-size: 12px;
  line-height: 14px;
  color: rgba(31, 32, 65, 0.5);`;


SliderGeneral.appendChild(SliderTitleOne)
SliderGeneral.appendChild(SliderMoney)
SliderMoney.appendChild(SliderMoneyOne)
SliderMoney.appendChild(SliderMoneyThree)
SliderMoney.appendChild(SliderMoneyTwo)
SliderGeneral.appendChild(SliderLine)
SliderGeneral.appendChild(SliderLine)
SliderLine.appendChild(SliderCircleOneG)
SliderLine.appendChild(SliderCircleOneV)
SliderLine.appendChild(SliderCircleTwoG)
SliderLine.appendChild(SliderCircleTwoV)
SliderLine.appendChild(SliderLineMin)
SliderGeneral.appendChild(SliderTitleTwo)