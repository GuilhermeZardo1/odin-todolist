import { Todo } from "./todo.js";
import { Project } from "./projects.js";

class Library {
    constructor() {
        this.projects = {}; // Inicializa um objeto vazio
        this.activeProject = null;
    }

    addProject(project) {
        // Supondo que 'project' tenha uma propriedade 'name' que é única
        this.projects[project.title] = project;
        console.log('linha 13 ' + project.title);
    }

    removeProject(projectName) {
        // Remove o projeto pelo nome
        delete this.projects[projectName];
    }

    setActiveProject(projectName) {
        // Define o projeto ativo pelo nome
        this.activeProject = this.projects[projectName];
        console.log('linha 24 ' + this.activeProject);
    }

    getActiveProject() {
        return this.activeProject;
    }

    printProjects() {
        console.log(this.projects);
    }
}

const library = new Library();

export { library };

