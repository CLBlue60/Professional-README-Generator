// Require necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateREADME.js");

// Array of questions to prompt the user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (input) => (input ? true : "Please enter a title!"),
  },
  {
    type: "input",
    name: "description",
    message: "What is your project's description?",
    validate: (input) => (input ? true : "Please enter a description!"),
  },
  {
    type: "confirm",
    name: "confirmTable",
    message: "Do you want a Table of Contents?",
    default: true,
  },
  {
    type: "input",
    name: "installation",
    message: "What are your installation instructions?",
    validate: (input) =>
      input ? true : "Please enter any info on how to install!",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your usage information?",
    validate: (input) => (input ? true : "Please enter any info for usage!"),
  },
  {
    type: "list",
    name: "license",
    message: "What License applies to your application?",
    choices: [
      "None",
      "Apache License, Version 2.0",
      "Common Development and Distribution License 1.0",
      "Eclipse Public License version 2.0",
      "GNU General Public License version 2",
      "GNU General Public License version 3",
      "GNU Lesser General Public License version 2.1",
      "GNU Lesser General Public License version 3",
      "The 2-Clause BSD License",
      "Mozilla Public License 2.0",
      "The 3-Clause BSD License",
      "The Unilicense",
    ],
  },
  {
    type: "input",
    name: "contribute",
    message: "What are your contribution guidelines?",
    validate: (input) =>
      input ? true : "Please enter any how to contribute info!",
  },
  {
    type: "input",
    name: "tests",
    message: "What are your test instructions?",
    validate: (input) => (input ? true : "Please enter any how to test info!"),
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub Username?",
    validate: (input) => (input ? true : "Please enter a username!"),
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (input) => (input ? true : "Please enter an email!"),
  },
];

// Function to write data to file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve({ ok: true, message: "File created!" });
    });
  });
}

// Function to initialize application
function init() {
  // Prompt the user with questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Generate markdown content based on user answers
      return generateMarkdown(answers);
    })
    .then((pageMarkdown) => {
      // Write markdown content to file
      writeToFile("example.md", pageMarkdown)
        .then(() => console.log("README.md created!"))
        .catch((error) => console.log(error));
    })
    .catch((error) => {
      console.log(error);
    });
}

// Call init function to start the application
init();
