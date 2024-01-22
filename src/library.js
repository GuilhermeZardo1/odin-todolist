import { Todo } from "./todo.js";
import { Project } from "./projects.js";

class Library {
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);
    }
}

const library = new Library();

export { library };

