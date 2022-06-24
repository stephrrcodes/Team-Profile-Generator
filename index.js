// Variables
const inquirer = require("inquirer");
const fs = require("fs");

const templateHtml = require("./src/templateHtml")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern"); 
const Employee = require("./lib/Employee")