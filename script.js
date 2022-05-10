//let  arr = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']
let arrEnCode = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
let shiftEnCode = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
let capsEnCode = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control']
    //let arrRuCode = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del', 'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', ' shift', 'ctrl', 'win', 'alt', 'space', 'alt', '&#8592;', '&#8595;', '&#8594;', 'ctrl']

// при загруске 
function doKeyboerd(arr = arrEnCode) {
    let buttonsInKeyboard = ""
    for (let i = 0; i < arr.length; i++) {
        // const regexLetter = '[A-Za-z]';
        // const regextNum = '[0-9\-\=\`]'
        if (arr[i] == 'Backspace' || arr[i] == 'CapsLock' || arr[i] == 'Enter' || arr[i] == 'Shift') {
            buttonsInKeyboard += ` <div class="double-button button" data="${ arr[i]}">${ arr[i]}</div>`

        } else if (arr[i] == ' ') {
            buttonsInKeyboard += ` <div class="space-button button" data="${ arr[i]}">${ arr[i]}</div>`
        } else {
            buttonsInKeyboard += ` <div class="square-button button" data="${ arr[i]}">${ arr[i]}</div>`
        }

    }
    letterArr = document.getElementsByClassName('letter')
    document.querySelector('.KEYBOARD').insertAdjacentHTML("beforeend", buttonsInKeyboard);
}

function doTextarea() {

    document.querySelector('body').insertAdjacentHTML("afterbegin", '<div class="title"> RSS Виртуальная клавиатура </div><textarea name="text" id="text" class="textarea" cols="150" rows="10"></textarea><div id="KEYBOARD" class="KEYBOARD"></div>')
}


function loading() {
    doTextarea();
    doKeyboerd();
}


loading()


// конец загрузки
// переменные
const KEYBOARD = document.getElementById('KEYBOARD')
const textarea = document.getElementById('text')
    //let capsButton = document.getElementsByClassName
    // КАПС ФУНКЦИЯ 
function capsActive() {

    document.getElementById('KEYBOARD').innerHTML = "";
    doKeyboerd(capsEnCode);
    let capsButton = document.querySelector(`.button[data='CapsLock']`);
    capsButton.classList.add('active-caps');

}

function capsDeleteActive() {
    document.getElementById('KEYBOARD').innerHTML = "";
    doKeyboerd(arrEnCode);
    let capsButton = document.querySelector(`.button[data='CapsLock']`);
    capsButton.classList.remove('active-caps');

}


// document.onkeydown = function(event) {
//         console.log(event)
//          arr.push(event.key)
//         console.log( arr);
//     }
//  .addEventListener('keydown', addCode)
function doubleKeyDown(event) {

}
textarea.onblur = function() {
    document.querySelectorAll('.button').forEach(el => el.classList.remove('active'))
}
textarea.onkeydown = function(event) {
    // проверка капса



    // проверка на шифт 
    if (event.key == 'Shift' && event.key != 'CapsLock') {

        document.getElementById('KEYBOARD').innerHTML = "";
        doKeyboerd(shiftEnCode)
        document.querySelector(`.button[data='${event.key}']`).classList.add('active');
    } //проверк alt ctr
    if (event.key == 'CapsLock') {
        if (document.querySelector(`.button[data='${event.key}']`).classList.contains('active-caps') == true) {
            capsDeleteActive()
        } else {
            capsActive()
        }
    }
    if (event.ctrlKey == true || event.altKey == true || event.shiftKey == true && event.key != 'CapsLock') {

        document.querySelector(`.button[data='${event.key}']`).classList.add('active');
    } // вторая кнопка при шрифте
    else if (event.shiftKey == 'Shift' && event.key != 'CapsLock') {
        document.querySelector(`.button[data='${event.key}']`).classList.add('active');
    } else if (event.key != 'CapsLock') {

        document.querySelectorAll('.button').forEach(el => el.classList.remove('active'));
        document.querySelector(`.button[data='${event.key}']`).classList.add('active');
        // if () {
        //     // alert(event.ctrlKey)
        //     document.querySelector(`.button[data='${event.key}']`).classList.remove('active');
        // }
    }
}
textarea.onkeyup = function(event) {
    if (event.key != 'CapsLock') {
        document.querySelector(`.button[data='${event.key}']`).classList.remove('active');
    }

    if (event.key == 'Shift') {
        document.getElementById('KEYBOARD').innerHTML = "";
        doKeyboerd(arrEnCode)
    }
}

// document.onkeydown = function(event) {
//     // console.log(event)
//     if (event.key != 'Shift') {
//         shiftArr.push(event.key)
//     }

//     console.log(shiftArr)
// }
KEYBOARD.addEventListener('keydown', capsActive);