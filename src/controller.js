import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import { library } from "./library.js";
import { viewFactory } from "./view.js";
import { modelFactory } from "./model.js";



const controller = function() {
    let addProject = document.getElementById("add-project");
    let addTodo = document.getElementById("add-to-do");
    let removeProject = document.getElementById("remove-project");
    let removeTodo = document.getElementById("remove-to-do");
  



    function addProjectNameEventListener(){
        let addProjectName = document.getElementById("submit-project-name");
        addProjectName.addEventListener("click", function(e){
            console.log("hello");
            let project = document.getElementById("project-name").value;
            viewFactory.createProject(project);
            console.log(project);
            viewFactory.hideAddProjectName();
            viewFactory.removeFormProjectName();
            modelFactory.createProject(project);
            console.log(library.projects);
            e.preventDefault();
           
          
        });
    }


    function addProjectEventListener(){

        addProject.addEventListener("click", function(e){
            viewFactory.createProjectName();
            addProjectNameEventListener();
            e.preventDefault();
            
        });
    }

    function removeProjectEventListener(){
        removeProject.addEventListener("click", function(e){
            viewFactory.removeProject();
            e.preventDefault();
        });
    }

   

    function addEventListenerToProjects(){
        let projectList = document.getElementById("project-list");
        for(let i = 0; i < projectList.children.length; i++){
            projectList.children[i].addEventListener("click", function(e){
                console.log("hello");
                console.log(e.target);
            });
        }
    }   


    function render(){
        console.log("alterado!");
        addEventListenerToProjects();
    }


    return {
       
        addProjectEventListener,
        addProjectNameEventListener,
        removeProjectEventListener,
        addEventListenerToProjects,
        render
        
        
    }

}();

export { controller };	