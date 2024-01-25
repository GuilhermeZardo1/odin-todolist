import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import { library } from "./library.js";

const modelFactory = function(){

    function createProject(title){
        let project = new Project(title, {});
        library.addProject(project);
        
    }

    function removeProject(project){
        library.removeProject(project.title);
    }

    function editToDo(title, project, description, dueDate, priority, todo){
        todo.title = title;
        todo.project = project;
        todo.description = description;
        todo.dueDate = dueDate;
        todo.priority = priority;


        return todo;
    }

    function addToDo(title, project, description, dueDate, priority){
        let todo = new Todo(title, project, description, dueDate, priority);
        library.activeProject.toDos.push(todo);
        return todo;
    }



return{
    createProject,
    removeProject,
    addToDo,
    editToDo

}
}();

export { modelFactory };

