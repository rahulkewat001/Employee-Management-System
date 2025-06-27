# 🚀 Employee Management System

A full-stack **Employee Management System** that allows users to **add**, **view**, **update**, and **delete** employee records. Built using modern technologies for a seamless and responsive experience.

---

## 🛠️ Tech Stack

| Frontend (UI) 🖥️       | Backend (API) 🔧         | Database 🗄️          |
|------------------------|---------------------------|-----------------------|
| React + Vite ⚡         | Spring Boot 🌱             | MySQL 🐬              |
| Tailwind CSS 💨        | Java 21 ☕                 | JPA + Hibernate 🔗    |
| Axios 📡               | Spring Data JPA 📂        |                       |

---

## 📂 Project Structure

Employee-Management-System/
│
├── employee-management-ui/ → Frontend (React + Tailwind)
│
└── employee-manage-api/ → Backend (Spring Boot + MySQL)

## 🧰 Features

- 🧑 Add, Update, Delete, and View Employees
- 🔍 Fully responsive user interface
- 🔐 RESTful API using Spring Boot
- 🗄️ MySQL database integration with JPA
- 🌐 CORS-configured for React API calls
- ⚡ Fast bundling with Vite
- 🎨 Styled with Tailwind CSS

  ### 1. 🚀 Clone the Repository

```bash
git clone https://github.com/rahulkewat001/Employee-Management-System.git
cd Employee-Management-System

▶️ Start Backend (employee-manage-api)
Open in IntelliJ IDEA

Configure application.properties:

properties
Copy
Edit
spring.datasource.url=jdbc:mysql://localhost:3306/employee_db
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Run EmployeeManageApiApplication.java

💻 Start Frontend (employee-management-ui)
bash
Copy
Edit
cd employee-management-ui
npm install
npm run dev
App will run on: http://localhost:5173

🧑‍💻 Author
👤 Rahul Kewat
📘 3rd Year CSE Student, CV Raman Global University
💼 Passionate about Java, Spring Boot, React, and Full-Stack Development
🔗 LinkedIn - https://www.linkedin.com/in/rahul-kewat-30a8b5276/

⭐️ Give it a Star
If you liked this project, please give it a ⭐ on GitHub!
