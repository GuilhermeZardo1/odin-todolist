import { Todo } from "./todo.js";

export class Project {
    constructor(title) {
        this.title = title;
        this.todos = {}; // Inicializa um objeto vazio
    }

    addTodo(todo) {
        // Supondo que 'todo' tenha uma propriedade 'id' que é única
        this.todos[todo.title] = todo;
    }

    removeTodo(todoId) {
        delete this.todos[todoId]; // Corrigido para usar todoId
    }

    getTitle() {
        return this.title;
    }

    // Método para exibir todos os todos
    display() {
       
        for (const id in this.todos) {
            console.log(`Todo ID: ${id}, Content: ${this.todos[id].content}`); // Supondo que cada todo tenha uma propriedade 'content'
        }
    }
}