import './style.css';
/*import { Todo } from "./todo.js";
import { Project } from "./projects.js";*/
import { controller } from './controller.js';     
import { viewFactory } from './view.js';
import { modelFactory } from './model.js';
import { library } from './library.js';


document.addEventListener("DOMContentLoaded", function() {

    controller.addProjectEventListener();
    controller.removeProjectEventListener();
    controller.addTodoEventListener();
    

    function onChange() {
        controller.render();
        console.log("Mudou");
        
    }
    
    // Cria uma instância do MutationObserver
    const observer = new MutationObserver(mutations => {
        // Para cada mutação, chama a função onChange
        mutations.forEach(mutation => {
            onChange();
        });
    });
    
    // Opções de configuração para o observer (quais mudanças observar)
    const config = {
        childList: true, // observa adições ou remoções de elementos filhos
        attributes: true, // observa mudanças nos atributos
        subtree: true, // observa mudanças não apenas no nó alvo, mas também nos descendentes
        // ... você pode adicionar outras opções conforme necessário
    };
    
    // Seleciona o nó alvo (neste caso, o elemento body da página)
    const targetNode = document.body;
    
    // Inicia a observação do nó alvo com as configurações passadas
    observer.observe(targetNode, config);



    
    
    
    
   
});