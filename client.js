console.log('Hello World')

let currentIndex = 0;

function submitEmployee(event) {
    event.preventDefault();

    let firstNameVal = document.querySelector('#first-name').value;
    let lastNameVal = document.querySelector('#last-name').value;
    let IDVal = document.querySelector('#ID').value;
    let titleVal = document.querySelector('#title').value;

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    let annualSalaryVal = parseFloat(document.querySelector('#annual-salary').value);

    let employeeTable = document.querySelector('#employeeData');
   

    employeeTable.innerHTML += `
    <tr>
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${IDVal}</td>
        <td>${titleVal}</td>
        <td class='total'>${annualSalaryVal.toLocaleString("en-US", {style:"currency", currency:"USD"})}</td>
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
   let element = document.querySelector('#total-monthly');
    if (monthlyCost <= 20000) {
        element.classList.remove('red-background')    
    }
    else {
        element.classList.add('red-background')
    }
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    })
    element.innerHTML = USDollar.format(monthlyCost);
    
}



// X add element for total monthly cost
// X calculate monthly costs from all employees - run when submitted
// change background of monthly cost to red if total cost exceeds $20k
// clear input fields upon submit - each input is an object, target element set value to empty string
// make 'enter' submit input field - wrap input/labels in a form element 'submit' and change 'onclick' to 'onsubmit'
// STRETCH add styling
// X STRETCH when employee is deleted updated total monthly cost to reflect - similar to finding total - on delete run a function to re-tally total