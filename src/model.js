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



return{
    createProject,
    removeProject

}
}();

export { modelFactory };

