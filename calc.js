const fields = [
    { txt: '0', col:'1/3', row:'5'},
    { txt: '1', col:'1', row:'4'},
    { txt: '2', col:'2', row:'4'},
    { txt: '3', col:'3', row:'4'},
    { txt: '4', col:'1', row:'3'},
    { txt: '5', col:'2', row:'3'},
    { txt: '6', col:'3', row:'3'},
    { txt: '7', col:'1', row:'2'},
    { txt: '8', col:'2', row:'2'},
    { txt: '9', col:'3', row:'2'},
    { txt: 'C', col:'4', row:'2'},
    { txt: '+', col:'4', row:'3'},
    { txt: '-', col:'4', row:'4'},
    { txt: '=', col:'3', row:'5'},
    { txt: '.', col:'4', row:'5'},
    { txt: 'Display', col:'1/5', row:'1'},
    ];

const handleClick = e => {
    const d = document.getElementById('display');
    const keyCode = e.target.textContent;
    switch (keyCode) {
        case 'C':
        d.textContent = '0';
        buffer = 0;
        break;

        case '+':
        buffer

    }
};


const init = () => {

        const container = document.getElementById('container');
    fields.forEach(el => {
        let div = document.createElement('div');
        div.textContent = el.txt;
        div.style.gridColumn = el.col;
        div.style.gridRow = el.row;
        if (el.txt === 'Display'){
            div.id = 'Display';
            div.textContent = '0';
        } else {
            div.addEventListener('click', handleClick );
         }
         container.appendChild(div);
    });

}
window.addEventListener('DOMContentLoaded', init);
