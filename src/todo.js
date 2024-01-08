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

// Example usage
const todo1 = new Todo("Buy groceries", "Personal", "Buy milk, eggs, and bread", "2021-05-01", "High");
const todo2 = new Todo("Finish coding assignment", "Work", "Finish coding assignment", "2021-05-01", "High");

todo1.display(); // Output: Todo: Buy groceries (Project: Personal)
todo2.display(); // Output: Todo: Finish coding assignment (Project: Work)

