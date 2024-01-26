import { Project } from "./projects.js";    

export class Todo {
    constructor(project, title, description, dueDate, priority) {
        this.project = project;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    // Add any additional properties or methods here

    // Example method to display the todo
    display() {
        console.log(`Todo: ${this.title} (Project: ${this.project}) (Description: ${this.description}) (Due Date: ${this.dueDate}) (Priority: ${this.priority})`);
    }
}

