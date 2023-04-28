console.log('script running!');

let totalCosts = 0;

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

    console.log(newEmployee);

    //Appending to the DOM
    document.querySelector('#new-info').innerHTML += 
    `<div>
        <span>${newEmployee.firstName}</span>
        <span>${newEmployee.lastName}</span>
        <span>${newEmployee.idNum}</span>
        <span>${newEmployee.jobTitle}</span>
        <span>$${newEmployee.annualSalary}</span>
        <button onClick="deleteMe(event)">Delete</button>
    </div>`

    // Displaying total costs
    totalCosts += Number(newEmployee.annualSalary);
    document.querySelector('#total-costs').innerHTML = `Total Costs: $${totalCosts}`;

    if(totalCosts > 20000) {
        document.querySelector('#total-costs').style.backgroundColor = 'red';
    }

    //Reset
    document.querySelector("#info-form").reset();
}

