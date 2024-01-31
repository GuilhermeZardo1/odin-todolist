import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import { library } from "./library.js";
import { viewFactory } from "./view.js";

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

    function addToDo(project, title, description, dueDate, priority){
        let todo = new Todo(project, title, description, dueDate, priority);
    
        if (library.activeProject instanceof Project) {
            library.activeProject.addTodo(todo);
            return todo;
        } else {
            console.error("No active project selected");
            return null;
        }
    }

    function removeToDo(todo){
        const active = library.getActiveProject();
        active.removeTodo(todo);
    }

    function showToDos(project){

        for(let i = 0; i < project.todos.length; i++){
            viewFactory.createToDo(project.todos[i].title, project.todos[i].description, project.todos[i].dueDate, project.todos[i].priority);
        }

    }


return{
    createProject,
    removeProject,
    addToDo,
    editToDo,
    removeToDo,
    showToDos

}
}();

export { modelFactory };

