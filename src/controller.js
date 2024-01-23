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
            let projectName = document.getElementById("project-name").value;
            viewFactory.createProject(projectName);
            console.log('linha 23' + projectName);
            viewFactory.hideAddProjectName();
            viewFactory.removeFormProjectName();
            modelFactory.createProject(projectName);
            if(Object.keys(library.projects).length === 1){
                let project = document.querySelector(".project");
                viewFactory.setActiveProject(project);
                library.setActiveProject(projectName);
                console.log(library.getActiveProject());
                
            }
            console.log(library.getActiveProject());
            console.log(library.projects);
            console.log(Object.keys(library.projects).length);
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
        console.log('linha 67 ' + library.projects);
           console.log('linha 68 ' + Object.keys(library.projects).length);
           console.log('linha 68 ' + library.getActiveProject());
        removeProject.addEventListener("click", function(e){
            var projetoAtivo = library.getActiveProject();
            console.log('linha 52 ' + projetoAtivo)
            var id = projetoAtivo;
            console.log('linha 56 ' + id);
            viewFactory.removeProject(id);
            modelFactory.removeProject(library.getActiveProject());
            if(Object.keys(library.projects).length > 0){
                library.setActiveProject(Object.keys(library.projects)[0]);
                let projectId = document.getElementById(Object.keys(library.projects)[0]);
                viewFactory.setActiveProject(projectId);
            }
          
            e.preventDefault();
        });
    }

    function addEventListenerToProjects(){
        let projects = document.querySelectorAll(".project");
        projects.forEach(project => {
            project.addEventListener("click", function(e){
                let project = e.target;
                e.preventDefault();
            });
        });
    }

   

      


    function render(){
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