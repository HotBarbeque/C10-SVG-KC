const inquirer = require('inquirer');

function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Please enter ,at most, 3 letters you would like on your logo.',
                name: 'letters'
            },
            {
                type: 'input',
                message: 'Please enter a color or hexadecimal code for your logo text color.',
                name: 'textColor'
            },
            {
                type: 'list',
                message: 'Please pick a shape for your logo.',
                name: 'shape',
                choices: ['Circle', 'Square', 'Triangle']
            },
            {
                type: 'input',
                message: 'Please enter a color or hexadecimal code for your logo shape color.',
                name: 'shapeColor'
            },
    ])
}
