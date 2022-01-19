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
    const nbTaskNotDone = document.querySelectorAll('ul li.task-container:not(.task-container--done)').length;
    if (nbTaskNotDone === 0){
      app.counter.textContent = 'Aucune tâche en cours';
    }else{
      app.counter.textContent = nbTaskNotDone + ' tâche(s) en cours';
    }
    
  },

  createTaskList: function(){
    app.ulElement = document.createElement('ul');
    app.container.appendChild(app.ulElement);
  },

  // Gerer la soumission du formulaire
  handleFormSubmit: function(event){
    // console.log('nouvelle tâche');
    // On empeche la page de se recharger
    event.preventDefault();

    const inputElement = event.currentTarget.querySelector('input');
    app.addTask(inputElement.value);

    // On vide l'input
    inputElement.value = '';
  },

  // Ajouter une tâche
  addTask: function(taskLabel){
    const liElement = document.createElement('li');
    liElement.className = 'task-container';
    

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'checkbox';
    // Evenement change
    checkbox.addEventListener('change', app.handleCheckboxChange);

    // Le nombre de tâches pour l'id de la tâche
    const nbTasks = document.querySelectorAll('ul li.task-container').length;
    const idTask =`checkbox-${nbTasks + 1}`;
    checkbox.id = idTask;

    const label = document.createElement('label');
    label.className = 'label';
    // TODO utiliser le contenu de l'input
    label.textContent = taskLabel;
    label.setAttribute('for', idTask);

    liElement.appendChild(checkbox);
    liElement.appendChild(label);

    app.ulElement.appendChild(liElement);

    // On met à jour le compteur
    app.setCoutnerValue();
  },

  handleCheckboxChange: function(event) {
    // console.log('évenement change: ', event.currentTarget.checked);
    const liElement = event.currentTarget.closest('.task-container');
    if (event.currentTarget.checked) {
      // La case vient d'être cochée, on ajoute la classe
      liElement.classList.add('task-container--done');
    }else{
      // On enlève la classe
      liElement.classList.remove('task-container--done');
    }

    //On met à jour le compteur
    app.setCoutnerValue();

  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);