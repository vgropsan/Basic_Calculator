const numberButton=document.getElementsByName('data_number');
const dataOperation=document.getElementsByName('data_operation');
const dataEqual=document.getElementsByName('data_equal')[0];
const deleteButton=document.getElementsByName('data_delete')[0];
var result=document.getElementById('result');

numberButton.forEach(function(button) {
    button.addEventListener('click', function() {
        addNumber(button.innerText);
    })
})

dataOperation.forEach(function(button) {
    button.addEventListener('click', function() {
        addNumber(button.innerText);
    })
})

numberButton.forEach(function(button) {
    button.addEventListener('click', function() {
        addNumber(button.innerText);
    })
})