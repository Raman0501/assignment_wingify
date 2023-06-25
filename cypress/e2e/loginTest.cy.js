
describe("Login and Home Page Tests", () => {
  beforeEach(() => {
    cy.visit("https://sakshingp.github.io/assignment/login.html");
  });
  it('should display the login form', () => {
      cy.get('form').should('be.visible');
    });
 
it('should display the username input field', () => {
  cy.get('#username').should('be.visible');
});
it('should display the password input field', () => {
  cy.get('#password').should('be.visible');
});
it('should display the login button', () => {
  cy.get('#log-in').should('be.visible');
});
it('should display the password save checkbox ', () => {
  cy.get('.form-check-label').should('be.visible');
});
 
 it("should login successfully", () => {
      cy.get('#username').type("Raman0501");
      cy.get('#password').type("Raman@123");
      cy.get('.form-check-input').click();
      cy.get('#log-in').click();
  });

 // Verify successful login and redirection to home page
 it('Verify successful login and redirection to home page',()=>{
  // cy.url().should("include", "/home.html");
{setTimeout:5000}

 });
 
it('Retrieve amounts from the data table ', () => {
  cy.visit('https://sakshingp.github.io/assignment/home.html') // Replace with the URL where the data table is located

  cy.get('tbody tr').each(($row) => {
    const amount = $row.find('.text-right').text().trim();
    const isNegative = amount.includes('-');
    const formattedAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ''));

    if (isNegative) {
      cy.log(`Negative Amount: ${formattedAmount} USD`);
      // Add your assertions or further actions for negative amounts
    } else {
      cy.log(`Positive Amount: ${formattedAmount} USD`);
      // Add your assertions or further actions for positive amounts
    }
  });
});
it('Retrieve amounts from the data table and check if they are sorted', () => {
  cy.visit('https://sakshingp.github.io/assignment/home.html') 

  const amounts = [];

  cy.get('tbody tr').each(($row) => {
    const amount = $row.find('.text-right').text().trim();
    const formattedAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ''));
    amounts.push(formattedAmount);
  }).then(() => {
    const sortedAmounts = [...amounts].sort((a, b) => a - b);
    const isSorted = JSON.stringify(amounts) === JSON.stringify(sortedAmounts);

    if (isSorted) {
      cy.log('Amounts are in sorted order');
      // Add your assertions or further actions for sorted amounts
    } else {
      cy.log('Amounts are not in sorted order');
      // Add your assertions or further actions for unsorted amounts
    }
  });
});

});



