const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Square, Triangle } = require('./lib/shapes');

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
    let shapeSVG;
    switch (answers.shape) {
        case 'circle':
            shapeSVG = new Circle(answers.shapeColor).toSvg();
            break;
        case 'square':
            shapeSVG = new Square(answers.shapeColor).toSvg();
            break;
        case 'triangle':
            shapeSVG = new Triangle(answers.shapeColor).toSvg();
            break;
    }

    return `
    <svg width="300" height="200">
    ${shapeSVG}
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
