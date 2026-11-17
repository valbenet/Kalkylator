const prob = document.getElementById("problem");


function onClick(event) {
    let problem = document.getElementById("problem");
    let button = event.target;

    if (button.id === "equal") {
        return;
    }

    problem.value += button.textContent;
}

function init() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", onClick);
    }
}

document.addEventListener('keydown', (event) => {
    if (event.key === '1') {
        const knapp = document.getElementById('number1');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '2') {
        const knapp = document.getElementById('number2');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '3') {
        const knapp = document.getElementById('number3');
        if (knapp) {
            knapp.click();
        }
    }
}

);


document.addEventListener('keydown', (event) => {
    if (event.key === '4') {
        const knapp = document.getElementById('number4');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '5') {
        const knapp = document.getElementById('number5');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '6') {
        const knapp = document.getElementById('number6');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '7') {
        const knapp = document.getElementById('number7');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '8') {
        const knapp = document.getElementById('number8');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '9') {
        const knapp = document.getElementById('number9');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '0') {
        const knapp = document.getElementById('number0');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '+') {
        const knapp = document.getElementById('plus');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '-') {
        const knapp = document.getElementById('minus');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '*') {
        const knapp = document.getElementById('times');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '/') {
        const knapp = document.getElementById('divide');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '=' || event.key === 'Enter') {
        const knapp = document.getElementById('equal');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === 'p') {
        const knapp = document.getElementById('pi');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === 'r') {
        const knapp = document.getElementById('root');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '^') {
        const knapp = document.getElementById('raisedTo');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === ',' || event.key === '.') {
        const knapp = document.getElementById('comma');
        if (knapp) {
            knapp.click();
        }
    }
}

);

document.addEventListener('keydown', (event) => {
    if (event.key === '(' || event.key === ')') {
        const knapp = document.getElementById('parenthesis');
        if (knapp) {
            knapp.click();
        }
    }
}

);

window.onload = init;