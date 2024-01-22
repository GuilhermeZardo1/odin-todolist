import { controller } from './controller.js';   

const viewFactory = function () {
    
    function createProject(title){
        let list = document.getElementById("project-list");
        let project = document.createElement("li");
        project.textContent = title;
        project.classList.add("project");
        list.appendChild(project);
        console.log(list.innerHTML);

    }

    function createToDo(){

        let list2 = document.getElementById("todo-list");
        let bigTodo = document.createElement("div");
        bigTodo.classList.add("big-todo");
        let btn = document.createElement("button");
        btn.classList.add("edit-to-do");
        btn.textContent = "edit";
        
        let todo1 = document.createElement("li");
        let span1 = document.createElement("span");
        let p1 = document.createElement("p");
      
        todo1.classList.add("itens");
        span1.id = "subtitle";
        span1.textContent = "description:";
        p1.id = "description";
        p1.textContent = "description";
        span1.appendChild(p1);
        todo1.appendChild(span1);
        bigTodo.appendChild(todo1);
        

        let todo2 = document.createElement("li");
        let span2 = document.createElement("span");
        let p2 = document.createElement("p");
        todo2.classList.add("itens");
        span2.id = "subtitle";
        span2.textContent = "due date:";
        p2.id = "due-date";
        p2.textContent = "due date";
        span2.appendChild(p2);
        todo2.appendChild(span2);
        bigTodo.appendChild(todo2);

        let todo3 = document.createElement("li");
        let span3 = document.createElement("span");
        let p3 = document.createElement("p");
        todo3.classList.add("itens");
        span3.id = "subtitle";
        span3.textContent = "priority:";
        p3.id = "priority";
        p3.textContent = "priority";
        span3.appendChild(p3);
        todo3.appendChild(span3);
        bigTodo.appendChild(todo3);

        let todo4 = document.createElement("li");
        let span4 = document.createElement("span");
        let p4 = document.createElement("p");
        todo4.classList.add("itens");
        span4.id = "subtitle";
        span4.textContent = "notes:";
        p4.id = "notes";
        p4.textContent = "notes";   
        span4.appendChild(p4);
        todo4.appendChild(span4);
        bigTodo.appendChild(todo4);

        bigTodo.appendChild(btn);

        list2.appendChild(bigTodo);


        
       
    }

    function editToDo(){
        let mainContent = document.querySelector(".main-content");
        let content = document.getElementById("content");
        mainContent.classList.add("hidden");
        let form = document.createElement("form");
        form.classList.add("edit-form");
        let title = document.createElement("input");
        title.id = "title";
        title.type = "text";
        title.placeholder = "title";
        let project = document.createElement("input");
        project.id = "project";
        project.type = "text";
        project.placeholder = "project";
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
        form.appendChild(project);
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
        
    }

    function removeFormProjectName(){
        let form = document.querySelector(".project-name-form");
        form.remove();
        
    
    }

    return {
        createProject,
        createToDo,
        editToDo,   
        createProjectName,
        hideAddProjectName,
        removeFormProjectName,
    }
}();

export { viewFactory };