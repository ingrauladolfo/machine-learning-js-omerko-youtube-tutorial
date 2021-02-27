const colorInput = document.querySelector('input');
const colorSection = document.querySelector('.section');

const network = new brain.NeuralNetwork();
// Training network
network.train([
    { input: {red: 0.18, green:0.19, blue: 0.82}, output:{dark:1}},
    {input: {red: 0.96, green:0.98, blue: 0.07}, output:{light:1}},
    {input: {red: 1, green:0.44, blue: 0.23}, output:{light:1}},
    {input: {red: 0.27, green:0.26, blue: 0}, output:{dark:1}},
    {input: {red: 0.58, green:0.73, blue: 1}, output:{light:1}},
    {input: {red: 0.11, green:0.20, blue: 0.13}, output:{dark:1}},
    {input: {red: 0.27, green:0.26, blue: 1}, output:{light:1}},
    {input: {red: 0.58, green:0.02, blue: 0.21}, output:{dark:1}},
])
// Functions
const changeColor = () =>{
    
}