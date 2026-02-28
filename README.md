# 🚀 Playwright E2E Automation Framework
A production-ready, scalable End-to-End test automation framework built using **Playwright + TypeScript**, designed with CI/CD integration, rich reporting, failure intelligence, and environment-based execution.

## 📌 Project Vision
This framework simulates a real-world startup automation setup focused on:
- ⚡ Fast feedback cycles
- 🌍 Environment-based execution
- 🧱 Clean and scalable architecture
- 📊 Rich reporting with historical tracking
- 🐞 Automated failure intelligence
- 📧 Email notifications
- 🌐 GitHub Pages hosted reports

This project demonstrates framework-level ownership rather than simple test scripting.

## 🏗 Architecture Overview
```
playwright-e2e-framework/
│
├── src/
│   ├── tests/                # UI + API test specifications
│   ├── pages/                # Page Object Models
│   ├── utils/                # Reusable utilities (API client, helpers)
│   ├── config/               # Environment configuration
│
├── allure-results/           # Raw Allure test result files
├── .github/workflows/        # CI/CD pipelines
├── playwright.config.ts      # Playwright configuration
├── package.json
└── README.md
```

## 🧠 Key Engineering Highlights

### ✅ Unified UI + API Testing
- UI automation using Playwright
- API validation using Playwright Request Context
- Reusable API Client abstraction layer
- Clean separation of concerns

### ✅ Environment-Based Execution
- Supports dynamic environment switching: <br>
```
TEST_ENV=dev npx playwright test
TEST_ENV=qa npx playwright test
```
- Environment configuration handled via: <br>
  `src/config/env.config.ts`

### ✅ Cross-Browser & Parallel Execution
- Chromium
- Firefox
- WebKit

Parallel execution enabled via Playwright configuration for faster feedback cycles.

### ✅ Allure Reporting with History
- Rich HTML reports
- Historical test runs preserved
- Automatically hosted on GitHub Pages
- Structured URL format:
  `https://<username>.github.io/<repo>/<env>/playwright/<run-number>/`

### ✅ CI/CD with GitHub Actions
Pipeline includes:
- Node setup
- Dependency installation
- Playwright browser installation
- Test execution
- Allure report generation
- GitHub Pages deployment
- Artifact uploads
- Automated failure issue creation
- HTML email notification with test summary

Reusable workflow implemented using:
`workflow_call`

### ✅ Automatic Failure Intelligence
If tests fail:
- Failed test names extracted from Allure JSON
- GitHub issue created automatically
- Failed tests listed in issue body
- Issue labeled and assigned
- Report link attached

### ✅ Rich HTML Email Notifications
- On successful runs:
- Execution summary
- Pass/Fail statistics
- Doughnut chart visualization
- Execution duration
- Environment info
- Direct links to:
  - Allure report
  - GitHub Actions run

All SMTP credentials are securely managed via GitHub Secrets.

## 🧪 Sample API Test
```
test('Validate GET users API', async ({ request }) => {
const response = await request.get('/users?page=2');
expect(response.status()).toBe(200);

const body = await response.json();
expect(body.page).toBe(2);
});
```

## 🏃 Running Locally
### 1️⃣ Install dependencies
```
npm install
npx playwright install
```
### 2️⃣ Run tests
```
npx playwright test
```
### 3️⃣ Run with specific environment
```
TEST_ENV=dev npx playwright test
```
### 4️⃣ Generate Allure report locally
```
npx allure generate ./allure-results --clean -o allure-report
npx allure open allure-report
```

## 🏆 What This Project Demonstrates

- Framework design thinking
- CI/CD ownership
- Reporting automation
- Failure analytics
- Environment scalability
- Production-grade GitHub Pages deployment
- Clean TypeScript architecture
- Startup-ready lightweight test infra

## 📈 Potential Enhancements

- Dockerized execution
- Slack webhook integration
- Flaky test detection
- Test sharding optimization
- Visual regression testing
- Performance test hooks

## 👤 Author
**Dhiman Dasgupta**  <br> **SDET | Automation Engineer**
<br> 🔗 Portfolio: https://www.dhimandasgupta.com/ <br>🔗 GitHub: https://github.com/Dhiman07-create  <br> 🔗 LinkedIn: https://www.linkedin.com/in/dhiman-dasgupta/

## ⭐ If This Helped
If you found this framework useful or insightful, feel free to ⭐ the repository.