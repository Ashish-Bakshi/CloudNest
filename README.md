<div align="center">
  <h1>☁️ CloudNest</h1>
  <p>A Modern Storage & File Sharing Platform</p>
  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="Next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="TypeScript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="TailwindCSS" />
    <img src="https://img.shields.io/badge/-Appwrite-black?style=for-the-badge&logoColor=white&logo=appwrite&color=FD366E" alt="Appwrite" />
  </div>
</div>

---

## 📌 Table of Contents
1. [Introduction](#introduction)  
2. [Tech Stack](#tech-stack)  
3. [Features](#features)  
4. [Setup](#setup)  
5. [Screenshots](#screenshots)  

---

## 🤖 Introduction
CloudNest is a **cutting-edge storage and file sharing platform** that lets users effortlessly upload, manage, and share files. Built with **Next.js 15** and **Appwrite Node SDK**, it provides a seamless experience for file management with a modern and responsive interface.

---

## ⚙️ Tech Stack
- **Front-end:** React 19, Next.js 15, TailwindCSS, ShadCN  
- **Back-end & Storage:** Appwrite  
- **Language:** TypeScript  

---



## 🌟 Features at a Glance

<div align="center">
  <img src="https://img.shields.io/badge/Authentication-Appwrite-blue?style=for-the-badge&logo=appwrite&logoColor=white" alt="Authentication" />
  <img src="https://img.shields.io/badge/File Uploads-Docs%2C%20Images%2C%20Videos-lightgrey?style=for-the-badge" alt="File Uploads" />
  <img src="https://img.shields.io/badge/View_&_Manage-Files-green?style=for-the-badge" alt="View & Manage" />
  <img src="https://img.shields.io/badge/File Sharing-Collaboration-orange?style=for-the-badge" alt="File Sharing" />
  <img src="https://img.shields.io/badge/Dashboard-Insights-purple?style=for-the-badge" alt="Dashboard" />
  <img src="https://img.shields.io/badge/Global Search-Files-red?style=for-the-badge" alt="Global Search" />
  <img src="https://img.shields.io/badge/Sorting-Options-blueviolet?style=for-the-badge" alt="Sorting Options" />
  <img src="https://img.shields.io/badge/Responsive UI-TailwindCSS-teal?style=for-the-badge" alt="Responsive UI" />
</div>

---

## 🚀 Setup

### Prerequisites
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en/)  
- [npm](https://www.npmjs.com/)  

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Ashish-Bakshi/CloudNest.git
cd CloudNest
```
### 2️⃣ Install Dependencies
```bash
npm install
```
### 3️⃣ Configure Environment Variables
Create a `.env.local` file in the root directory of the project and add the following environment variables:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT="https://cloud.appwrite.io/v1"
NEXT_PUBLIC_APPWRITE_PROJECT=""
APPWRITE_DATABASE=""
APPWRITE_USERS_COLLECTION=""
APPWRITE_FILES_COLLECTION=""
NEXT_PUBLIC_APPWRITE_BUCKET=""
APPWRITE_API_KEY=""
```
> Replace with your actual Appwrite credentials. Get them from [Appwrite Dashboard](https://appwrite.io/).

### 4️⃣ Run the Project
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see your project in action.

## ✨ Live Demo

Visit [CloudNest Live🡭](https://cloud-nest-ten-nu.vercel.app/) to experience the platform firsthand.

>Made with ❤️ by Ashish Bakshi
