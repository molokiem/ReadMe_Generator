// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  // TITLE
  {
    type: "input",
    name: "title",
    messgae: "What is the title of the project?",
  },
  // DESCRIPTION
  {
    type: "input",
    name: "description",
    messgae: "Provide a description of the project.",
  },
  // INSTALLATION
  {
    type: "input",
    name: "install",
    messgae: "How do you install the project?",
  },
  // USAGE
  {
    type: "input",
    name: "usage",
    messgae: "How do you use this project?",
  },
  // LICENSE
  {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["BSD3", "MIT", "GPL", "None"],
  },
  // CONTRIBUTORS
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  // TEST
  {
    type: "input",
    name: "test",
    messgae: "What command should be ran to test the project?",
  },
  //   QUESTIONS
  {
    type: "input",
    name: "username",
    messgae: "What is youe github username?",
  },
  {
    type: "input",
    name: "email",
    messgae: "What is your github email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log("File written successfully");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
