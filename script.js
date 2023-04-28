console.log('script running!');

let totalCosts = 0;

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

    //Appending variables to the DOM;
    for (let item of arrayOfInfo) {
        document.querySelector('#new-info').innerHTML += `<div>${item}</div>`
    }

    //Displaying total costs
    totalCosts += Number(annualSalary);
    document.querySelector('#total-costs').innerHTML = `Total Costs: $${totalCosts}`;

    if(totalCosts > 10000) {
        document.querySelector('#total-costs').style.backgroundColor = 'red';
    }

    //Reset
    document.querySelector("#info-form").reset();
}

