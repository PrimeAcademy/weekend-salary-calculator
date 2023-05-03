console.log('script running!');

let totalCosts = 0;
let monthlyCosts = 0;

function collectInfo(event) {
    event.preventDefault();

    //Creating employee object
    let newEmployee = {
        firstName: document.querySelector('#first-name').value,
        lastName: document.querySelector('#last-name').value,
        idNum: document.querySelector('#ID-number').value,
        jobTitle: document.querySelector('#job-title').value,
        annualSalary: document.querySelector('#annual-salary').value
    }

    //Appending to the DOM
    document.querySelector('#new-info').innerHTML += 
        `<tr>
            <td>${newEmployee.firstName}</td>
            <td>${newEmployee.lastName}</td>
            <td>${newEmployee.idNum}</td>
            <td>${newEmployee.jobTitle}</td>
            <td>${newEmployee.annualSalary}</td>
            <td><button id='delete-button' onClick='deleteMe(event)'>Delete</button></td>
        </tr>`

    // Displaying total costs
    totalCosts += Number(newEmployee.annualSalary);
    monthlyCosts = (totalCosts/12).toFixed(2);
    document.querySelector('#total-costs').innerHTML = `Total Monthly Expenditure: $${monthlyCosts}`;

    if(monthlyCosts > 20000) {
        document.querySelector('#total-costs').style.backgroundColor = '#e63946';
    }

    //Reset
    document.querySelector("#info-form").reset();
}

function deleteMe(event) {
    event.target.parentElement.parentElement.remove();
}
