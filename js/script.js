//for-loop för att generera fem stycken element
for (let i = 1; i < 6; i++) {
    let liElement = document.createElement('li');
    document.body.appendChild(liElement);

    const text = 'Rad ' + i;
    liElement.innerText = text;
    liElement.style.textAlign = 'center';
    liElement.style.listStyle = 'none';
    //ändrar bakgrundsfärgen gradvis efter varje loop
    let hue = 100;
    liElement.style.backgroundColor = `hsl(${hue + (i * 20)}, 70%, 80%)`;
    liElement.style.color = 'hsl(200, 100%, 30%)'
    //margin och fontsize ökar efter varje loop
    liElement.style.marginTop = (i * 5) + 'px';
    liElement.style.marginBottom = (i * 5) + 'px';
    liElement.style.fontSize = (i * 10) + 'px';
}
//skapar den "stora" containern och flexar den
const container = document.createElement('section');
document.body.appendChild(container);
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
container.style.border = '2px solid black';
container.style.padding = '50px'

//Yttre loop
for (let i = 0; i < 3; i++) {
    //skapar en nestedContainer för varje varv i loopen som läggs i den "Stora" containern
    const nestedContainer = document.createElement('section');
    container.appendChild(nestedContainer);

    nestedContainer.style.backgroundColor = 'hsl(240, 50%, 80%)';
    nestedContainer.style.listStyle = 'none';
    nestedContainer.style.padding = '10px';

    nestedContainer.style.width = '50px';

    const arrayElement = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

    //if och else statements för att se villket varv den yttre loopen är på
    if (i == 0) {
        //skapar innehållet för den första nestedContainer
        for (let x = 0; x < 10; x++) {
            const liElement = document.createElement('li');
            liElement.innerText = x;
            nestedContainer.appendChild(liElement);
            liElement.style.paddingLeft = '2px';
            //if else statements för att ge varannat li-element olika bakgrundsfärg och textfärg
            if (x % 2 == 1) {
                liElement.style.backgroundColor = 'white';
                liElement.style.color = 'black';
            }
            //när x är fyra får elementet lila bakgrundsfärg
            else if (x == 4) {
                liElement.style.backgroundColor = 'hsl(240, 50%, 80%)';
                liElement.style.color = 'white';
            }
            else if (x % 2 == 0) {
                liElement.style.backgroundColor = 'black';
                liElement.style.color = 'white';
            }

        }
    }
    else if (i == 1) {
        //skapar innehållet för den andra nestedContainer. Räknar uppifrån ner.
        for (let x = 9; x >= 0; x--) {
            const liElement = document.createElement('li');
            liElement.innerText = x;
            nestedContainer.appendChild(liElement);
            liElement.style.textAlign = 'center';
            //if else statements för att ge varannat li-element olika bakgrundsfärg och textfärg
            if (x % 2 == 1) {
                liElement.style.backgroundColor = 'white';
                liElement.style.color = 'black';
            }
            //när x är 8 får li-elementet lila bakgrundsfärg
            else if (x == 8) {
                liElement.style.backgroundColor = 'hsl(240, 50%, 80%)';
                liElement.style.color = 'white';
            }
            else if (x % 2 == 0) {
                liElement.style.backgroundColor = 'black';
                liElement.style.color = 'white';
            }
        }
    }
    else {
        //skapar innehållet för den tredje nestedContainer. Utgår ifrån längden på arrayElement
        for (let x = 0; x < arrayElement.length; x++) {
            const liElement = document.createElement('li');
            liElement.innerText = arrayElement[x];
            nestedContainer.appendChild(liElement);
            liElement.style.textAlign = 'right';
            //när x är fem får li-elementet lila bakgrundsfärg
            if (x == 5) {
                liElement.style.backgroundColor = 'hsl(240, 50%, 80%)';
                liElement.style.color = 'black';
            }
            //else if statements för att ge varannat li-element olika bakgrundsfärg och textfärg
            else if (x % 2 == 1) {
                liElement.style.backgroundColor = 'white';
                liElement.style.color = 'black';
            }
            else if (x % 2 == 0) {
                liElement.style.backgroundColor = 'black';
                liElement.style.color = 'white';
            }
        }
    }
}