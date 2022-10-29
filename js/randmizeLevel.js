const CommandArray = [
    (justifyContentList = [
        "justify-content: flex-start;",
        "justify-content: flex-end;",
        "justify-content: center;",
        "justify-content: space-between;",
        "justify-content: space-around;",
        "justify-content: space-evenly;",
    ]),
    (alignItemsList = [
        "align-items: flex-start;",
        "align-items: flex-end;",
        "align-items: center;",
        "align-items: stretch;",
        "align-items: baseline;",
    ]),
    (flexDirectionList = [
        "flex-direction: row-reverse;",
        "flex-direction: column;",
        "flex-direction: column-reverse;",
    ]),
    (flexWrapList = ["flex-wrap: wrap;", "flex-wrap: wrap-reverse;"]),
    (alignContentList = [
        "align-content: flex-start;",
        "align-content: flex-end;",
        "align-content: center;",
        "align-content: space-between;",
        "align-content: space-around;",
        "align-content: space-evenly;",
        "align-content: stretch;",
    ]),
];

function generateRandomLevel(array) {
    let CommandsString = "";
    for (let i = 0; i < array.length; i++) {
        let arrayChild = array[i];
        let randomCommand = Math.floor(Math.random() * array[i].length);
        CommandsString += arrayChild[randomCommand];
    }
    return CommandsString;
}

function randomomizeObject() {
    let randomInteger = 3 + Math.random() * (6 - 3);
    return Math.floor(randomInteger);
}

function randomomizeColorObject() {
    var objectColors = ["blue", "green", "yellow"];
    let randomInteger = Math.floor(Math.random() * 3);
    return objectColors[randomInteger];
}
