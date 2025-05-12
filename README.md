# 🌍 Mobile App Development – Country Info & Weather
This mobile app project, **`mobAppDev`**, allows users to search for countries, view relevant data such as news and weather, and manage settings such as unit preferences for weather data.

---

## 📌 Project Overview

This app features the following:

- **Home Page:**  
  Displays an **ID: G00438791** and a **settings** icon. The user can search for a country or part of its name. A search button opens the **Countries Page** with a list of countries that match the entered text.
  
- **Settings Page:**  
  Allows the user to choose between **Metric**, **Standard**, or **Imperial** units for displaying temperature data. If no unit is selected, **Metric** is chosen by default.

- **Countries Page:**  
  Displays a list of countries matching the search term, fetched from **restcountries.com**. For each country, the following are shown:
  - **Flag**
  - **Official name**
  - **Buttons for "News" and "Weather"**

- **News Page:**  
  Displays the latest news articles for the selected country, fetched from **newsdata.io**. Each news story includes:
  - **Image** (if present)
  - **Title**
  - **Description**

- **Weather Page:**  
  Shows the current weather for the selected country, fetched from **openweathermap.org**, including:
  - **Capital city**
  - **Weather icon**
  - **Weather description**
  - **Current temperature**
  - **Temperature units** (as per the user's settings)

---

## 🚀 How to Run the App

### 1. Clone this repository:

```bash
git clone https://github.com/Peter-8312/mobAppDev.git
cd mobAppDev
```
### 2. Install Dependencies:
If you’re using Ionic (or other frameworks), you can install dependencies using:
```bash
npm install
```
### 3. Run the app:
```bash
ionic serve
```
This will open the app in a browser for development purposes.

---

## 🛠️ Technologies Used
- **Ionic Framework** (for building cross-platform mobile apps)
- **Typescript** (for app logic)
- **restcountries.com API** (for country data)
- **newsdata.io API** (for news)
- **openweathermap.org API** (for weather data)

---

## 🎯 Learning Objectives
This project aims to demonstrate proficiency in building a mobile app that integrates various APIs, manages user preferences, and displays dynamic data, including:
- Integrating third-party APIs for country data, news, and weather 
- Implementing a search functionality with filtering
- Managing user settings (unit selection)
- Handling different pages and user interactions in a mobile app environment

---

## 📄 License
This project was created as part of academic coursework and is for educational purposes only.

---

## 📫 Contact
For questions or feedback, feel free to reach out via GitHub.
