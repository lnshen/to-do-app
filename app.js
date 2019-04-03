function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  //add task to list

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a primary content span for the text
    let titlespan = document.createElement('span');
    titlespan.className = 'mdl-list__item-primary-content';
    titlespan.textContent = title;

    //create a new li
    let newLi = document.createElement('li');
    newLi.className = 'mdl-list__item';

    //attach the primary content span to the new li
    newLi.appendChild(titlespan);

    //create a new input
    let checkbox = document.createElement('input');
    checkbox.className = 'mdl-checkbox__input';
    checkbox.id = 'list-checkbox-1';
    checkbox.type = 'checkbox';

    //create a new label for the input
    let checkboxlabel = document.createElement('label');
    checkboxlabel.className = 'mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect';
    checkboxlabel.setAttribute('for','list-checkbox-1');
    checkboxlabel.appendChild(checkbox);

    //create a secondary action span for the label and input
    let checkboxspan = document.createElement('span');
    checkboxspan.className = 'mdl-list__item-secondary-action';
    checkboxspan.appendChild(checkboxlabel);

    //add the secondary action span to the new li
    newLi.appendChild(checkboxspan);

    //create a new delete button
    let DeleteButton = document.createElement('button');
    DeleteButton.className = 'mdl-button mdl-js-button';
    let DeleteButtonText = document.createTextNode('Delete');
    DeleteButton.appendChild(DeleteButtonText);

    //create a secondary action span for the delete button
    let deletespan = document.createElement('span');
    deletespan.className = 'mdl-list__item-secondary-action';
    deletespan.appendChild(DeleteButton);

    //attach the delete button to the new li
    newLi.appendChild(deletespan);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value ='';

    //delete task from list
    DeleteButton.addEventListener('click', function(e) {
    e.currentTarget.parentNode.parentNode.remove();
    });

    });

  };

window.onload = function() {
  onReady();
};
