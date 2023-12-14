let input = document.querySelector('#input');
let listOfItem = document.querySelector('.list-container');
let addIcon = document.querySelector('.bx-add-to-queue');

addIcon.addEventListener('click', ()=>{
    if(input.value != ''){
        //Creation of new elements
        let newItem = document.createElement('div');
        let newCheckBoxContainer = document.createElement('div');
        let newCheckBox = document.createElement('div');
        let newLabel = document.createElement('label');
        let newButton = document.createElement('div');

        //Addition of class to the new elements
        newItem.classList.add('item-wrapper');
        newCheckBoxContainer.classList.add('checkbox-container');
        newCheckBox.classList.add('checkbox');
        newButton.classList.add('button');

        //Appending of the new elements
        listOfItem.appendChild(newItem);
        newItem.appendChild(newCheckBoxContainer);
        newItem.appendChild(newButton);
        newCheckBoxContainer.appendChild(newCheckBox);
        newCheckBoxContainer.appendChild(newLabel);
        newCheckBox.innerHTML = newCheckBox.innerHTML + "<i class='bx bx-check' style='color:#ffffff'  ></i>"
        newButton.innerHTML = newButton.innerHTML + "<i class='bx bx-x' style='color:#ffffff'  ></i>";
        newLabel.innerText = input.value;
        input.value = '';

        let xButton = document.querySelectorAll('.button');
        xButton.forEach(button =>{
            button.addEventListener('click', ()=>{
                let delElement = button.parentElement;
                listOfItem.removeChild(delElement);
            })
        })
    }
})
/*
xButton.forEach(button =>{
    button.addEventListener('click', ()=>{
        let delElement = button.parentElement;
        listOfItem.removeChild(delElement);
    })
})*/