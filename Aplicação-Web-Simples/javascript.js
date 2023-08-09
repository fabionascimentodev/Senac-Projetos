// Array para armazenar as tarefas
let tarefas = [];

// Selecionar elementos do DOM
const tarefa = document.getElementById('tarefa');
const adicionarBtn = document.getElementById('adicionarBtn');
const listaTarefas = document.getElementById('listaTarefas');

// Função para adicionar uma nova tarefa
const adicionarTarefa = () => {
  const novaTarefa = tarefa.value.trim();

  if (novaTarefa !== '') {
    tarefas.push({ descricao: novaTarefa, concluida: false });
    atualizarListaTarefas();
    tarefa.value = '';
  }
};

// Função para remover uma tarefa
const removerTarefa = (index) => {
  tarefas.splice(index, 1);
  atualizarListaTarefas();
};

// Função para marcar ou desmarcar uma tarefa como concluída
const marcarConcluida = (index) => {
  tarefas[index].concluida = !tarefas[index].concluida;
  atualizarListaTarefas();
};

// Função para atualizar a lista de tarefas na página
const atualizarListaTarefas = () => {
  listaTarefas.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${tarefa.concluida ? 'checked' : ''}>
      <span>${tarefa.descricao}</span>
      <button>Remover</button>
    `;

    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => marcarConcluida(index));

    const btnRemover = li.querySelector('button');
    btnRemover.addEventListener('click', () => removerTarefa(index));

    listaTarefas.appendChild(li);
  });
};

// Event listeners
adicionarBtn.addEventListener('click', adicionarTarefa);
tarefa.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    adicionarTarefa();
  }
});

// Atualizar a lista inicialmente
atualizarListaTarefas();
