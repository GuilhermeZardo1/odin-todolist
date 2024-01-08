import { Todo } from "./todo.js";

export class Project {
    constructor(title, list) {
        this.title = title;
        this.list = list;
    }

    // Add any additional properties or methods here
    addTodo() {
        this.list.push(todo);
    }

    removeTodo() {
        this.list.splice(index, 1);
    }

    
    // Example method to display the todo
    display() {
        console.log(`Todo: ${this.title} (Project: ${this.project})`);
    }
}

// Example usage
const todo1 = new Todo("Buy groceries", "Personal");
const todo2 = new Todo("Finish coding assignment", "Work");

todo1.display(); // Output: Todo: Buy groceries (Project: Personal)
todo2.display(); // Output: Todo: Finish coding assignment (Project: Work)