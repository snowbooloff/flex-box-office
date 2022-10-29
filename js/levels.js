function startLevel() {
    localStorage.setItem("currentLevel", currentLevelNum);

    PrepareLevel();

    codeInInput.value = localStorage.getItem(`CodeInputValue${currentLevelNum}`);

    let infoTextBody = document.querySelector(".sidebar__text-body");
    switch (currentLevelNum) {
        case 0: // INTRO
            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                Приветсвуем в нашей игре. Здесь ты будешь расставлять работинков нашего маленького офиса и
                изучать <span class="red-text">CSS</span> свойство
                <span class="red-text">display:flex</span>
                </p>

                <p class="sidebar__instructions">
                <span class="red-text">display:flex</span>(флекс бокс) - это способ позицирования обьектов.
                Он позволяет нам делать очень гибкие сайты, которые потом удобно адаптировать
                </p>

                <p class="sidebar__instructions">
                В основе <span class="red-text">Флекс бокса</span> лежит гибкий
                <span class="red-text">контейнер</span> и <span class="red-text">элементы</span> этого
                контейнера
                </p>

                <p class="sidebar__example">Напиши <span class="yellow-text">ready</span> и мы начинаем :)
                </p>`;
            break;

        case 1: // LEVEL 1
            generateObjectAndTargets("blue", 1);
            targetLayer.style = "justify-content: flex-end";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Наш единсвенный джун Вася хочет сидеть в другом конце офиса. Используй команду: <span class="red-text">justify-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">justify-content</span>: выравнивает элементы вдоль главной оси и использует следующие значения:
                </p>
            
                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: элементы выравниваются по левой стороне контейнера</li>
                    <li><span class="red-text">flex-end</span>: элементы выравниваются по правой стороне контейнера</li>
                    <li><span class="red-text">center</span>: элементы выравниваются по центру контейнера</li>
                    <li><span class="red-text">space-evenly</span>: элементы выравниваются с равными отступами вокруг них</li>
                    <li><span class="red-text">space-between</span>: элементы выравниваются с максимальными отступами между ними</li>
                    <li><span class="red-text">space-around</span>: элементы выравниваются с равными отступами вокруг них, 
                    но по краям отступы равны половине отступов между ними</li>
                </ul>
            
                <p class="sidebar__example">
                    Например, <span class="red-text">justify-content: flex-end;</span> сдвинет элемент вправо
                </p>`;
            break;

        case 2: // LEVEL 2
            generateObjectAndTargets("blue", 2);
            targetLayer.style = "justify-content: space-between";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Наш новый работник не хочет дружить с Васей. Расставь их максимально далеко друг от друга. Используй команду: <span class="red-text">justify-content</span>
                </p>
          
                <p class="sidebar__instructions">
                    <span class="red-text">justify-content</span>: выравнивает элементы вдоль главной оси и использует следующие значения
                </p>
            
                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: элементы выравниваются по левой стороне контейнера</li>
                    <li><span class="red-text">flex-end</span>: элементы выравниваются по правой стороне контейнера</li>
                    <li><span class="red-text">center</span>: элементы выравниваются по центру контейнера</li>
                    <li><span class="red-text">space-evenly</span>: элементы выравниваются с равными отступами вокруг них</li>
                    <li><span class="red-text">space-between</span>: элементы выравниваются с максимальными отступами между ними</li>
                    <li><span class="red-text">space-around</span>: элементы выравниваются с равными отступами вокруг них, 
                    но по краям отступы равны половине отступов между ними</li>
                </ul>`;
            break;

        case 3: // LEVEL 3
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "justify-content: space-evenly";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    У нас пополнение! Расставь наших работников c равнмыми отступами вокруг них. Используй команду: <span class="red-text">justify-content</span>
                </p>
        
                <p class="sidebar__instructions">
                    <span class="red-text">justify-content</span>: выравнивает элементы вдоль главной оси и использует следующие значения
                </p>
            
                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: элементы выравниваются по левой стороне контейнера</li>
                    <li><span class="red-text">flex-end</span>: элементы выравниваются по правой стороне контейнера</li>
                    <li><span class="red-text">center</span>: элементы выравниваются по центру контейнера</li>
                    <li><span class="red-text">space-evenly</span>: элементы выравниваются с равными отступами вокруг них</li>
                    <li><span class="red-text">space-between</span>: элементы выравниваются с максимальными отступами между ними</li>
                    <li><span class="red-text">space-around</span>: элементы выравниваются с равными отступами вокруг них, 
                    но по краям отступы равны половине отступов между ними</li>
                </ul>`;
            break;

        case 4: // LEVEL 4
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "justify-content: space-around";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    В нашем офисе снова престановки. Расставим работников с одинаковыми отступами, но покраям отступы должны быть равны половине отступов между ними. Используй команду: <span class="red-text">justify-content</span>
                </p>
        
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 5: // LEVEL 5
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "align-items: center";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Теперь наши работники хотят расставить места по-другому. Используй команду: <span class="red-text">align-items</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">align-items</span>: выравнивает элементы по вертикальной оси и использует следующие значения:
                </p>
            
                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: элементы выравниваются к началу вертикальной оси</li>
                    <li><span class="red-text">flex-end</span>: элементы выравниваются к концу вертикальной оси</li>
                    <li><span class="red-text">center</span>: элементы выравниваются по центру вертикальной оси</li>
                    <li><span class="red-text">stretch</span>: элементы растягиваются таким образом, чтобы занять всё доступное пространство</li>
                    <li><span class="red-text">baseline</span>: элементы выравниваются по базовой оси</li>
                </ul>
            
                <p class="sidebar__example">
                    Например, <span class="red-text">align-items: center;</span> выравнивает элементы вертикально по центру
                </p>`;
            break;

        case 6: // LEVEL 6
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "align-items: flex-end";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    И снова перестановки. Используй команду: <span class="red-text">align-items</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">align-items</span>: выравнивает элементы по вертикальной оси и использует следующие значения:
                </p>
            
                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: элементы выравниваются к началу вертикальной оси</li>
                    <li><span class="red-text">flex-end</span>: элементы выравниваются к концу вертикальной оси</li>
                    <li><span class="red-text">center</span>: элементы выравниваются по центру вертикальной оси</li>
                    <li><span class="red-text">stretch</span>: элементы растягиваются таким образом, чтобы занять всё доступное пространство</li>
                    <li><span class="red-text">baseline</span>: элементы выравниваются по базовой оси</li>
                </ul>`;
            break;

        case 7: // LEVEL 7
            generateObjectAndTargets("blue", 1);
            targetLayer.style = "align-items: center; justify-content: center";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Все ушли домой и остался только один Вася. Помоги поставить его на место с помощью команд: <span class="red-text">align-items</span> и <span class="red-text">justify-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 8: // LEVEL 8
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "align-items: flex-end; justify-content: space-between";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Вся наша команда в сборе. Помоги поставить всех на место с помощью команд: <span class="red-text">align-items</span> и <span class="red-text">justify-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 9: // LEVEL 9
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-direction: row-reverse";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Нашим работникам надоело сидеть на старых местах. Используй команду: <span class="red-text">flex-direction</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">flex-direction</span>: задает направление, в котором будут выравниваться элементы и использует следующие значения:
                </p>
            
                <ul class="sidebar__properties">
                    <li><span class="red-text">row</span>: элементы выравниваются в строчку</li>
                    <li><span class="red-text">row-reverse</span>: элементы выравниваются в строчку, но в обратном порядке</li>
                    <li><span class="red-text">column</span>: элементы выравниваются вертикально</li>
                    <li><span class="red-text">column-reverse</span>: элементы выравниваются вертикально, но в обратном порядке</li>
                </ul>
            
                <p class="sidebar__example">
                    Например, <span class="red-text">flex-direction: row-reverse;</span> выравнивает элементы в строчку, но в обратном порядке
                </p>`;
            break;

        case 10: // LEVEL 10
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-direction: column";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    А теперь расставь их вертикально. Используй команду: <span class="red-text">flex-direction</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">flex-direction</span>: задает направление, в котором будут выравниваться элементы и использует следующие значения:
                </p>
            
                <ul class="sidebar__properties">
                    <li><span class="red-text">row</span>: элементы выравниваются в строчку</li>
                    <li><span class="red-text">row-reverse</span>: элементы выравниваются в строчку, но в обратном порядке</li>
                    <li><span class="red-text">column</span>: элементы выравниваются вертикально</li>
                    <li><span class="red-text">column-reverse</span>: элементы выравниваются вертикально, но в обратном порядке</li>
                </ul>`;
            break;

        case 11: // LEVEL 11
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-direction: column-reverse";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    А теперь расставь их вертикально, но в обратном порядке. Используй команду: <span class="red-text">flex-direction</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 12: // LEVEL 12
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-direction: column; justify-content: space-evenly";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                Нужно снова сделать перестановки. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-direction</span> и <span class="red-text">justify-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>
                
                <p class="sidebar__example">
                    При <span class="red-text">flex-direction: column</span> свойство <span class="red-text">justify-content</span> выравнивает вертрикально, а <span class="red-text">align-items</span> выравнивает горизонтально
                </p>`;
            break;

        case 13: // LEVEL 13
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-direction: column-reverse; justify-content: center";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Давай проверим твои знания. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-direction</span> и <span class="red-text">justify-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>
                
                <p class="sidebar__example">
                    При <span class="red-text">flex-direction: column</span> свойство <span class="red-text">justify-content</span> выравнивает вертрикально, а <span class="red-text">align-items</span> выравнивает горизонтально
                </p>`;
            break;

        case 14: // LEVEL 14
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-direction: row-reverse; justify-content: space-between; align-items: center";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Тут уже сложнее! Помоги поставить всех на место с помощью команд: <span class="red-text">flex-direction</span>, <span class="red-text">justify-content</span> и <span class="red-text">align-items</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>
                
                <p class="sidebar__example">
                    При <span class="red-text">flex-direction: column</span> свойство <span class="red-text">justify-content</span> выравнивает вертрикально, а <span class="red-text">align-items</span> выравнивает горизонтально
                </p>`;
            break;

        case 15: // LEVEL 15
            generateObjectAndTargets("blue", 1);
            generateObjectAndTargets("yellow", 1);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-direction: column-reverse; justify-content: space-around; align-items: flex-end";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Давай еще раз закрепим знания. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-direction</span>, <span class="red-text">justify-content</span> и <span class="red-text">align-items</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>
                
                <p class="sidebar__example">
                    При <span class="red-text">flex-direction: column</span> свойство <span class="red-text">justify-content</span> выравнивает вертрикально, а <span class="red-text">align-items</span> выравнивает горизонтально
                </p>`;
            break;

        case 16: // LEVEL 16
            generateObjectAndTargets("yellow", 4);
            generateObjectAndTargets("green", 4);
            targetLayer.style = "flex-wrap: wrap";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Нас стало очень много и не хватает места в ряду. Используй команду: <span class="red-text">flex-wrap</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">flex-wrap</span>: задаёт правила вывода элементов — в одну строку или несколько и использует следующие значения:
                </p>

                <ul class="sidebar__properties">
                    <li><span class="red-text">wrap</span>: разрешает перенос элементов на новую строчку</li>
                    <li><span class="red-text">nowrap</span>: убирает перенос элементов на новую строчку</li>
                    <li><span class="red-text">wrap-reverse</span>: элементы переносятся на новую строчку, но только с конца</li>
                </ul>
                
                <p class="sidebar__example">
                    Например, <span class="red-text">flex-wrap: wrap;</span> переносит элементы на новую строчку
                </p>`;
            break;

        case 17: // LEVEL 17
            generateObjectAndTargets("blue", 5);
            generateObjectAndTargets("green", 3);
            targetLayer.style = "flex-wrap: wrap-reverse";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Теперь попробуй поменять их местами. Используй команду: <span class="red-text">flex-wrap</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">flex-wrap</span>: задаёт правила вывода элементов — в одну строку или несколько и использует следующие значения:
                </p>

                <ul class="sidebar__properties">
                    <li><span class="red-text">wrap</span>: разрешает перенос элементов на новую строчку</li>
                    <li><span class="red-text">nowrap</span>: убирает перенос элементов на новую строчку</li>
                    <li><span class="red-text">wrap-reverse</span>: элементы переносятся на новую строчку, но только с конца</li>
                </ul>`;
            break;

        case 18: // LEVEL 18
            generateObjectAndTargets("blue", 3);
            generateObjectAndTargets("green", 5);
            targetLayer.style = "flex-wrap: wrap; justify-content: space-between";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    А сейчас у нас новая планировка. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-wrap</span> и <span class="red-text">justify-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 19: // LEVEL 19
            generateObjectAndTargets("blue", 3);
            generateObjectAndTargets("green", 5);
            targetLayer.style = "flex-wrap: wrap-reverse; justify-content: flex-end";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Опять нужно сделать перестановку. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-wrap</span> и <span class="red-text">justify-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 20: // LEVEL 20
            generateObjectAndTargets("blue", 6);
            generateObjectAndTargets("green", 1);
            targetLayer.style = "flex-wrap: wrap; justify-content: flex-end; align-items: center";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Теперь уже новые позиции. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-wrap</span>, <span class="red-text">justify-content</span> и <span class="red-text">align-items</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 21: // LEVEL 21
            generateObjectAndTargets("blue", 3);
            generateObjectAndTargets("green", 5);
            targetLayer.style = "flex-wrap: wrap-reverse; justify-content: space-around; align-items: flex-end";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Нужно закрепить твои знания. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-wrap</span>, <span class="red-text">justify-content</span> и <span class="red-text">align-items</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 22: // LEVEL 22
            generateObjectAndTargets("blue", 5);
            generateObjectAndTargets("green", 5);
            generateObjectAndTargets("yellow", 2);
            targetLayer.style = "flex-direction: column; flex-wrap: wrap-reverse";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Народу много и всем нужно место. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-direction</span> и <span class="red-text">flex-wrap</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 23: // LEVEL 23
            generateObjectAndTargets("blue", 5);
            generateObjectAndTargets("green", 5);
            generateObjectAndTargets("yellow", 2);
            targetLayer.style = "flex-direction: row-reverse; flex-wrap: wrap";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Боже мой! Сколько народу. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-direction</span> и <span class="red-text">flex-wrap</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 24: // LEVEL 24
            generateObjectAndTargets("blue", 10);
            generateObjectAndTargets("green", 2);
            targetLayer.style = "flex-flow: row-reverse wrap";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Попробуй повторить прошлый уровень, но теперь только одной командой: <span class="red-text">flex-flow</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>

                <p class="sidebar__example">
                    Например, <span class="red-text">flex-flow: row-reverse wrap;</span>
                </p>`;
            break;

        case 25: // LEVEL 25
            generateObjectAndTargets("blue", 10);
            generateObjectAndTargets("yellow", 2);
            targetLayer.style = "flex-flow: row-reverse wrap-reverse";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Как они задолбали с этими перестановками. Используй команду: <span class="red-text">flex-flow</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 26: // LEVEL 26
            generateObjectAndTargets("green", 10);
            targetLayer.style = "flex-flow: wrap; align-content: flex-end";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    Так мало места и так много народу. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-flow</span> и <span class="red-text">align-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">align-content</span>: указывает как ряды должны выравниваться относительно друг друга и использует следующие значения:
                </p>

                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: ряды выравниваются в верхней стороне контейнера</li>
                    <li><span class="red-text">flex-end</span>: ряды выравниваются в нижней стороне контейнера</li>
                    <li><span class="red-text">center</span>: ряды выравниваются по центру контейнера</li>
                    <li><span class="red-text">space-evenly</span>: ряды выравниваются с равными отступами вокруг них</li>
                    <li><span class="red-text">space-between</span>: ряды выравниваются с максимальными отступами между ними</li>
                    <li><span class="red-text">space-around</span>: ряды выравниваются с равными отступами вокруг них, 
                    но по краям отступы равны половине отступов между ними</li>    
                    <li><span class="red-text">stretch</span>: ряды выравниваются, чтоб заполнить контейнер равномерно</li>
                </ul>
                
                <p class="sidebar__example">
                    Например, <span class="red-text">align-content: flex-end;</span> выравнивает в нижней стороне контейнера
                </p>`;
            break;

        case 27: // LEVEL 27
            generateObjectAndTargets("yellow", 10);
            targetLayer.style = "flex-flow: column wrap; align-content: center";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    И снова нужно поставить всех на место. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-flow</span> и <span class="red-text">align-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="red-text">align-content</span>: указывает как ряды должны выравниваться относительно друг друга
                </p>

                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: ряды выравниваются в верхней стороне контейнера</li>
                    <li><span class="red-text">flex-end</span>: ряды выравниваются в нижней стороне контейнера</li>
                    <li><span class="red-text">center</span>: ряды выравниваются по центру контейнера</li>
                    <li><span class="red-text">space-evenly</span>: ряды выравниваются с равными отступами вокруг них</li>
                    <li><span class="red-text">space-between</span>: ряды выравниваются с максимальными отступами между ними</li>
                    <li><span class="red-text">space-around</span>: ряды выравниваются с равными отступами вокруг них, 
                    но по краям отступы равны половине отступов между ними</li>    
                    <li><span class="red-text">stretch</span>: ряды выравниваются, чтоб заполнить контейнер равномерно</li>
                </ul>`;
            break;

        case 28: // LEVEL 28
            generateObjectAndTargets("yellow", 5);
            generateObjectAndTargets("green", 5);
            targetLayer.style = "flex-flow: column-reverse wrap; align-content: space-evenly";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    И снова нужно поставить всех на место. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-flow</span> и <span class="red-text">align-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    Их даже сплющило!. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-flow</span> и <span class="red-text">align-content</span>
                </p>

                <ul class="sidebar__properties">
                    <li><span class="red-text">flex-start</span>: ряды выравниваются в верхней стороне контейнера</li>
                    <li><span class="red-text">flex-end</span>: ряды выравниваются в нижней стороне контейнера</li>
                    <li><span class="red-text">center</span>: ряды выравниваются по центру контейнера</li>
                    <li><span class="red-text">space-evenly</span>: ряды выравниваются с равными отступами вокруг них</li>
                    <li><span class="red-text">space-between</span>: ряды выравниваются с максимальными отступами между ними</li>
                    <li><span class="red-text">space-around</span>: ряды выравниваются с равными отступами вокруг них, 
                    но по краям отступы равны половине отступов между ними</li>    
                    <li><span class="red-text">stretch</span>: ряды выравниваются, чтоб заполнить контейнер равномерно</li>
                </ul>`;
            break;

        case 29: // LEVEL 29
            generateObjectAndTargets("yellow", 10);
            generateObjectAndTargets("green", 10);
            targetLayer.style = "flex-flow: row-reverse wrap; align-content: space-between";

            infoTextBody.innerHTML = `
                <p class="sidebar__backstory">
                    У меня уже закончились идеи для фраз. Помоги поставить всех на место с помощью команд: <span class="red-text">flex-flow</span> и <span class="red-text">align-content</span>
                </p>
            
                <p class="sidebar__instructions">
                    <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
                </p>`;
            break;

        case 30: // LEVEL 30
            generateObjectAndTargets("blue", 4);
            generateObjectAndTargets("green", 3);
            targetLayer.style =
                "justify-content: space-around; align-items: center; flex-flow: column-reverse wrap; align-content: space-evenly";

            infoTextBody.innerHTML = `
            <p class="sidebar__backstory">
                ФИНАЛ. Помоги поставить всех на место с помощью команд: <span class="red-text">justify-content</span>, <span class="red-text">align-items</span>, <span class="red-text">flex-flow</span>, <span class="red-text">align-content</span>
            </p>
        
            <p class="sidebar__instructions">
                <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
            </p>`;
            break;
        default:
            generateObjectAndTargets(randomomizeColorObject(), randomomizeObject());
            generateObjectAndTargets(randomomizeColorObject(), randomomizeObject());
            targetLayer.style = `${generateRandomLevel(CommandArray)}`;

            infoTextBody.innerHTML = `
            <p class="sidebar__backstory">
                <span class="red-text">МОЛОДЕЦ</span>, ты прошел игру! Теперь все следующие уровни генерируются рандомно
            </p>
        
            <p class="sidebar__instructions">
                <span class="yellow-text">Если забыл значения, то посмотри подсказки сверху</span>
            </p>`;
    }
    checkPosition(target);
    checkInput();
}