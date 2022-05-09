//let  arrEnCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowUp', 'ArrowDown', 'ArrowRight']
let arrEnCode = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrowUp', 'Shift', 'Control', 'Meta', 'Alt', ' ', 'Alt', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Control'];
let shiftEnArr = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?'];

//let simbolsButton = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '/', 'del', 'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', ' shift', 'ctrl', 'win', 'alt', 'space', 'alt', '&#8592;', '&#8595;', '&#8594;', 'ctrl']

// при загруске 
function doKeyboerdOnLoad() {
    let buttonsInKeyboard = ""
    for (let i = 0; i < arrEnCode.length; i++) {
        const regexLetter = '[A-Za-z]';
        const regextNum = '[0-9\-\=\`]'
        if (arrEnCode[i] == 'Backspace' || arrEnCode[i] == 'CapsLock' || arrEnCode[i] == 'Enter' || arrEnCode[i] == 'Shift') {
            buttonsInKeyboard += ` <div class="double-button button" data="${ arrEnCode[i]}">${ arrEnCode[i]}</div>`

        } else if (arrEnCode[i].match(regextNum)) {
            buttonsInKeyboard += ` <div class="square-button button changeButton" data="${ arrEnCode[i]}">${ arrEnCode[i]}</div>`
        } else if (arrEnCode[i].match(regexLetter)) {
            buttonsInKeyboard += ` <div class="square-button button changeButton" data="${ arrEnCode[i]}">${ arrEnCode[i]}</div>`
        } else if (arrEnCode[i] == ' ') {
            buttonsInKeyboard += ` <div class="space-button button" data="${ arrEnCode[i]}">${ arrEnCode[i]}</div>`
        } else {
            buttonsInKeyboard += ` <div class="square-button button" data="${ arrEnCode[i]}">${ arrEnCode[i]}</div>`
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
    doKeyboerdOnLoad();
}


loading()


// конец загрузки
// переменные
const KEYBOARD = document.getElementById('KEYBOARD')
const textarea = document.getElementById('text')



// document.onkeydown = function(event) {
//         console.log(event)
//          arrEnCode.push(event.key)
//         console.log( arrEnCode);
//     }
//  .addEventListener('keydown', addCode)
function doubleKeyDown(event) {

}
textarea.onblur = function() {
    document.querySelectorAll('.button').forEach(el => el.classList.remove('active'))
}
textarea.onkeydown = function(event) {
    if (event.ctrlKey == true || event.altKey == true) {
        document.querySelector(`.button[data='${event.key}']`).classList.add('active');
    } else {
        document.querySelectorAll('.button').forEach(el => el.classList.remove('active'))
        document.querySelector(`.button[data='${event.key}']`).classList.add('active');
        // if () {
        //     // alert(event.ctrlKey)
        //     document.querySelector(`.button[data='${event.key}']`).classList.remove('active');
        // }
    }
}
textarea.onkeyup = function(event) {
    document.querySelector(`.button[data='${event.key}']`).classList.remove('active');

}
document.onkeydown = function(event) {
    // console.log(event)
    if (event.key != 'Shift') {
        shiftArr.push(event.key)
    }

    console.log(shiftArr)
}