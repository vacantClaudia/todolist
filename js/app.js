/**
 * Todolist
 */
var app = {
  init: function() {
    app.container = document.getElementById('todo');
    app.creatForm();
    app.createCounter();
    app.createTaskList();
  },

  // formulaire
  creatForm: function(){
    const form = document.createElement('form');
    form.className = 'form-addTask';
    form.addEventListener('submit', app.handleFormSubmit);

    const input = document.createElement('input');
    input.className = 'input-addTask';
    input.placeholder = 'Ajouter une tâche';
    input.type = 'text';

    form.appendChild(input);
    app.container.appendChild(form);
  },

  // Compteur de tache
  createCounter: function(){
    app.counter = document.createElement('div');
    app.setCoutnerValue();
    app.counter.className = 'counter';
    app.container.appendChild(app.counter);
  },

  setCoutnerValue: function(){
    app.counter.textContent = '2 tâches en cours';
  },

  createTaskList: function(){
    const ulElement = document.createElement('ul');
    for (let i = 0; i < 3 ; i++){
      const liElement = document.createElement('li');
      liElement.className = 'task-container';

      if (i === 0){
        liElement.classList.add('task-container--done');
      }

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'checkbox';
      const idTask = 'checkbox' + i;
      checkbox.id = idTask;

      const label = document.createElement('label');
      label.className = 'label';
      label.textContent = 'Revoir le JavaScript';
      label.setAttribute('for', idTask);

      liElement.appendChild(checkbox);
      liElement.appendChild(label);

      ulElement.appendChild(liElement);
    }

    app.container.appendChild(ulElement);
  },

  // Ajouter une tâche
  handleFormSubmit: function(event){
    console.log('nouvelle tâche');
    // On empeche la page de se recharger
    event.preventDefault();
  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);