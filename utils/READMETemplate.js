
const fs = require('fs');
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
 //     fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };


const readmeTemplate = (license, data, badge,link) => `
[![License](https://img.shields.io/badge/license-${badge}-${data.color})](${link})
# ${data.title}
## Description
${data.description}


## Installation
${data.installation}
## Usage 
${data.usage}
## Link
${data.link}
(https://https://github.com/${data.GitHub})
${data.GitHub}
## License
${license}
`;

module.exports = readmeTemplate;