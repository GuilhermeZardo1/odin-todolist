import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import { library } from "./library.js";
import { viewFactory } from "./view.js";



const controller = function() {
    let addProject = document.getElementById("add-project");
    let addTodo = document.getElementById("add-to-do");
    let removeProject = document.getElementById("remove-project");
    let removeTodo = document.getElementById("remove-to-do");
    
   
    function addProjectEventListener(){

        addProject.addEventListener("click", function(){
            viewFactory.createProject();
            render();
        });
    }

  

    function addEventListenersToProjects(){
        
        let projectList = document.querySelectorAll(".project");
        

        for(let i = 0; i < projectList.length; i++){
            projectList[i].addEventListener("click", function(){
                console.log("clicked");
                for(let i = 0; i < projectList.length; i++){
                    projectList[i].classList.remove("active");
                }
                projectList[i].classList.add("active");
                
            });
        }

    }

    function removeProjectEventListener(){

        let projectlist = document.getElementById("project-list");
        removeProject.addEventListener("click", function(){
            let projects = document.querySelectorAll(".project");
            for(let i = 0; i < projects.length; i++){
                if(projects[i].classList.contains("active")){
                    projects[i].remove();
                      
                }
            }
        });

        
    }

///////////////////// Project and To-Dos separation ////////////////////////////////////////////////



    function addEventListenersToToDos(){
        
        let todolist = document.querySelectorAll(".big-todo");

        for(let i = 0; i < todolist.length; i++){
            todolist[i].addEventListener("click", function(){
                console.log("clicked");
                for(let i = 0; i < todolist.length; i++){
                    todolist[i].classList.remove("active");
                }
                todolist[i].classList.add("active");
                
            });
        }
        
        

    } 
    

    function addToDoEventListener(){

        addTodo.addEventListener("click", function(){
            viewFactory.createToDo();
            editToDo();
            render();
    
        });
    }

    function removeToDoEventListener(){

        
        removeTodo.addEventListener("click", function(){
            let todos = document.querySelectorAll(".big-todo");
            for(let i = 0; i < todos.length; i++){
                if(todos[i].classList.contains("active")){
                    todos[i].remove();
                      
                }
            }
        });

        
    }

    function editToDo(){
        let editToDo = document.querySelectorAll(".edit-to-do");
        for(let i = 0; i < editToDo.length; i++){
            editToDo[i].addEventListener("click",  function(){
                console.log("edit to do");  
                viewFactory.editToDo();
        });
    }
}

    function showContent(){
    let mainContent = document.querySelector(".main-content");
    let form = document.querySelector(".edit-form");
    let content = document.getElementById("content");
    mainContent.classList.remove("hidden");
    form.classList.add("hidden");
    content.classList.remove("content-flex");

    }

    function submitEdit(){
        let submit = document.getElementById("submit");
        submit.addEventListener("click",  function(){
                showContent();
        });

    }

    function render() {

        addEventListenersToProjects();
        addEventListenersToToDos();
        removeProjectEventListener();
        removeToDoEventListener();
        
        
       




    }
   
    return {
        addProjectEventListener,
        addToDoEventListener,
        removeProjectEventListener,
        editToDo,
        submitEdit,
        render
        
        
    }

}();





export { controller };	