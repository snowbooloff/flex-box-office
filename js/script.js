let currentLevelNum = Number(localStorage.currentLevel)
const codeInInput = document.querySelector('.code-editor__input');
const nextButton = document.querySelector('.code-editor__bttn-next');
const engineer = document.getElementsByClassName('engineer');
const target = document.getElementsByClassName('target');
const targetLayer = document.querySelector('.target-layer');
const engineerLayer = document.querySelector('.engineer-layer');
const CommandStrList = {};

if (Number.isNaN(currentLevelNum)) {
    currentLevelNum = 0
}

document.addEventListener('load', startLevel())

const debounce = (func, ms) => {
    let delayTime;  
    return function() {
        const funcCall = () => func.apply(this, arguments);
        clearTimeout(delayTime);
        delayTime = setTimeout(funcCall, ms);
    };
}

function checkInput() {        
    let msg = codeInInput.value;
    engineerLayer.style = msg;
    
    (currentLevelNum === 0 && msg.toLowerCase().trim() == 'ready') ? nextButton.classList.add('ready') : nextButton.classList.remove('ready');

    if (currentLevelNum > 0) {
        if (checkPosition(engineer) === checkPosition(target)) {
            localStorage.setItem(`CodeInputValue${currentLevelNum}`, msg)
            nextButton.classList.add('ready');
        } else {
            nextButton.classList.remove('ready');
        }
    }
    for (key in CommandStrList) {
        if (!(codeInInput.value).includes(key)) {
            console.log(CommandStrList[key])
            delete CommandStrList[key];
        }
    }
}

checkInput = debounce(checkInput, 500);

codeInInput.addEventListener('input', checkInput);

document.addEventListener('click', (e) => {
    if (e.target.closest('.header__menu')) {
        document.querySelector('.header__commands-list').classList.toggle('open');
    }
    if (!e.target.closest('.header__help-nav')) {
        document.querySelector('.header__commands-list').classList.remove('open');
    }
    if (e.target.closest('.header__command') && !e.target.classList.contains('disabled')) {
        let currentCommand = e.target.nextSibling.nextSibling;
        const AllCommands = document.querySelectorAll('.header__props-list')
        currentCommand.classList.toggle('open')
        for (i = 0; i < AllCommands.length; i++) {
            if (AllCommands[i] == currentCommand) continue;
            AllCommands[i].classList.remove('open')
        }
    }
    if (e.target.closest('.header__props')) {
        codeInInput.value = '';
        let slectedProperty = e.target.textContent + ';' + '\n';
        let slectedCommand = e.target.parentNode.previousSibling.previousSibling.textContent + ': ';
        CommandStrList[slectedCommand] = slectedProperty;
        for (const [key, value] of Object.entries(CommandStrList)) {
            codeInInput.value += (key + value);
        }
        checkInput();
    }
    if (e.target.closest('.title-block')) {
        document.querySelector('.title-block__icon').classList.toggle('active')
        document.querySelector('.title-block__level-menu').classList.toggle('open')
    }
    if (!e.target.closest('.title-block')) {
        document.querySelector('.title-block__icon').classList.remove('active')
        document.querySelector('.title-block__level-menu').classList.remove('open')
    }
    if (e.target.closest('.title-block__level') && e.target.classList.contains('solved')) {
        document.querySelector('.title-block__icon').classList.remove('active')
        document.querySelector('.title-block__level-menu').classList.remove('open')
        currentLevelNum = (Number(e.target.textContent) - 1)
        currentLevelNum++
        startLevel()
    }
    if (e.target.closest('.code-editor__bttn-next') && nextButton.classList.contains('ready')) {
        currentLevelNum++
        startLevel()
    }
});

window.addEventListener('unload', ()=> {
    currentLevelNum = document.querySelectorAll('.solved').length
    localStorage.setItem('currentLevel', currentLevelNum)
})

document.addEventListener('keydown', (e) => {
    if (e.code == 'Escape') {
        document.querySelector('.header__commands-list').classList.remove('open');
    }
    if (e.code == 'Enter' && nextButton.classList.contains('ready')) {
        document.querySelector('.header__commands-list').classList.remove('open')
        currentLevelNum++
        startLevel();
        }
    }
)

function checkPosition(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray.push('x:' + (array[i].getBoundingClientRect().x).toFixed(0) + 'y:' + (array[i].getBoundingClientRect().y).toFixed(0));
        if (newArray.length > array.length) {
            newArray.shift()
        }
    }
    return JSON.stringify(newArray)
}

function generateObjectAndTargets (color, colorCount) {
    for (i = 0; i < colorCount; i++) {
        engineerLayer.innerHTML += `<div class="object engineer ${color}"></div>`;
        targetLayer.innerHTML += `<div class="object target ${color}"></div>`;
    }
}

function PrepareLevel() {
    codeInInput.blur();
    codeInInput.value = '';
    engineerLayer.style = 'justify-content: start';

    engineerLayer.innerHTML = '';
    targetLayer.innerHTML = '';

    nextButton.classList.remove('ready');
    
    for (var prop in CommandStrList) {delete CommandStrList[prop]};

    document.querySelector('.title-block__text').innerHTML = ('УРОВЕНЬ ' + currentLevelNum);

    for (let i = 1; i <= currentLevelNum; i++) {
        document.querySelectorAll('.title-block__level')[i-1].classList.add('solved');
    }
}

