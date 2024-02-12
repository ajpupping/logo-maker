const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'To create your logo, first enter up to 3 characters:',
        }, 
        {
            type: 'input', 
            name: 'textColor',
            message: 'What color would you like your text to be?',
        }, 
        {
            type: 'list',
            name: 'shape',
            message: 'Next choose a shape for your logo:',
            choices: ['circle', 'square', 'triangle']
        }, 
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What color would you like your shape to be?',
        },

    ]);
};

// Function to generate SVG
const generateSVG = (answers) => {
    const shapes = {
        circle: `<circle cx="150" cy="100" r="80" fill="${answers.shapeColor}" />`,
        square: `<rect x="35" y="10" width="230" height="180" fill="${answers.shapeColor}" />`,
        triangle:`<polygon points="150,10 250,190 50,190" fill="${answers.shapeColor}" />`,
    }
    return `
    <svg width="300" height="200">
    ${shapes[answers.shape]}
    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${answers.textColor}" font-size="64">${answers.text}</text>
    </svg>
    `;
};

// function to run the application
const init = async () => {
    const answers = await questions();
    const svg = generateSVG(answers);
    fs.writeFileSync('logo.svg', svg);
    console.log('Logo created!');
}; 

init();
