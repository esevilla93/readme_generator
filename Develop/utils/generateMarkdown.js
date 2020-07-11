function generateMarkdown(data) {
  var profilePicture = "";

  return `

# ${data.title}
* ${data.description}

## __Table of Contents__  
* [Installation](#installation)               
* [Usage](#usage)                    
* [License](#license)                      
* [Contributor](#contributor)                 
* [Test](#test)
* [Question](#question) 
## __Installation__ :               
* ${ data.installation}
## __Usage__ :                   
* ${data.usage}
## __License__ :                    
* ${data.license}
## __Contributor__ :              
* ${data.contributing}
## __Test__ :                      
* ${data.tests}
## __Questions__ :
* Profile Pic
 - ![Image](${profilePicture})
* Username
 - ${data.username}
* Email
 - ${data.email}
`;
}

module.exports = generateMarkdown;
