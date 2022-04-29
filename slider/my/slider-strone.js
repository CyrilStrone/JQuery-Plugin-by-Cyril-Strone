let UserMaximumValue = 15000;
let UserSliderLineWidth = 300;
let UserSliderLineHeight = 5;
let UserSliderStepSize = 50;
let UserstartingPointViewCircleOne = 5000;
let UserstartingPointViewCircleTwo = 10000;

let MaximumValue;
let SliderLineWidth;
let SliderLineHeight;
let SliderStepSize;
let startingPointViewCircleOne;
let startingPointViewCircleTwo;

let SliderGeneralWidth;
let SliderLineMinWidth;
let SliderLineMinHeight;
let SliderCircleOneMarginTop;
let SliderCircleOneMarginLeft;
let SliderCircleTwoMarginTop;
let SliderCircleTwoMarginLeft;
let SliderCircleOneWidthHeight;
let SliderCircleTwoWidthHeight;
let SliderCircleBorder = 2;

let coefficient;
let startingPointCircleOne;
let startingPointCircleTwo;
let newLeftCircleOne;
let newLeftCircleTwo;

let SliderLineMargin;

let VorG;
let OorT;


function fn(a, num) {

    return a % num ? a + num - a % num : a

};

function ifNan(a, num) {
    if (a == null || a == '' || isNaN(a)) {

        return num;
    } else {
        return a;
    }
}

function bigValue(a, b) {
    if (a > b) {

        return b - b * (2 / 3);
    } else {
        return a;
    }
}

function minValue(a, b) {
    if (a > b) {

        return b - b * (1 / 3);
    } else {
        return a;
    }

}

function OneOrTwo() {
    var chboxtwo;
    chboxtwo = document.getElementById('OorT');
    if (chboxtwo.checked) {
        OorT = false;
    } else {
        OorT = true;
    }
}

function VerOrGor() {

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


sliderbutton.onclick = function(event) {
    VerOrGor()
    OneOrTwo()

    MaximumValue = ifNan(Number(document.getElementById('max').value), UserMaximumValue);
    startingPointViewCircleOne = bigValue(ifNan(Number(document.getElementById('minPosCircle').value), UserstartingPointViewCircleOne), MaximumValue);
    startingPointViewCircleTwo = minValue(ifNan(Number(document.getElementById('maxPosCircle').value), UserstartingPointViewCircleTwo, ), MaximumValue);
    SliderStepSize = ifNan(Number(document.getElementById('stepSize').value), UserSliderStepSize);
    SliderLineWidth = ifNan(Number(document.getElementById('LineWidth').value), UserSliderLineWidth);
    SliderLineHeight = ifNan(Number(document.getElementById('LineHeight').value), UserSliderLineHeight);

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

    SliderGeneral.style.width = SliderLineWidth + 'px';


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


        //
        SliderLineMin.style.top = 0 + 'px';


        if (startingPointCircleOne <= startingPointCircleTwo) {
            SliderLineMin.style.left = startingPointCircleOne + 'px';
            SliderLineMin.style.width = startingPointCircleTwo - startingPointCircleOne + 'px';
        } else {
            SliderLineMin.style.left = startingPointCircleTwo + 'px';
            SliderLineMin.style.width = startingPointCircleOne - startingPointCircleTwo + 'px';
        }
    } else {
        SliderLineMin.style.width = SliderLineMinHeight + 'px';

        //
        SliderLineMin.style.left = 0 + 'px';
        if (startingPointCircleOne <= startingPointCircleTwo) {
            SliderLineMin.style.top = startingPointCircleOne + 'px';
            SliderLineMin.style.height = startingPointCircleTwo - startingPointCircleOne + 'px';
        } else {
            SliderLineMin.style.top = startingPointCircleTwo + 'px';
            SliderLineMin.style.height = startingPointCircleOne - startingPointCircleTwo + 'px';
        }
    }


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

    if (startingPointCircleOne <= startingPointCircleTwo) {
        SliderMoneyOne.textContent = ` ₽${fn(Math.trunc(startingPointCircleOne * coefficient), SliderStepSize)}`;
        SliderMoneyThree.textContent = ` - `;
        SliderMoneyTwo.textContent = ` ₽${  fn(Math.trunc(startingPointCircleTwo * coefficient), SliderStepSize)}`;
    } else {
        SliderMoneyOne.textContent = ` ₽${fn(Math.trunc(startingPointCircleTwo * coefficient), SliderStepSize)}`;
        SliderMoneyThree.textContent = ` - `;
        SliderMoneyTwo.textContent = ` ₽${  fn(Math.trunc(startingPointCircleOne * coefficient), SliderStepSize)}`;
    }




};
sliderbutton.click();