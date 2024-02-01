import { controller } from './controller.js';   
import { modelFactory } from './model.js';
import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import { library } from "./library.js";


const viewFactory = function () {
    
    function createProject(title){
        let list = document.getElementById("project-list");
        let project = document.createElement("li");
        project.textContent = title;
        project.id = title;
        project.classList.add("project");
        list.appendChild(project);
    }

    function createToDo(title, description, dueDate, priority) {

        
        
        let list2 = document.getElementById("todo-list");
        let bigTodo = document.createElement("div");
        bigTodo.classList.add("big-todo");
        
        let btn = document.createElement("button");
        btn.classList.add("edit-to-do");
        btn.textContent = "edit";
        let btnremove = document.createElement("button");
        btnremove.classList.add("btn-remove");
        btnremove.textContent = "remove";
        
        let todo1 = document.createElement("li");
        let span1 = document.createElement("span");
        let p1 = document.createElement("p");
      
        todo1.classList.add("itens");
        span1.classList.add("subtitle"); // Alterado de id para class
        span1.textContent = "title:";
        p1.classList.add("title"); // Alterado de id para class
        p1.textContent = title;
        bigTodo.id = p1.textContent;
        span1.appendChild(p1);
        todo1.appendChild(span1);
        bigTodo.appendChild(todo1);

        let todo4 = document.createElement("li");
        let span4 = document.createElement("span");
        let p4 = document.createElement("p");
        todo4.classList.add("itens");
        span4.classList.add("subtitle"); // Alterado de id para class
        span4.textContent = "description:";
        p4.classList.add("description"); // Alterado de id para class
        p4.textContent = description;   
        span4.appendChild(p4);
        todo4.appendChild(span4);
        bigTodo.appendChild(todo4);
        
    
        let todo2 = document.createElement("li");
        let span2 = document.createElement("span");
        let p2 = document.createElement("p");
        todo2.classList.add("itens");
        span2.classList.add("subtitle"); // Alterado de id para class
        span2.textContent = "due date:";
        p2.classList.add("due-date"); // Alterado de id para class
        p2.textContent = dueDate;
        span2.appendChild(p2);
        todo2.appendChild(span2);
        bigTodo.appendChild(todo2);
    
        let todo3 = document.createElement("li");
        let span3 = document.createElement("span");
        let p3 = document.createElement("p");
        todo3.classList.add("itens");
        span3.classList.add("subtitle"); // Alterado de id para class
        span3.textContent = "priority:";
        p3.classList.add("priority"); // Alterado de id para class
        p3.textContent = priority;
        span3.appendChild(p3);
        todo3.appendChild(span3);
        bigTodo.appendChild(todo3);
    
        
    
        bigTodo.appendChild(btn);
        bigTodo.appendChild(btnremove);
        btn.addEventListener("click", function(e){
            viewFactory.editToDo(btn.parentNode);
    
            controller.addSubmitEventListener();
            e.preventDefault();
        });
    
        controller.removeToDoEventListener(btnremove);
        
    
        list2.appendChild(bigTodo);    
    }

    function editToDo(parentNode){
        let mainContent = document.querySelector(".main-content");
        let content = document.getElementById("content");
      
        let existingForm = content.querySelector(".edit-form");
    
        if (existingForm) {
        content.removeChild(existingForm);
        }
        
        mainContent.classList.add("hidden");
        content.classList.add("content-flex");
      
        let form = document.createElement("form");
        form.classList.add("edit-form");
        let title = document.createElement("input");
        title.id = "title";
        title.type = "text";
        title.placeholder = "title";
        let description = document.createElement("input");
        description.id = "description";
        description.type = "text";
        description.placeholder = "description";
        let dueDate = document.createElement("input");
        dueDate.id = "dueDate";
        dueDate.type = "text";
        dueDate.placeholder = "due date";
        let priority = document.createElement("input");
        priority.id = "priority";
        priority.type = "text";
        priority.placeholder = "priority";
        let btn = document.createElement("button");
        btn.id = "submit";
        btn.textContent = "submit";
        form.appendChild(title);
        form.appendChild(description);
        form.appendChild(dueDate);
        form.appendChild(priority);
        form.appendChild(btn);
        content.appendChild(form);

        btn.addEventListener("click", function(e){

            const todoId = parentNode.querySelector(".title").textContent;
            parentNode.querySelector(".title").textContent = title.value;
            parentNode.querySelector(".description").textContent = description.value;
            parentNode.querySelector(".due-date").textContent = dueDate.value;
            parentNode.querySelector(".priority").textContent = priority.value;
            viewFactory.removeFormToDo();   
            document.querySelector(".main-content").classList.remove("hidden");
            document.getElementById("content").classList.remove("content-flex");
            const active = library.getActiveProject();
            console.log(active);
            console.log(todoId);
            const todo = active.todos[todoId];
            console.log(todo);
            modelFactory.removeToDo(todoId);
            modelFactory.editToDo(active, todo, title.value, description.value, dueDate.value, priority.value);
            console.log(library.getActiveProject().todos);
        
    });
}

    function addToDo(){
        let mainContent = document.querySelector(".main-content");
        let content = document.getElementById("content");

        let existingForm = content.querySelector(".edit-form");
  
        if (existingForm) {
        content.removeChild(existingForm);
        }
     
        mainContent.classList.add("hidden");
        let form = document.createElement("form");
        form.classList.add("edit-form");
        let title = document.createElement("input");
        title.id = "title";
        title.type = "text";
        title.placeholder = "title";
        let description = document.createElement("input");
        description.id = "description";
        description.type = "text";
        description.placeholder = "description";
        let dueDate = document.createElement("input");
        dueDate.id = "dueDate";
        dueDate.type = "text";
        dueDate.placeholder = "due date";
        let priority = document.createElement("input");
        priority.id = "priority";
        priority.type = "text";
        priority.placeholder = "priority";
        let btn = document.createElement("button");
        btn.id = "add-to-do-btn";
        btn.textContent = "add";
        form.appendChild(title);
        form.appendChild(description);
        form.appendChild(dueDate);
        form.appendChild(priority);
        form.appendChild(btn);
        content.appendChild(form);
        content.classList.add("content-flex");
        

    }
    
    function createProjectName(){
        let mainContent = document.querySelector(".main-content");
        let content = document.getElementById("content");
        mainContent.classList.add("hidden");
        let form = document.createElement("form");
        form.classList.add("project-name-form");
        let title = document.createElement("input");
        title.id = "project-name";
        title.type = "text";
        title.placeholder = "title";
        let submitBtn = document.createElement("button");
        submitBtn.id = "submit-project-name";
        submitBtn.textContent = "submit";
        let cancelBtn = document.createElement("button");
        cancelBtn.id = "cancel-project-name";
        cancelBtn.textContent = "cancel";

        form.appendChild(title);
        form.appendChild(submitBtn);
        form.appendChild(cancelBtn);
        content.appendChild(form);
        content.classList.add("content-flex");

        

    }

    function hideAddProjectName(){
        let form = document.querySelector(".project-name-form");
        form.classList.add("hidden");
        let mainContent = document.querySelector(".main-content");
        mainContent.classList.remove("hidden");
        document.getElementById("content").classList.remove("content-flex");
        
    }

    

    

    function removeFormProjectName(){
        let form = document.querySelector(".project-name-form");
        form.remove();
        
    
    }

    function removeFormToDo(){
        let form = document.querySelector(".edit-form");
        form.remove();
        
    
    }

    function removeProject(elemento){
        let elementToRemove = document.getElementById(elemento);
        
        if (elementToRemove && elementToRemove.parentNode) {
            elementToRemove.parentNode.removeChild(elementToRemove);
        }
    }

    function setActiveProject(elemento){
        elemento.classList.add("active");
    
    }
    function removeActiveProject(elemento){
        elemento.classList.remove("active");
    

        
    }

    function removeToDo(elemento){
        let elementToRemove = elemento;
        if (elementToRemove && elementToRemove.parentNode) {
            elementToRemove.parentNode.removeChild(elementToRemove);
        }

        
    }

    function removeAllNodes(parent){

        while (parent.firstChild) {
            parent.removeChild(parentNode.firstChild);
        }

    }

    

    return {
        createProject,
        createToDo,
        editToDo,   
        createProjectName,
        hideAddProjectName,
        removeFormProjectName,
        setActiveProject,
        removeActiveProject,
        addToDo,
        removeFormToDo,
        removeProject,
        removeToDo,
        removeAllNodes
        
    }
}();

export { viewFactory };