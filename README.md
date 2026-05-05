# 🚀 Ubuntu JavaScript Practice (Node.js CLI)

This repository contains my hands-on practice using **JavaScript (Node.js)** in an Ubuntu environment (WSL / Terminal).
It includes multiple scripts demonstrating basic programming concepts, command-line arguments, loops, functions, and recursion.

---

## 📌 Environment Setup

### ✅ Install Node.js & npm

```bash
sudo apt update
sudo apt install nodejs npm -y
```

### ✅ Verify installation

```bash
node -v
npm -v
```

---

## 📂 Project Structure

All scripts are written in JavaScript and executed using Node.js from the terminal.

```
.
├── app.js
├── README.md
```

---

## 🧠 Features Implemented

### 1️⃣ Hello World

Prints a simple message.

```bash
node app.js hello
```

---

### 2️⃣ Addition of Two Numbers

Adds two integers passed as arguments.

```bash
node app.js add 5 3
```

**Output:**

```
8
```

---

### 3️⃣ Factorial (Recursive)

Computes factortial using recurssion.

```bash
node app.js fact 5
```

**Output:**

```
120
```

---

### 4️⃣ Print Squarre

Prints a square using the character `x`.

```bash
node app.js square 4
```

**Output:**

```
xxxx
xxxx
xxxx
xxxx
```

---

### 5️⃣ Argument Handling

* Detects missing arguments
* Validates integers
* Uses `process.argv`

---

## ⚙️ Key Concepts Learned

* Node.js CLI usage
* `process.argv` for command-line arguments
* Functions and recursion
* Loops (`while`, `for`)
* Input validation (`Number`, `isNaN`, `Number.isInteger`)
* Writing modular logic in one file
* Debugging syntax errors

---

## 🔥 Example Code Snippet

```javascript
function factorial(n) {
  if (isNaN(n)) return 1;
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(Number(process.argv[2])));
```

---

## 🐧 Ubuntu Commands Used

```bash
nano app.js        # Create/edit file
node app.js        # Run script
ls                 # List files
cd                 # Navigate directories
git init           # Initialize Git repo
git add .          # Add files
git commit -m ""   # Commit changes
git push           # Push to GitHub
```

---

## 🔗 GitHub Setup

Steps used to push this project:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

> ⚠️ Note: GitHub requires a **Personal Access Token (PAT)** instead of a password.

---

## 🎯 Goals

* Practice JavaScript fundamentals
* Learn Node.js execution in Ubuntu
* Understand Git & GitHub workflow
* Build a foundation for backend development

---

## 📌 Author

**Tazanou Dev**
GitHub: https://github.com/TAZANOU-DEV

---

## 🚀 Next Steps

* Learn Express.js (backend framework)
* Build REST APIs
* Connect to databases (MongoDB, MySQL)
* Deploy Node.js applications

---

## 💡 Conclusion

This project represents my journey learning JavaScript in an Ubuntu environment, focusing on CLI scripting and problem-solving.

---
