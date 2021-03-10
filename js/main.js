//Seletores
const todoInput = document.querySelector(".mtd-input");
const todoButton = document.querySelector(".mtd-btn");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);



//Funções
function addTodo(event){
    // Impede a página de Atualizar
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    // Cria o LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    todoInput.value = "";
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); 

    // Cria o Check
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check">';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Cria o Delete
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="far fa-trash-alt">';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // Adciona a lista
    todoList.appendChild(todoDiv);
}

function deleteCheck(event){
    const item = event.target;

    // Se a opção for deletar
    if(item.classList[0] === 'delete-btn'){
        const parent = item.parentElement;
        console.log("Deletou");
        //animação
        parent.classList.add('fade');
        //todoList.addEventListener('transitionend', function(){
            parent.remove();
        //}
        );
        
    }

    // Se a opção for marcar
    if(item.classList[0] === "complete-btn"){
        const parent = item.parentElement;
        parent.classList.toggle('completed');
    }
}
