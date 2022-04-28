let SliderGeneral = document.querySelector('.slider-general');
let MaximumValue;
let SliderLineWidth;
let SliderLineHeight;
let SliderLineMinWidth;
let SliderLineMinHeight;
let SliderStepSize;
let SliderCircleOneMarginTop;
let SliderCircleOneMarginLeft;
let SliderCircleTwoMarginTop;
let SliderCircleTwoMarginLeft;
let SliderCircleOneWidthHeight;
let SliderCircleTwoWidthHeight;
let SliderCircleBorder = 2;
let startingPointViewCircleOne;
let startingPointViewCircleTwo;

let coefficient;
let startingPointCircleOne;
let startingPointCircleTwo;
let newLeftCircleOne;
let newLeftCircleTwo;

let SliderLineMargin;

function fn(a, num) {

    return a % num ? a + num - a % num : a

};






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
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 3px;`;

let SliderCircleOneG = document.createElement('slider-circle_one')
SliderCircleOneG.id = 'CircleOne';
SliderCircleOneG.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  display:none;`;
let SliderCircleOneV = document.createElement('slider-circle_one')
SliderCircleOneV.id = 'CircleOne';
SliderCircleOneV.style.cssText = `
    z-index: 999999;
    cursor: pointer;
    position: absolute;
    background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    display:none;`;

