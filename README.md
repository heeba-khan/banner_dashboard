# 🎉 Banner

## 📖 Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## 📦 Overview
This project is a dynamic one-page website built with React, featuring a banner that can be created, displayed, hidden, and configured through an internal dashboard. The banner includes a countdown timer, and the project is connected to a MySQL database for storing banner details.

## 🌟 Features
- **Create Banner**: Form to create a new banner with a description, timer, and link.
- **Dynamic Countdown Timer**: Displays a countdown for the banner and hides it when the timer reaches zero.
- **Internal Dashboard**: Controls for creating banners, toggling visibility, and managing banner content.
- **Database Integration**: Stores banner information using a MySQL database.

## ⚙️ Technologies Used
- **Frontend**: 
  - React
  - Vite
  - Axios

- **Backend**: 
  - Node.js
  - Express.js
  - MySQL

- **Styling**: CSS (with pastel colors for a modern look)


## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MySQL Server

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/heeba-khan/banner_dashboard.git
   cd banner-dashboard

2. Navigate to Frontend folder:
   ```bash
   cd frontend
   
3. Install dependencies:
   ```bash
   npm install

4. Navigate to Backend folder:
   ```bash
   cd ../backend

5. Install dependencies:
   ```bash
   npm install


### Usage
1. Start the MySQL server and create a database (if not already created).

2. Set up your .env file in the backend directory with your database credentials:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=mydatabase

3. Start the backend server:
   ```bash
   node index.js

4. Start the frontend application:
   ```bash
   cd ../frontend
   npm run dev

5. Open your browser to view the application. 


### 📡 API Endpoints

1. GET /api/banners - Retrieve all banners.
2. GET /api/banners/:id - Retrieve a single banner by ID.
3. POST /api/banners - Create a new banner.
4. PUT /api/banners/:id - Update an existing banner.
5. DELETE /api/banners/:id - Delete a banner by ID.
6. DELETE /api/banners - Delete all banners.


## 🤝 Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue.

1. Fork the repository
2. Create your feature branch:
   ```bash
   git checkout -b feature/MyFeature

3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'

4. Push to the branch:
   ```bash
   git push origin feature/MyFeature

5. Open a pull request.


## 📄 License
This project is licensed under the MIT License. See the LICENSE file for details.