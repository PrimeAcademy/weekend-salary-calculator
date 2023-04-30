console.log('Hello World')

let currentIndex = -1;

function submitEmployee(event) {
currentIndex += 1;
    event.preventDefault();

    let firstNameVal = document.querySelector('#first-name').value;
    let lastNameVal = document.querySelector('#last-name').value;
    let IDVal = document.querySelector('#ID').value;
    let titleVal = document.querySelector('#title').value;
    let annualSalaryVal = document.querySelector('#annual-salary').value;


    let employeeTable = document.querySelector('#employeeData');

    employeeTable.innerHTML += `
    <tr>
        <td>${currentIndex}</td>
        <td>${firstNameVal}</td>
        <td>${lastNameVal}</td>
        <td>${IDVal}</td>
        <td>${titleVal}</td>
        <td>${annualSalaryVal}</td>
        <td><button onclick="deleteEmployee(event)" class="delete-employee">Delete</button></td>
    </tr>
    `
}


function deleteEmployee(currentIndex) {
    document.getElementById("employeeData").deleteRow(currentIndex);
}