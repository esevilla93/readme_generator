
const fs = require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const api = require("./utils/api");
const markdown = require("./utils/generateMarkdown");


const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the title of your project?",

    },
    {
        type: "input",
        name: "username",
        message: "What's your Github username?",
    },

    {
        type: "input",
        name: "description",
        message: "Write a brief description about your project.",
    },

    {
        type: "input",
        name: "installation",
        message: "What steps required to install your project?",
    },

    {
        type: "input",
        name: "usage",
        message: "Give examples and instructions on how your project can be used.",
    },

    {
        type: "input",
        name: "contributing",
        message: "List collaborators, if applicable."
    },

    {
        type: "input",
        name: "license",
        message: "What licensing will you be using?"
    },

    {
        type: "input",
        name: "tests",
        message: "Add any information on the tests you will be using."
    },
    {
        type: "input",
        name: "email",
        message: "Add your email address."
    },


];



function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err
    });
}

function init() {
    return inquirer.prompt(questions)
        .then(function (data) {
            markdown(data);
            const userMakrdown = markdown(data);
            api.getUser(data.username);
            writeToFile(`${data.title}.md`, userMakrdown);
            console.log("Success!");
        })
        .catch(function (err) {
            console.log(err);


        });

}

init();
