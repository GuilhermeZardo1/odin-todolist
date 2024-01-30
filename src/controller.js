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

    function addEditEventListener(bigtodo){
        const btn = document.querySelector(".edit-to-do");
        const title = document.querySelector(".title").value;
        console.log(bigtodo);
        
        btn.addEventListener("click", function(e){
            
            
            viewFactory.editToDo(bigtodo);
    
            addSubmitEventListener(bigtodo);
            e.preventDefault();
        });
    }
    
   

    function addSubmitEventListener(bigtodo){
        let submitBtn = document.getElementById("submit");
        
        
        submitBtn.addEventListener("click", function(e){

            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;
            
        
            
           
            viewFactory.createToDo(title, description, dueDate, priority);
            viewFactory.removeFormToDo();

            viewFactory.removeToDo(bigtodo);

            
            
            document.querySelector(".main-content").classList.remove("hidden");
            document.getElementById("content").classList.remove("content-flex");
            
            
            e.preventDefault();
        });
    }

    function addAddToDoBtnEventListener(){
        const submitBtn = document.getElementById("add-to-do-btn");
        

        submitBtn.addEventListener("click", function(e){
        
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;
            viewFactory.createToDo(title, description, dueDate, priority);
            viewFactory.removeFormToDo();   
            document.querySelector(".main-content").classList.remove("hidden");
            document.getElementById("content").classList.remove("content-flex");
            const bigtodo = document.getElementById(title);
            addEditEventListener(bigtodo);
            const bigToDo = submitBtn.parentNode;
            
            
            
            
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