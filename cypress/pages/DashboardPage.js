class DashboardPage {
  // Header selectors
  get heading() {
    return cy.get('h1').contains('Dashboard');
  }

  get sidebarNav() {
    return cy.get('nav');
  }

  get dashboardNavLink() {
    return cy.get('nav').contains('Dashboard');
  }

  // Tab buttons - use :contains() scoped to main
  clickTab(tabName) {
    cy.get(`main button:contains("${tabName}")`).first().click({ force: true });
    cy.wait(1500);
  }

  // Period filter buttons
  clickPeriod(period) {
    cy.get(`main button:contains("${period}")`).last().click({ force: true });
    cy.wait(800);
  }

  // General tab cards - text as rendered in DOM
  get generalCards() {
    return ['Total Visits', 'Today', 'New Patients', 'Inpatients', 'Discharged', 'Consultations'];
  }

  get generalCharts() {
    return ['Patient Categories', 'Patient Visits', 'Admission vs Discharge', 'Bed Occupancy'];
  }

  // Clerking tab cards
  get clerkingCards() {
    return ['Total Consults', 'Unattended', 'New', 'Follow-up'];
  }

  get clerkingCharts() {
    return ['New vs Follow-up Consultations', 'Consultation Status'];
  }

  // Laboratory tab cards
  get laboratoryCards() {
    return ['Samples Collected', 'Patients', 'Pending', 'Ready'];
  }

  get laboratoryCharts() {
    return ['Billing Category', 'Bill Status'];
  }

  // Radiology tab cards
  get radiologyCards() {
    return ['Paid Requests', 'Patients', 'Pending', 'Ready'];
  }

  get radiologyCharts() {
    return ['Billing Category'];
  }

  // Pharmacy tab cards
  get pharmacyCards() {
    return ['Dispensed Value', 'Pending Value', 'Returns', 'Patients'];
  }

  get pharmacyCharts() {
    return ['Billing Category'];
  }

  // Procedure tab cards
  get procedureCards() {
    return ['Completed', 'Pending', 'Patients', 'Ready'];
  }

  get procedureCharts() {
    return ['Billing Category'];
  }

  // Financials tab cards
  get financialsCards() {
    return ['Service Value', 'Bill Waiver', 'Adjustments', 'Refunds'];
  }

  get financialsCharts() {
    return ['Revenue Breakdown', 'Fund Source'];
  }

  // Epidemiology tab cards
  get epidemiologyCards() {
    return ['Cumulative Cases', 'Suspected', 'Confirmed', 'Deaths'];
  }

  get epidemiologyCharts() {
    return ['Reported Cases'];
  }

  // Assertions
  verifyUrl() {
    cy.url().should('include', '/dashboard');
  }

  verifyHeadingVisible() {
    this.heading.should('be.visible');
  }

  verifySidebarVisible() {
    this.sidebarNav.should('be.visible');
    this.dashboardNavLink.should('be.visible');
  }

  verifyUserProfile(userName) {
    cy.contains(userName).should('be.visible');
  }

  verifyCardsVisible(cards) {
    cy.get('main', { timeout: 10000 }).should('contain.text', cards[0]);
    cards.forEach(card => {
      cy.get('main').should('contain.text', card);
    });
  }

  verifyChartsVisible(charts) {
    charts.forEach(chart => {
      cy.get('main').should('contain.text', chart);
    });
  }
}

export default new DashboardPage();