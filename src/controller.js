import { Todo } from "./todo.js";
import { Project } from "./projects.js";
import { library } from "./library.js";
import { viewFactory } from "./view.js";
import { modelFactory } from "./model.js";



const controller = function() {
    let addProject = document.getElementById("add-project");
    let addTodo = document.getElementById("add-to-do");
    let removeProject = document.getElementById("remove-project");
    
  



    function addProjectNameEventListener(){
        let addProjectName = document.getElementById("submit-project-name");
        addProjectName.addEventListener("click", function(e){
            let projectName = document.getElementById("project-name").value;
            viewFactory.createProject(projectName);
            
            viewFactory.removeFormProjectName();
            document.querySelector(".main-content").classList.remove("hidden");
            document.getElementById("content").classList.remove("content-flex");
            modelFactory.createProject(projectName);
            addEventListenerToProjects();
            if(Object.keys(library.projects).length === 1){
                let project = document.querySelector(".project");
                viewFactory.setActiveProject(project);
                library.setActiveProject(projectName);
                
                
            }
         
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
            var projetoAtivo = library.getActiveProject();
            
           
            var id = projetoAtivo.title;
            
        
            viewFactory.removeProject(id);
            modelFactory.removeProject(library.getActiveProject());
            if(Object.keys(library.projects).length > 0){
                library.setActiveProject(Object.keys(library.projects)[0]);
                let projectId = document.getElementById(Object.keys(library.projects)[0]);
                viewFactory.setActiveProject(projectId);
            }
            console.log(library.projects);
            e.preventDefault();
        });
    }


    function addEventListenerToProjects(){
        let projects = document.querySelectorAll(".project");
        projects.forEach(project => {
            project.addEventListener("click", function(e){
                for(let i = 0; i < projects.length; i++){   
                    if(projects[i].classList.contains("active")){
                        viewFactory.removeActiveProject(projects[i]);
                    }
                    
                    
                }
                e.target.classList.add("active");
                library.setActiveProject(e.target.id);

                
            });
        });
    }

    function removeToDoEventListener(btn){
        let removetodo = btn;
        removetodo.addEventListener("click", function(e){
            console.log('linha 97');
            viewFactory.removeToDo(btn.parentNode);
        });
    }

  

        


    function addTodoEventListener(){
        addTodo.addEventListener("click", function(e){
            if(library.getActiveProject() === null){
                alert("You must create a project first!");
                return;
            }
            viewFactory.addToDo();  
            addAddToDoBtnEventListener();
            
            
            e.preventDefault();
            
        });
    }

    function addEditEventListener(){
        const btn = document.querySelector(".edit-to-do");
        btn.addEventListener("click", function(e){
            viewFactory.editToDo();
    
            addSubmitEventListener();
            e.preventDefault();
        });
    }
    
   

    function addSubmitEventListener(){
        let submitBtn = document.getElementById("submit");
        submitBtn.addEventListener("click", function(e){
            
            viewFactory.removeFormToDo();
            document.querySelector(".main-content").classList.remove("hidden");
            document.getElementById("content").classList.remove("content-flex");
            
            
            e.preventDefault();
        });
    }

    function addAddToDoBtnEventListener(){
        const submitBtn = document.getElementById("add-to-do-btn");
        

        submitBtn.addEventListener("click", function(e){
            
            
            viewFactory.createToDo();
            viewFactory.removeFormToDo();   
            document.querySelector(".main-content").classList.remove("hidden");
            document.getElementById("content").classList.remove("content-flex");
            addEditEventListener();
            const bigToDo = submitBtn.parentNode;
            console.log(bigTo)
            const title = bigToDo.querySelector(".title");
            const project = library.getActiveProject();
            const description = bigToDo.querySelector(".description");
            const duedate = bigToDo.querySelector(".due-date");
            const priority = bigToDo.querySelector(".priority");
            modelFactory.addToDo(project, title.textContent, description.textContent, duedate.textContent, priority.textContent);
            console.log(project.todos);
            console.log('linha 161');
            
            e.preventDefault();
        });
    }

    function showToDos(){
        let project = library.getActiveProject();
        let toDos = project.toDos;
        for(let i = 0; i < toDos.length; i++){
            viewFactory.createToDo();
        }
    }

   

      


    function render(){


       
       
            
      
      
    }


    return {
       
        addProjectEventListener,
        addProjectNameEventListener,
        removeProjectEventListener,
        addEventListenerToProjects,
        addTodoEventListener,
        addEditEventListener,
        addSubmitEventListener,
        showToDos,
        addAddToDoBtnEventListener,
        removeToDoEventListener,
        render
        
        
    }

}();

export { controller };	