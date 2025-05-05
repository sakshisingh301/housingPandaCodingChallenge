# 🏠 HousingPanda Listing API

A simple Node.js + MySQL backend API to manage rental listings.

## 📦 Tech Stack

- Node.js
- Express.js
- MySQL 
- REST API

## ⚙️ Setup Instructions

1. **Clone the repo**

git clone https://github.com/yourusername/housingpanda.git

cd housingpanda

npm install

npm start

Log into MySQL and run:

CREATE DATABASE listing_db;

USE listing_db;

CREATE TABLE listings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  userId VARCHAR(255),
  title VARCHAR(255),
  description TEXT,
  rent DECIMAL(10,2),
  address VARCHAR(255),
  rooms INT,
  contact VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

2. **API ENDPOINTS**

**POST API**: curl --location 'http://localhost:3000/api/listings/' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Modern Studio",
  "description": "A clean and quiet studio near downtown.",
  "rent": 1400,
  "address": "123 Sunset Blvd, LA",
  "rooms": 1
}
'

**GET API to get by userId:** curl --location 'http://localhost:3000/api/listings/{userId}' \
--data ''
