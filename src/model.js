import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import { library } from "./library.js";


const createToDo = function(project, title, description, dueDate, priority){
    const todo = new Todo(
        document.getElementById("title").value,
        document.getElementById("project").value,
        document.getElementById("description").value,
        document.getElementById("dueDate").value,
        document.getElementById("priority").value,
    );
    project.list.push(todo);
    console.log(project.list);
    return todo;
}

const deleteToDo = function(project, index){
    project.list.splice(index, 1);
}


const createProject = function(title){
    const project = new Project(
        document.getElementById("projectTitle").value,
        [],
    );
    library.projects.push(project);
    return project;
}

const deleteProject = function(index){
   library.splice(index, 1);
}

const editToDo = function(project, index){

    project[index].title = document.getElementById("title").value;
    project[index].project = document.getElementById("project").value;
    project[index].description = document.getElementById("description").value;
    project[index].dueDate = document.getElementById("dueDate").value;
    project[index].priority = document.getElementById("priority").value;

}

