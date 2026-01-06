# Serverless URL Shortener

A full-stack, serverless URL shortener application built entirely on the Azure cloud platform.

## 🚀 Live Demo

**Check out the project at: [smallurl.live](https://smallurl.live)**

## 📋 Project Overview

This application provides a simple interface to create shortened URLs. It runs on a completely serverless architecture, leveraging Azure Functions for the backend API and Azure Cosmos DB for a highly scalable, low-latency NoSQL database. The frontend is a responsive React application deployed with Azure Static Web Apps.

## ✨ Features

* **Shorten URLs:** Submit a long URL to generate a unique, short link.

* **Redirect:** Use the short link to be seamlessly redirected to the original URL.

* **Responsive Design:** A clean UI built with React and UIVerse.io components.

## 🛠️ Tech Stack & Architecture

This project is a full-stack serverless application hosted on Microsoft Azure.

* **Frontend:**

  * **React:** Used to build the user interface.

  * **UIVerse.io:** Component library used for UI component styling.

  * **Deployment:** Deployed as a static site using **Azure Static Web Apps**.

* **Backend:**

  * **Azure Functions (Node.js):** Provides the serverless API endpoints.

  * **API Location:** The backend code is located in the `/back-end` directory.

* **Database:**

  * **Azure Cosmos DB (NoSQL):** Used as the primary data store. The schema is optimized for fast read operations (redirects) by using the generated short ID as the partition key.

### API Endpoints

The backend is composed of two main Azure Functions:

1. **`Shorten`**

   * **Action:** Takes a long URL from the user.

   * **Process:**

     1. Generates a random, unique ID.

     2. Saves the new `(id, originalUrl)` pair as a new item in the Cosmos DB container.

   * **Response:** Returns the new `id` to the frontend.

2. **`Redirect`**

   * **Action:** Triggered when a user visits a shortened link (e.g., [smallurl.live/api/b4jc6r](https://smallurl.live/api/b4jc6r)).

   * **Process:**

     1. Takes the `id` from the request URL.

     2. Performs a fast lookup in Cosmos DB to find the item with that `id`.

   * **Response:** Responds with an HTTP 302 Redirect to the `originalUrl` found in the database.

---

## 🗄️ Azure Cosmos DB Structure

The project uses **Azure Cosmos DB** with the following structure:

- **Database Account:** Contains one database for the application.  
- **Container Name:** `links`  
- **Partition Key:** `/id`  
- **Item Structure Example:**
  ```json
  {
    "id": "b4jc6r",
    "originalUrl": "https://www.linkedin.com/in/pablorivas1/"
  }
  ```


---

## Running Locally

### 1. Prerequisites

Before you begin, you need to have the following tools installed on your system:

* **Node.js (v18+)**: This includes `npm` (Node Package Manager).

* **Azure Static Web Apps CLI**: Install it globally by running:
  ```bash
  npm install -g @azure/static-web-apps-cli
  ```
- **Azure Account:** You will need a free Azure account to create a Cosmos DB instance and get a connection string.

---

### **2. Local Development Setup**

#### **Clone the Repository**
```bash
git clone https://github.com/PRivas1/small-url
cd small-url
```

#### **Set up Backend Connection**

The backend functions need a way to connect to your database.  
This project uses a `local.settings.json` file, which is listed in `.gitignore` and must be created manually.

1. Navigate to the backend folder:
   ```bash
   cd back-end
   ```
2. Create a new file named `local.settings.json`.
3. Copy and paste the following JSON into the file, replacing `xxxxxxxxxxx` with your own Azure Cosmos DB Connection String:
   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "FUNCTIONS_WORKER_RUNTIME": "node",
       "AzureWebJobsStorage": "",
       "COSMOS_DB_CONNECTION_STRING": "xxxxxxxxxxx"
     }
   }
   ```
4. Go back to the root directory:
   ```bash
   cd ..
   ```

---

#### **Install Frontend Dependencies**
```bash
cd front-end
npm install
```

---

#### **Start the Frontend Development Server**
```bash
npm start
```
This will run the React app on http://localhost:3000, Close out of it.  

*(Note: This terminal window must remain open, localhost link may differ)*

---

#### **Start the Static Web Apps (SWA) CLI**

Open a new terminal window in the root directory and run:
```bash
swa start http://localhost:3000 --api-location ./back-end
```
This will run the React app on http://localhost:4280, This will be the demo.  

*(Note: This terminal window must remain open, localhost link may differ)*

Your application is now running locally!  
The SWA CLI will proxy all API requests from the frontend to your local Azure Functions.

---

## **Credits**
- Modified version of [Button](https://uiverse.io/ke1221/ancient-walrus-24) by `ke1221`
- Modified version of [Input](https://uiverse.io/alexruix/evil-parrot-25) by `alexruix`
- Modified version of [Card](https://uiverse.io/andrew-demchenk0/nervous-bear-89) by `andrew-demchenk0`
- Modified version of [Pattern](https://uiverse.io/muhammad_1180/ordinary-fish-9) by `muhammad_118`
- SVG for [Copy](https://reactsvgicons.com) from `reactsvgicons.com`

## 📄 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.
