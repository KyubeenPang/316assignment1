const currentDate = new Date();
let tempDate = currentDate;


//move to the previous day
function moveToPreviousDay() {
    tempDate.setDate(tempDate.getDate() - 1);
    formattedDate();
}

//if tempDate is less than today's date, the date will be changed and this function formats the date
function moveToNextDay() {
    let today = new Date();
    if(tempDate.getDate() < today.getDate()) {
      tempDate.setDate(tempDate.getDate() + 1);
      formattedDate();
    }   
}

let year; 
let month; 
let day; 

//when the date button is clicked, the date will be changed and this function formats the date
function formattedDate() {
  year = tempDate.getFullYear();
  month = tempDate.getMonth() + 1;
  day = tempDate.getDate();

  let format = month + '/' + day + '/' + year;
  document.querySelector('.date-specify').textContent = format;  
}

//add event listener to the arrow button
formattedDate();
document.querySelector('.date-button1').addEventListener('click', moveToPreviousDay);
document.querySelector('.date-button2').addEventListener('click', moveToNextDay);

// ----------------------------------------------------------------

//import the questionary from local storage
let worksheet = JSON.parse(localStorage.getItem('questionary'));
worksheet = worksheet.reverse();

const formElement = document.querySelector('#my-form');

//three hidden fields for each question provide template for each question.
//if the type of the question is Number, Boolean, or Text, the same type template will be added to the form
//when the hidden field added to the form, the display will be changed to block
worksheet.forEach(item => {

    let template, work;

    if (item.selectedOption === 'Number') {
        template = document.getElementById('inputNum');
    } else if (item.selectedOption === 'Boolean') {
        template = document.getElementById('inputBool');
    } else if (item.selectedOption === 'Text') {
        template = document.getElementById('inputText');
    }

    work = template.cloneNode(true);
    work.style.display = 'block';

    
    work.querySelector('.form-label').textContent = item.title;

    formElement.insertBefore(work, formElement.firstElementChild);
  

    
});



