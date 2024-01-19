const viewFactory = function () {
    
    function createProject(){
        let list = document.getElementById("project-list");
        let project = document.createElement("li");
        project.textContent = "test";
        project.classList.add("project");
        list.appendChild(project); 
    }

    function createToDo(){
        let list2 = document.getElementById("todo-list");
        let todo = document.createElement("li");
       todo.textContent = "test";
       todo.classList.add("todo");
        list2.appendChild(todo); 
    }

    return {
        createProject,
        createToDo
    }
}();

export { viewFactory };