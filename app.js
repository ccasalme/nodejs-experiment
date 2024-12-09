// // // // // // //JS experiment

// // // // // // function sayHello(name){
// // // // // //     console.log("Hello " + name);
// // // // // // }
// // // // // // //sayHello("cyrl");

// // // // // // // console.log(window);

// // // // // console.log(); //global object
// // // // // setTimeout(); //global object
// // // // // clearTimeout(); //global object

// // // // // window.console.log(); //global object
// // // // // var message = ''; //global object
// // // // // // however, functions that are defined in var message = ''; are not global objects
// // // // // global.console.log(); //global object

// // // // //console.log(module);

// // // // const logger = require('./logger');
// // // // // console.log(logger);
// // // // logger.log('message');

// // // // instead of exporting an object from a module, we can export a single function

// // // // require('path');

// // // // const pathObj = path.parse(__filename);
// // // // console.log(pathObj);

// // // const os = require('node:os');

// // // const totalMemory = os.totalmem();
// // // const freeMemory = os.freemem();
// // // // console.log('Total Memory: ' + totalMemory);
// // // console.log(`Total Memory: ${totalMemory}`);
// // // console.log(`Free Memory: ${freeMemory}`);

// // const fs = require('fs');

// // // const files = fs.readdirSync('./');
// // // console.log(files);

// // fs.readdir('./', function(err, files){
// //     if (err) console.log('Error', err);
// //     else console.log('Result', files);
// // });

// // // const EventEmitter = require('events');

// const EventEmitter = require('node:events'); //class
// const emitter = new EventEmitter(); //object

// //register a listener
// emitter.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });

// emitter.emit('messageLogged', {id: 1, url: 'http://'}); //raise an event


const inquirer = require('inquirer');
const fs = require('fs');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is your project installed?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used?'
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How is your project tested?'
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache 2.0', 'GPLv3', 'BSD 3-Clause', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username:'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:'
    }
  ]);
}

function generateREADME(answers) {
  return `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.

## Questions
For questions, please contact me at:
- GitHub: [${answers.github}](https://github.com/${answers.github})
- Email: ${answers.email}
`;
}

promptUser().then((answers) => {
  const readmeContent = generateREADME(answers);
  fs.writeFileSync('README.md', readmeContent);
  console.log('README.md generated successfully!');
});

