console.log('Hello World')

let currentIndex = 0;

function submitEmployee(event) {
    event.preventDefault();

    let firstNameVal = document.querySelector('#first-name');
    let lastNameVal = document.querySelector('#last-name').value;
    let IDVal = document.querySelector('#ID').value;
    let titleVal = document.querySelector('#title').value;
    let annualSalaryVal = document.querySelector('#annual-salary').value;


    let employeeTable = document.querySelector('#employeeData');

    let annualSalaryValDisplay = parseFloat(annualSalaryVal).toLocaleString("en-US", {style:"currency", currency:"USD"})
   

    employeeTable.innerHTML += 
   ` <tr>
        <td>${firstNameVal.value}</td>
        <td>${lastNameVal}</td>
        <td>${IDVal}</td>
        <td>${titleVal}</td>
        <td class='total'>${annualSalaryValDisplay}</td>
        <td><button onclick="deleteEmployee(this)" class="delete-employee">Delete</button></td>
    </tr>`;
    
    currentIndex += 1;
    totalMonthly();

    document.querySelector('#first-name').value = '';
    document.querySelector('#last-name').value = '';
    document.querySelector('#ID').value ='';
    document.querySelector('#title').value='';
    document.querySelector('#annual-salary').value='';
}


function deleteEmployee(event) {

    event.closest('tr').remove();
    totalMonthly();

}

let monthlyCost = 0;
function totalMonthly() {
    monthlyCost = 0;
    let array = document.getElementsByClassName("total");
    for (let row of array) {
        let amount = Number(row.textContent.replace(/[^0-9.]+/g, ''))
        console.log(amount);
        monthlyCost += amount;

      
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
    element.innerHTML = monthlyCost.toLocaleString("en-US", {style:"currency", currency:"USD"});
}



