<a name="weekend-salary-calculator"></a>

<div align="center">
  <a href="https://github.com/PrimeAcademy/weekend-salary-calculator">
    <img src="https://avatars.githubusercontent.com/u/9360728?s=200&v=4" alt="Logo" width="80" height="80">
  </a>
  <h3>Weekend Challenge: JavaScript Salary Calculator</h3>
  <p>
    <a href="https://github.com/PrimeAcademy/weekend-salary-calculator/issues">Report Bug</a>
    ·
    <a href="https://github.com/PrimeAcademy/weekend-salary-calculator/issues">Request Feature</a>
  </p>
</div>

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-this-repo">About This Repo</a>
      <ul>
        <li><a href="#tips-for-success">Tips For Success</a></li>
      </ul>
    </li>
    <li>
      <a href="#github-setup">GitHub Setup</a>
    </li>
    <li><a href="#local-setup">Local Setup</a></li>
        <li>
      <a href="#requirements">Requirements</a>
      <ul>
        <li><a href="#base-mode">Base Mode</a></li>
        <li><a href="#stretch-goals">Stretch Goals</a></li>
      </ul>
    </li>
    <li>
      <a href="#about-unit-tests">About Unit Tests</a>
      <ul>
        <li><a href="#passing-criteria">Passing Criteria</a></li>
      </ul>
    </li>
  </ul>
</details>

## About This Repo

💸 You will be building a Salary Calculator application that records employee **salaries** and adds salaries up to report **monthly** costs. The current state of this repo should serve as a template to begin your work! Besides the automated tests, the only file we have provided you with is an [index.html](index.html). You'll need to create and source the other files you'll need.

Use the ![wireframe](salary-calc-wireframe.png) to see intended functionality and to get an idea of a simple layout design!

### Tips For Success

The weekend assignments in Tier 2 are different than what we've been doing so far. Please take a few minutes to watch this [video](https://vimeo.com/manage/videos/892049929) (password: `pr1me`). It will help you get oriented and set you up for success!

Utilize the [Passing Criteria](#passing-criteria) for unit tests (below) to guarantee your application fulfills all requirements. Also, be sure regularly run the tests to validate your application's functionality as you develop each feature.

[🔝 back to top](#weekend-salary-calculator)

## GitHub Setup

- [ ] **Create Repo from Use Template**:
  - Click [HERE](https://github.com/new?template_name=weekend-salary-calculator&template_owner=prime-digital-academy) or the `Use Template` button in this repo to create a new repo.
  - Ensure `Include all branches` is left unchecked.
  - Specify your username and repo name appropriately.
  - Provide a description for the repo (optional).
  - Set the repo as `Public`.
  - Click `Create repository`.

[🔝 back to top](#weekend-salary-calculator)

## Local Setup

- [ ] **Clone your Repo**:

  - Click the `<> Code` button in this repo and choose `SSH`.
  - Copy the URL. It should look something like: `git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`.
  - In your terminal, navigate to the directory where you want to clone this repo.
  - Execute `git clone git@github.com:YOUR-USERNAME/YOUR-REPO-NAME.git`, replacing the placeholders with actual values.

- [ ] **Install Node Dependencies**:

  - In the terminal, navigate to the folder you cloned this repo and run the following:

    ```sh
    npm install
    ```

- [ ] **Starting the application**:
  - Open `Finder` and navigate to the project folder containing the `index.html` file.
  - Right-click on the `index.html` file.
  - In the right-click menu, select **Open With > Chrome** (or your preferred browser).
  - The `index.html` will now open directly in the chosen browser.

The UI should open in your chosen web browser to the correct URL.

> **NOTE:** When you make changes to the HTML or related CSS/JS files, you will need to manually refresh the browser to see the updates.

[🔝 back to top](#weekend-salary-calculator)

## Requirements

This application should have a form with five inputs that collect a new employee's _first name, last name, ID number, job title, annual salary_.

### Base Mode

- [ ] **Add a New Employee:**

  - When the "Submit" button is clicked:
    - A new `employee` row should be added to the table.
    - The footer element's total monthly cost should be updated.
    - The form inputs should be cleared out after adding an employee.

- [ ] **Handle Monthly Cost Exceeding Budget:**

  - After updating the total monthly cost:
    - Check if the total monthly cost **exceeds $20,000**.
    - If it does, apply an `over-budget` CSS class to the footer element.
    - Ensure the `over-budget` class visually indicates the budget has been exceeded.
    - **Note:** The visual indication that the budget has been exceeded could be as simple as turning the text red.

- [ ] **Employee Removal:**
  - Implement a `Delete` button for each employee row that, when clicked:
    - Removes the employee from the DOM.
    - **Note**: For the initial implementation, the total monthly cost **does not** need to be updated when an employee is deleted.

> **NOTE**: You will see an empty [style.css](./style.css) file in your codebase. Put your styling here and add classes/ids to your HTML elements as you see fit!

## Stretch Goals

- [ ] **Enhance Application Aesthetics or Functionality:**

  - Implement styling or additional features that complement the theme of the employee management application.
    - Suggestions include:
      - Adding animations to the form submission or employee deletion process.
      - Implementing a modal confirmation dialog before deleting an employee.
      - Customizing the application's color scheme to reflect company branding.
    - Creativity is highly encouraged!

- [ ] **Update Monthly Cost on Employee Deletion:**

  - Modify the `Delete` button functionality to:
    - Accurately update the footer's total monthly cost when an employee is removed.
      - **Challenge:** Identify the removed employee's annual salary and adjust the total monthly cost accordingly. This requires careful consideration of how to associate each employee row with its corresponding salary data.

- [ ] **Add an Express Server:**
  - Add the [Express](https://www.npmjs.com/package/express) server package.
  - Move your `salary data` to the server.
  - Functionality should be the same on the DOM.

[🔝 back to top](#weekend-salary-calculator)

## About Unit Tests

At any point, you can execute the test suite by running:

```sh
npm test
```

Nifty!

### Passing Criteria

- **Submit Button Data-TestID:**

  - The submit button in your form **must** include the attribute `data-testid="submitButton"`, as shown below:

    ```html
    <button data-testid="submitButton">Submit</button>
    ```

- **Form Input Data-TestIDs:**

  - Each input in your form must have a specific `data-testid` attribute to pass tests:
    - First Name: `data-testid="firstNameInput"`
    - Last Name: `data-testid="lastNameInput"`
    - ID Number: `data-testid="idInput"`
    - Job Title: `data-testid="titleInput"`
    - Annual Salary: `data-testid="annualSalaryInput"`

- **Employee Table Structure:**

  - Display employee information within a `<table>` element, ensuring each employee is listed in a separate `<tr>` row.

- **Total Monthly Cost Display:**

  - The total monthly cost calculation must be displayed within the `<footer>` element of your application.

- **Over-Budget Indicator:**
  - When the total monthly cost exceeds $20,000, apply the `over-budget` CSS class to the `<footer>` to indicate exceeding the budget.

[🔝 back to top](#weekend-salary-calculator)
