console.log('script running!');

function collectInfo(event) {
    event.preventDefault();
    //Defining variables
    let firstName = document.querySelector('#first-name').value;
    let lastName = document.querySelector('#last-name').value;
    let idNum = document.querySelector('#ID-number').value;
    let jobTitle = document.querySelector('#job-title').value;
    let annualSalary = document.querySelector('#annual-salary').value;

    //Putting variables into an array
    let arrayOfInfo = [];
    arrayOfInfo.push(firstName, lastName, idNum, jobTitle, annualSalary);

    //Appending to the DOM;
    for (let item of arrayOfInfo) {
        document.querySelector('#new-info').innerHTML += `<div>${item}</div>`
    }
}