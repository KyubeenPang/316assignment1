let plusButton = document.getElementById('plusButton');
let counter = 4;
let questionary = [];


//There is hidden field that provide basic template for each question
//when the click on the plus button, the template will be added to the form
//for each item, I add unique id, so that delete button would only delete that item.
document.addEventListener("DOMContentLoaded", function() {
  plusButton.addEventListener('click', () => {
  
    const question = document.getElementById('question0');
    const newQuestion = question.cloneNode(true);
    newQuestion.id = `question${counter}`;
    newQuestion.style.display = 'block';
    
  
    
    const buttonSet = newQuestion.querySelector('.deleteButton');
    buttonSet.id = `deleteButton${counter}`; 
  
    counter++;
    
    const formElement = document.querySelector('#my-form');
    formElement.insertBefore(newQuestion, formElement.firstElementChild);
    
  });
});

//when the delete button is clicked, the template will be removed from the form
document.querySelectorAll('.deleteButton').forEach(button => {
  button.addEventListener('click', event => {
    const container = event.target.closest('.container2');
    if (container) {
      container.remove();
    }
  });
});

//when the submit button is clicked, the questionary will be stored in the array
//questionary array will be stored in local storage
document.querySelector('#my-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const containers = document.querySelectorAll('.container2');    
  questionary = [];
  
    
  containers.forEach(container => {
    if (container.style.display !== 'none') {

      const title = container.querySelector('input').value;
      const selectedOption = container.querySelector('select').value;
      
      
      questionary.push({
        title: title,
        selectedOption: selectedOption,
      });
    }
  });

  localStorage.setItem('questionary', JSON.stringify(questionary));
  alert('Submitted. Ckeck the log data.');
  console.log(questionary);
  
})


