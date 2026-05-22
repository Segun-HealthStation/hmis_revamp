# HMIS Revamp — Automated Test Suite

This project automatically checks that the **HealthStation HMIS (Hospital Management Information System)** is working correctly. Every day at **9am Nigeria time**, a set of tests runs against the live staging website and the results are reported to the team on **Trello**.

---

## What Does This Project Do?

Think of it like a quality control inspector that works while you sleep.

Every morning (and every time a developer saves new code), this project:

1. Opens a virtual web browser
2. Visits the HMIS staging website
3. Clicks through key parts of the application — just like a real user would
4. Checks that everything looks and works correctly
5. Posts a report to Trello showing what passed and what failed

If something breaks, the team knows about it the same morning — before any real users are affected.

---

## What Is Being Tested?

### Login Page
- A user can log in with valid credentials and be taken to the dashboard

### Dashboard
- The dashboard heading is visible after login
- The sidebar navigation menu is visible
- The logged-in user's profile name is displayed correctly
- Each dashboard tab loads the correct stat cards and charts for all time periods (Today, This Week, This Month, This Year)

**Dashboard tabs covered:**
| Tab | What it checks |
|---|---|
| General | Overall hospital statistics and charts |
| Clerking | Patient clerking stats and charts |
| Laboratory | Lab test stats and charts |
| Radiology | Radiology stats and charts |
| Pharmacy | Pharmacy stats and charts |
| Procedure | Procedure stats and charts |
| Financials | Financial stats and charts |
| Epidemiology | Epidemiology stats and charts |

---

## Where Are the Results?

After every test run, a comment is automatically posted to the **"Daily Automation run"** card on the **HMIS Revamp** Trello board. The comment shows:

- Whether the overall run **passed or failed**
- The **date and time** of the run
- The **branch and commit** that triggered the run
- A count of **passed, failed, and skipped** tests
- A list of any **failed test names** so the team knows exactly what to look into

---

## How Often Does It Run?

| Trigger | When |
|---|---|
| Scheduled | Every day at **9:00 AM Nigeria Time (WAT)** |
| On code push | Every time a developer pushes new code to GitHub |

---

## Project Structure (For the Curious)

```
hmis-revamp/
├── cypress/
│   ├── e2e/
│   │   ├── login.feature          # Login test scenarios (plain English)
│   │   ├── login/
│   │   │   └── login.steps.cy.js  # The code that powers the login tests
│   │   ├── dashboard.feature      # Dashboard test scenarios (plain English)
│   │   └── dashboard/
│   │       └── dashboard.steps.cy.js  # The code that powers the dashboard tests
│   ├── pages/
│   │   ├── LoginPage.js           # Describes the login page elements
│   │   └── DashboardPage.js       # Describes the dashboard page elements
│   └── support/
│       └── e2e.js                 # Global test setup
├── reports/
│   ├── json/results.json          # Raw test results (machine-readable)
│   └── html/results.html          # Test results (human-readable)
├── .github/
│   └── workflows/
│       └── runner.yml             # Automation instructions for GitHub
├── cypress.config.js              # Cypress configuration
└── package.json                   # Project dependencies
```

**Key terms explained:**
- **`.feature` files** — Test scenarios written in plain English that anyone can read and understand
- **`.steps.cy.js` files** — The actual code that carries out each step described in the feature files
- **`runner.yml`** — The instruction file that tells GitHub when and how to run the tests automatically

---

## How to Run the Tests Manually (For Developers)

Make sure you have [Node.js](https://nodejs.org) installed, then:

```bash
# Install dependencies (only needed the first time)
npm install

# Run all tests (no browser window — good for CI)
npm test

# Or run with a visible browser window (good for debugging)
npx cypress open
```

---

## Setup Requirements

For the automated reporting to work, the following secrets must be added to the GitHub repository settings:

| Secret Name | Purpose |
|---|---|
| `TRELLO_API_KEY` | Authenticates with Trello |
| `TRELLO_TOKEN` | Grants permission to post comments |

> These are already configured. This section is for reference if the project is ever moved to a new repository.

---

## Website Being Tested

**Staging URL:** https://v3staging.healthstation.ng

---

## Team

Maintained by the HealthStation QA team. For questions or issues, check the **HMIS Revamp** Trello board or reach out to the team.
