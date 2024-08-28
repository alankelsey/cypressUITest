
**

# End-to-End Test Plan Using Cypress for UITestingPlayground

**Objective:**

To ensure the functionality and usability of the UITestingPlayground site using Cypress.

**Scope:**

The test plan covers all the major features of the site, including user interactions, form submissions, dynamic content, and validations.

  **Tools:**

 - Cypress Visual Studio Code
 -  Node.js and npm (for Cypress installation)

**Test Environment Setup**

 - Install Node.js and npm: 
	 - Ensure Node.js is installed on your machine by running `node -v` and `npm -v`.
 - Install Cypress:
	 - Navigate to your project directory. `Run npm init` to initialize a new Node.js project. 
	 - Install Cypress using `npm install cypress --save-dev`. 
	 - Open Cypress with `npx cypress open`. This opens the Cypress Test Runner where you can create and run your test
   cases.

**Test Scenarios**

 - Home Page 
	 - Scenario 1: Verify that the home page loads successfully.
	 - Scenario 2: Verify that all links on the home page are functional and
   redirect to the correct pages.

 - Dynamic ID Page
	 - Scenario 1: Verify that the button with a dynamic ID can be clicked.
	 - Scenario 2: Ensure that the ID of the button changes on each page
   load.

 - Class Attribute Page
   -	Scenario 1: Verify that clicking the button with a specific class attribute triggers the expected alert.
   -	Scenario 2: Validate that the alert contains the correct text.

  -	Hidden Layers Page
	  -	Scenario 1: Verify that clicking the first button triggers the appearance of the second button.
	  -	Scenario 2: Ensure that the second button cannot be clicked when it’s hidden.

  -	Load Delay Page
	  -	Scenario 1: Verify that the button appears after a delay and can be clicked.
	 
  -	Data Page
	  -	Scenario 1: Verify that clicking the "AJAX Button" triggers an AJAX call.
	  -	Scenario 2: Ensure that the label updates with the correct data once the call is completed.

  -	Client Side Delay Page
	  -	Scenario 1: Verify that the button triggers a client-side delay.
	  -	Scenario 2: Ensure that the label updates correctly after the delay.

  -	Click Page
	  -	Scenario 1: Verify that clicking the button updates the button text.

  -	Text Input Page
	 -	Scenario 1: Verify that typing into the text input updates the button label.
	 -	Scenario 2: Ensure that clicking the button with updated text works as expected.

 -	Scrollbars Page
	 -	Scenario 1: Verify that the button can be clicked after scrolling.

 -	Dynamic Table Page
	 -	Scenario 1: Verify that the table displays data dynamically.
	 -	Scenario 2: Ensure the correct row data is shown when sorting.

 -	Verify Text Page
	 -	Scenario 1: Verify that the correct text is displayed on the page.
	 -	Scenario 2: Ensure that any dynamic or conditional text appears as expected.

 -	Progress Bar Page
	 -	Scenario 1: Verify that the progress bar reaches 75% and stops correctly when the "Stop" button is clicked.

 -	Visibility Page
	 -	Scenario 1: Verify that hidden elements are correctly identified as hidden.
	 -	Scenario 2: Ensure that visible elements can be interacted with

 -	Sample App Page
	 -	Scenario 1: Verify that users can log in with valid credentials.
	 -	Scenario 2: Ensure that users are shown the correct message upon logging in.
	 -	Scenario 3: Verify that the "Log Out" button works correctly.
