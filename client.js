console.log('Hello World')

let currentIndex = 0;

function submitEmployee(event) {
    event.preventDefault();

    let firstNameVal = document.querySelector('#first-name').value;
    let lastNameVal = document.querySelector('#last-name').value;
    let IDVal = document.querySelector('#ID').value;
    let titleVal = document.querySelector('#title').value;
    let annualSalaryVal = parseFloat(document.querySelector('#annual-salary').value);


    let employeeTable = document.querySelector('#employeeData');

    employeeTable.innerHTML += `
    <tr>
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${IDVal}</td>
        <td>${titleVal}</td>
        <td class='total'>${annualSalaryVal}</td>
        <td><button onclick="deleteEmployee(this)" class="delete-employee">Delete</button></td>
    </tr>
    `
    currentIndex += 1;
    totalMonthly();
}


function deleteEmployee(event) {
    // console.log(element);
    // console.log(document.getElementsByClassName("row"));
    // document.getElementsByClassName("row").deleteRow(currentIndex);


    // console.log(event);
    // console.log(event.closest('tr'));
    event.closest('tr').remove();
    totalMonthly();

}

let monthlyCost = 0;
function totalMonthly() {
    monthlyCost = 0;
    let array = document.getElementsByClassName("total");
    for (let row of array) {
        monthlyCost += parseFloat(row.textContent);
    }
    document.querySelector('#total-monthly').innerHTML = monthlyCost;

 
}

// add element for total monthly cost
// calculate monthly costs from all employees - run when submitted
// change background of monthly cost to red if total cost exceeds $20k
// clear input fields upon submit - each input is an object, target element set value to empty string
// make 'enter' submit input field - wrap input/labels in a form element 'submit' and change 'onclick' to 'onsubmit'
// STRETCH add styling
// STRETCH when employee is deleted updated total monthly cost to reflect - similar to finding total - on delete run a function to re-tally total