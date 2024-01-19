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

