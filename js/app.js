/**
 * Todolist
 */
var app = {
  init: function() {
    app.creatForm();
  },

  // formulaire
  creatForm: function(){
    const container = document.getElementById('todo');

    const form = document.createElement('form');
    form.className = 'form-addTask';

    const input = document.createElement('input');
    input.className = 'input-addTask';
    input.placeholder = 'Ajouter une tâche';
    input.type = 'text';

    form.appendChild(input);
    container.appendChild(form);
  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);