# Playwright Mini Project – TodoMVC Automation

## 📌 Project Overview
This project demonstrates **end-to-end UI automation** using **Playwright** on the TodoMVC React application.  
It focuses on writing reliable automated tests, validating user flows, and generating detailed execution reports.

The project is built to showcase **real-world QA automation skills** such as test design, assertions, debugging, and reporting.

---

## 🧪 Application Under Test
**TodoMVC (React version)**  
🔗 https://todomvc.com/examples/react/dist/

---

## ✅ Automated Scenarios
- Add multiple Todo items
- Mark selected Todo items as completed
- Validate Todo count and item state using assertions
- Capture screenshots, video, and trace on test failure
- Generate and review Playwright HTML execution reports

---

## 🛠 Tech Stack
- **Automation Tool:** Playwright  
- **Programming Language:** JavaScript  
- **Test Runner:** Playwright Test  
- **Reporting:** Playwright HTML Reporter  
- **Runtime:** Node.js  
- **IDE:** VS Code  

---

## 📂 Test Coverage
The test file (`todo-demo1.spec.js`) includes:
1. **Task Creation** – Adding multiple Todo items dynamically  
2. **Task Management** – Marking items as completed  
3. **Validation** – Verifying visibility, text, and state of Todo items  
4. **Assertions** – Ensuring correct application behavior  

---

## 📊 Reports & Debugging Features
- HTML execution report  
- Screenshots captured on failure  
- Video recording on failure  
- Trace viewer for detailed debugging  

---

## ▶️ How to Run the Project

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Run tests (Headless)
```bash
npx playwright test
```

### 3️⃣ Run tests (Headed mode)
```bash
npx playwright test --headed
```

### 4️⃣ View HTML Report
```bash
npx playwright show-report
```

---

## 👤 Author
**Jeevan A R**
