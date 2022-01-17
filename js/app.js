/**
 * Todolist
 */
var app = {
  init: function() {
    app.container = document.getElementById('todo');
    app.creatForm();
    app.createCounter();
  },

  // formulaire
  creatForm: function(){
    const form = document.createElement('form');
    form.className = 'form-addTask';

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
  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);