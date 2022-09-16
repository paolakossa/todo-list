const todoInput = document.querySelector('.todo__input'); 
const todoAdicionar = document.querySelector('.todo__adicionar');

const adicionarTarefa = () => {

	const itemTarefa = document.createElement('div');
	itemTarefa.classList.add('todo__tarefa--item');

	const itemTarefaTexto = document.createElement('p'); 
	itemTarefaTexto.innerText = todoInput.value; 
}