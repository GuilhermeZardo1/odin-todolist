import { Project } from "./projects.js";    

export class Todo {
    constructor(title, project, description, dueDate, priority) {
        this.title = title;
        this.project = project;
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

