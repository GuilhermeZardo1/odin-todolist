import './style.css';
/*import { Todo } from "./todo.js";
import { Project } from "./projects.js";*/
import { controller } from './controller.js';     

document.addEventListener("DOMContentLoaded", function() {
    controller.addProjectEventListener();
    controller.addToDoEventListener();
    
   
});