let SliderCircleTwoG = document.createElement('slider-circle_two')
SliderCircleTwoG.id = 'CircleTwo';
SliderCircleTwoG.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  display:none;`;
let SliderCircleTwoV = document.createElement('slider-circle_two')
SliderCircleTwoV.id = 'CircleTwo';
SliderCircleTwoV.style.cssText = `
  z-index: 999999;
  cursor: pointer;
  position: absolute;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);
  border: 2px solid #FFFFFF;
  border-radius: 10px;
  display:none;`;
let SliderLineMin = document.createElement('slider-line_min')
SliderLineMin.style.cssText = `
  position: relative;
  display:block;
  background: linear-gradient(180deg, #6FCF97 0%, #66D2EA 100%);`;
let SliderTitleTwo = document.createElement('slider-title_two')
SliderTitleTwo.textContent = 'Стоимость за сутки пребывания в номере';
SliderTitleTwo.style.cssText = `
  display:inline-block;
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

let VorG;
let OorT;

function fun1() {

    var chbox;
    chbox = document.getElementById('VorG');
    if (chbox.checked) {
        VorG = false;
        SliderCircleOneV.onmousedown = function(event) {
            event.preventDefault(); // предотвратить запуск выделения (действие браузера)

            let shiftYOne = event.clientY - SliderCircleOneV.getBoundingClientRect().top;
            // shiftY здесь не нужен, слайдер двигается только по горизонтали

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(event) {

                newLeftCircleOne = event.clientY - shiftYOne - slider.getBoundingClientRect().top;

                // курсор вышел из слайдера => оставить бегунок в его границах.
                if (newLeftCircleOne < 0) {
                    newLeftCircleOne = 0;
                }


                let rightEdge = slider.offsetHeight - SliderCircleOneV.offsetHeight;
                if (newLeftCircleOne > rightEdge) {
                    newLeftCircleOne = rightEdge;
                }

                SliderCircleOneV.style.top = newLeftCircleOne + 'px';

                if (newLeftCircleOne <= newLeftCircleTwo && OorT == true) {
                    SliderLineMin.style.top = newLeftCircleOne + 'px';
                    SliderLineMin.style.height = newLeftCircleTwo - newLeftCircleOne + 'px';
                    SliderMoneyOne.textContent = `₽${ fn(Math.trunc(newLeftCircleOne * coefficient), SliderStepSize)}`;
                }
                if (newLeftCircleOne >= newLeftCircleTwo && OorT == true) {
                    SliderLineMin.style.top = newLeftCircleTwo + 'px';
                    SliderLineMin.style.height = newLeftCircleOne - newLeftCircleTwo + 'px';
                    SliderMoneyTwo.textContent = `₽${ fn(Math.trunc(newLeftCircleOne * coefficient), SliderStepSize) }`;
                }
                if (OorT == false) {
                    SliderMoneyOne.textContent = `₽${ fn(Math.trunc(newLeftCircleOne * coefficient), SliderStepSize)}`;
                }


                //деньги

            }

            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
        };
        SliderCircleOneV.ondragstart = function() {
            return false;
        };
        SliderCircleTwoV.onmousedown = function(event) {
            event.preventDefault(); // предотвратить запуск выделения (действие браузера)

            let shiftYTwo = event.clientY - SliderCircleTwoV.getBoundingClientRect().top;
            // shiftY здесь не нужен, слайдер двигается только по горизонтали

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(event) {

                newLeftCircleTwo = event.clientY - shiftYTwo - slider.getBoundingClientRect().top;

                // курсор вышел из слайдера => оставить бегунок в его границах.
                if (newLeftCircleTwo < 0) {
                    newLeftCircleTwo = 0;
                }
                let rightEdge = slider.offsetHeight - SliderCircleTwoV.offsetHeight;
                if (newLeftCircleTwo > rightEdge) {
                    newLeftCircleTwo = rightEdge;
                }
                if (newLeftCircleTwo >= newLeftCircleOne) {
                    SliderLineMin.style.top = newLeftCircleOne + 'px';
                    SliderLineMin.style.height = newLeftCircleTwo - newLeftCircleOne + 'px';
                    SliderMoneyTwo.textContent = ` ₽${  fn(Math.trunc(newLeftCircleTwo * coefficient), SliderStepSize)}`;
                }
                if (newLeftCircleTwo <= newLeftCircleOne) {
                    SliderLineMin.style.top = newLeftCircleTwo + 'px';
                    SliderLineMin.style.height = newLeftCircleOne - newLeftCircleTwo + 'px';
                    SliderMoneyOne.textContent = ` ₽${  fn(Math.trunc(newLeftCircleTwo * coefficient), SliderStepSize) }`;
                }


                SliderCircleTwoV.style.top = newLeftCircleTwo + 'px';

                //деньги
            }

            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
        };
        SliderCircleTwoV.ondragstart = function() {
            return false;
        };

    } else {
        VorG = true;
        SliderCircleOneG.onmousedown = function(event) {

            event.preventDefault(); // предотвратить запуск выделения (действие браузера)

            let shiftXOne = event.clientX - SliderCircleOneG.getBoundingClientRect().left;
            // shiftY здесь не нужен, слайдер двигается только по горизонтали

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(event) {

                newLeftCircleOne = event.clientX - shiftXOne - slider.getBoundingClientRect().left;

                // курсор вышел из слайдера => оставить бегунок в его границах.
                if (newLeftCircleOne < 0) {
                    newLeftCircleOne = 0;
                }


                let rightEdge = slider.offsetWidth - SliderCircleOneG.offsetWidth;
                if (newLeftCircleOne > rightEdge) {
                    newLeftCircleOne = rightEdge;
                }

                SliderCircleOneG.style.left = newLeftCircleOne + 'px';

                if (newLeftCircleOne < newLeftCircleTwo && OorT == true) {
                    SliderLineMin.style.left = newLeftCircleOne + 'px';
                    SliderLineMin.style.width = newLeftCircleTwo - newLeftCircleOne + 'px';
                    SliderMoneyOne.textContent = `₽${ fn(Math.trunc(newLeftCircleOne * coefficient), SliderStepSize) }`;
                }
                if (newLeftCircleOne > newLeftCircleTwo && OorT == true) {
                    SliderLineMin.style.left = newLeftCircleTwo + 'px';
                    SliderLineMin.style.width = newLeftCircleOne - newLeftCircleTwo + 'px';
                    SliderMoneyTwo.textContent = `₽${ fn(Math.trunc(newLeftCircleOne * coefficient), SliderStepSize)}`;
                }
                if (OorT == false) {
                    SliderMoneyOne.textContent = `₽${ fn(Math.trunc(newLeftCircleOne * coefficient), SliderStepSize) }`;
                }


                //деньги

            }

            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
        };
        SliderCircleOneG.ondragstart = function() {
            return false;
        };
        SliderCircleTwoG.onmousedown = function(event) {
            event.preventDefault(); // предотвратить запуск выделения (действие браузера)

            let shiftX = event.clientX - SliderCircleTwoG.getBoundingClientRect().left;
            // shiftY здесь не нужен, слайдер двигается только по горизонтали

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            function onMouseMove(event) {

                newLeftCircleTwo = event.clientX - shiftX - slider.getBoundingClientRect().left;

                // курсор вышел из слайдера => оставить бегунок в его границах.
                if (newLeftCircleTwo < 0) {
                    newLeftCircleTwo = 0;
                }
                let rightEdge = slider.offsetWidth - SliderCircleTwoG.offsetWidth;
                if (newLeftCircleTwo > rightEdge) {
                    newLeftCircleTwo = rightEdge;
                }
                if (newLeftCircleTwo > newLeftCircleOne) {
                    SliderLineMin.style.left = newLeftCircleOne + 'px';
                    SliderLineMin.style.width = newLeftCircleTwo - newLeftCircleOne + 'px';
                    SliderMoneyTwo.textContent = ` ₽${ fn(Math.trunc(newLeftCircleTwo * coefficient), SliderStepSize) }`;
                }
                if (newLeftCircleTwo < newLeftCircleOne) {
                    SliderLineMin.style.left = newLeftCircleTwo + 'px';
                    SliderLineMin.style.width = newLeftCircleOne - newLeftCircleTwo + 'px';
                    SliderMoneyOne.textContent = ` ₽${ fn(Math.trunc(newLeftCircleTwo * coefficient), SliderStepSize)}`;
                }



                SliderCircleTwoG.style.left = newLeftCircleTwo + 'px';

                //деньги
            }

            function onMouseUp() {
                document.removeEventListener('mouseup', onMouseUp);
                document.removeEventListener('mousemove', onMouseMove);
            }
        };
        SliderCircleTwoG.ondragstart = function() {
            return false;
        };

    }
}

function fun2() {
    var chboxtwo;
    chboxtwo = document.getElementById('OorT');
    if (chboxtwo.checked) {
        OorT = false;
    } else {
        OorT = true;
    }
}

sliderbutton.onclick = function(event) {
    fun1()
    fun2()
    let a;
    let b;
    MaximumValue = document.getElementById('max').value;
    startingPointViewCircleOne = document.getElementById('minPosCircle').value;
    startingPointViewCircleTwo = document.getElementById('maxPosCircle').value;
    if (startingPointViewCircleOne >= startingPointViewCircleTwo) {
        a = startingPointViewCircleOne;
        b = startingPointViewCircleTwo;
        startingPointViewCircleOne = b;
        startingPointViewCircleTwo = a;
    }
    SliderStepSize = Number(document.getElementById('stepSize').value);
    SliderLineWidth = document.getElementById('LineWidth').value;
    SliderLineHeight = document.getElementById('LineHeight').value;


    if (MaximumValue == null || MaximumValue == '') {
        MaximumValue = 20000;
    }
    if (startingPointViewCircleOne == null || startingPointViewCircleOne == '') {
        startingPointViewCircleOne = 5000;
    }
    if (startingPointViewCircleTwo == null || startingPointViewCircleTwo == '') {
        startingPointViewCircleTwo = 10000;
    }
    if (SliderStepSize == null || SliderStepSize == '') {
        SliderStepSize = 50;
    }
    if (SliderLineWidth == null || SliderLineWidth == '') {
        SliderLineWidth = 300;
    }
    if (SliderLineHeight == null || SliderLineHeight == '') {
        SliderLineHeight = 5;
    }



    SliderLineMinWidth = SliderLineWidth;
    SliderLineMinHeight = SliderLineHeight;
    SliderCircleOneWidthHeight = SliderLineHeight * 2;
    SliderCircleTwoWidthHeight = SliderLineHeight * 2;

    SliderCircleOneG.style.width = SliderCircleOneWidthHeight + 'px';
    SliderCircleOneG.style.height = SliderCircleOneWidthHeight + 'px';
    SliderCircleOneV.style.width = SliderCircleOneWidthHeight + 'px';
    SliderCircleOneV.style.height = SliderCircleOneWidthHeight + 'px';
    SliderCircleTwoG.style.width = SliderCircleTwoWidthHeight + 'px';
    SliderCircleTwoG.style.height = SliderCircleTwoWidthHeight + 'px';
    SliderCircleTwoV.style.width = SliderCircleTwoWidthHeight + 'px';
    SliderCircleTwoV.style.height = SliderCircleTwoWidthHeight + 'px';

    coefficient = (MaximumValue / (SliderLineWidth - SliderCircleOneWidthHeight - SliderCircleBorder)).toFixed(2);

    startingPointCircleOne = Math.trunc(startingPointViewCircleOne / coefficient);
    startingPointCircleTwo = Math.trunc(startingPointViewCircleTwo / coefficient);

    newLeftCircleOne = startingPointCircleOne;
    newLeftCircleTwo = startingPointCircleTwo;




    if (VorG == true) {
        SliderLineMargin = 30;
        SliderLine.style.width = SliderLineWidth + 'px';
        SliderLine.style.height = SliderLineHeight + 'px';
        SliderLine.style.marginTop = SliderLineMargin + 'px';

        //
        SliderLine.style.marginLeft = 0 + 'px';
    } else {
        SliderLineMargin = 20;
        SliderLine.style.width = SliderLineHeight + 'px';
        SliderLine.style.height = SliderLineWidth + 'px';
        SliderLine.style.marginLeft = SliderLineMargin + 'px';
        //
        SliderLine.style.marginTop = 0 + 'px';
    }
    if (VorG == true) {
        SliderCircleOneG.style.left = startingPointCircleOne + 'px';
        SliderCircleTwoG.style.left = startingPointCircleTwo + 'px';
        SliderCircleOneMarginTop = -(SliderLineHeight / 2 + (SliderCircleBorder));
        SliderCircleOneG.style.marginTop = SliderCircleOneMarginTop + 'px';
        //
        SliderCircleOneG.style.display = 'block';
        SliderCircleOneV.style.display = 'none';
        SliderCircleTwoG.style.display = 'block';
        SliderCircleTwoV.style.display = 'none';
    } else {
        SliderCircleOneV.style.top = startingPointCircleOne + 'px';
        SliderCircleTwoV.style.top = startingPointCircleTwo + 'px';
        SliderCircleOneMarginTop = 0;
        SliderCircleOneMarginLeft = -(SliderLineHeight / 2 + (SliderCircleBorder));
        SliderCircleOneV.style.marginTop = SliderCircleOneMarginTop + 'px';
        SliderCircleOneV.style.marginLeft = SliderCircleOneMarginLeft + 'px';
        //
        SliderCircleOneG.style.display = 'none';
        SliderCircleOneV.style.display = 'block';
        SliderCircleTwoG.style.display = 'none';
        SliderCircleTwoV.style.display = 'block';

    }

    if (VorG == true) {
        SliderCircleTwoMarginTop = -(SliderLineHeight / 2 + (SliderCircleBorder));
        SliderCircleTwoG.style.marginTop = SliderCircleTwoMarginTop + 'px';
    } else {
        SliderCircleTwoMarginTop = 0;
        SliderCircleTwoMarginLeft = -(SliderLineHeight / 2 + (SliderCircleBorder));
        SliderCircleTwoV.style.marginTop = SliderCircleTwoMarginTop + 'px';
        SliderCircleTwoV.style.marginLeft = SliderCircleTwoMarginLeft + 'px';
    }
    if (VorG == true) {

        SliderLineMin.style.height = SliderLineMinHeight + 'px';
        SliderLineMin.style.left = startingPointCircleOne + 'px';
        SliderLineMin.style.width = startingPointCircleTwo - startingPointCircleOne + 'px';

        //
        SliderLineMin.style.top = 0 + 'px';
    } else {
        SliderLineMin.style.width = SliderLineMinHeight + 'px';
        SliderLineMin.style.top = startingPointCircleOne + 'px';
        SliderLineMin.style.height = startingPointCircleTwo - startingPointCircleOne + 'px';
        //
        SliderLineMin.style.left = 0 + 'px';

    }

    SliderMoneyOne.textContent = ` ₽${fn(Math.trunc(startingPointCircleOne * coefficient), SliderStepSize)}`;
    SliderMoneyThree.textContent = ` - `;
    SliderMoneyTwo.textContent = ` ₽${  fn(Math.trunc(startingPointCircleTwo * coefficient), SliderStepSize)}`;
    if (OorT == true && VorG == true) {
        SliderLineMin.style.display = 'block';
        SliderMoneyTwo.style.display = 'inline-block';
        SliderMoneyThree.style.display = 'inline-block';
        SliderCircleTwoG.style.display = 'block';

    } else if (OorT == true && VorG == false) {
        SliderLineMin.style.display = 'block';
        SliderMoneyTwo.style.display = 'inline-block';
        SliderMoneyThree.style.display = 'inline-block';
        SliderCircleTwoV.style.display = 'block';
    } else {

        SliderLineMin.style.display = 'none';
        SliderCircleTwoG.style.display = 'none';
        SliderCircleTwoV.style.display = 'none';
        SliderMoneyTwo.style.display = 'none';
        SliderMoneyThree.style.display = 'none';
    }

};
sliderbutton.click();