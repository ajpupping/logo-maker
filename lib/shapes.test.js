const { Circle, Square, Triangle } = require('./shapes');

describe('Circle', () => {
    test('generates correct SVG markup', () => {
    const color = 'red';
    const circle = new Circle(color);
    const svgMarkup = circle.toSvg();
    expect(svgMarkup).toBe(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

describe('Square', () => {
    test('generates correct SVG markup', () => {
    const color = 'blue';
    const square = new Square(color);
    const svgMarkup = square.toSvg();
    expect(svgMarkup).toBe(`<rect x="35" y="10" width="160" height="160" fill="${color}" />`);
    });
});

describe('Triangle', () => {
    test('generates correct SVG markup', () => {
    const color = 'green';
    const triangle = new Triangle(color);
    const svgMarkup = triangle.toSvg();
    expect(svgMarkup).toBe(`<polygon points="150,10 250,190 50,190" fill="${color}" />`);
    });
});