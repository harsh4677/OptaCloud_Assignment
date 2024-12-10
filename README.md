
---

# Location/Address Management Application

This project is a **Location/Address Management** application built with React (frontend) and Node.js (backend). The app allows users to select their delivery location using the Google Maps API, add address details, and manage saved addresses. Optional features include geolocation permission prompts, a map-based address.

## Features

- **Location Permission Prompt**: A popup prompt for location access or manual address search.
- **Map Integration**: View, select, and adjust the location on a Google Map using the Google Maps API.
- **Geolocation**: Users can use the "Locate Me" feature for automatic location selection.
- **Address Form**: Collects specific address details like:
  - House/Flat/Block No.
  - Apartment/Road/Area
  - Allows categorizing addresses (Home, Office, Friends & Family).
- **Address Management**: Users can save, view, update, and delete saved addresses.
- **Responsive UI**: Fully responsive design suitable for both mobile and desktop views.
- **Optional Bonus Features**:
  - Mark locations as favorites for quick access.
  - Map preview for saved addresses.
  - Error handling for invalid or incomplete address entries.

## Technologies Used

- **Frontend**: React, Google Maps API
- **Backend**: Node.js, Express.js, MongoDB (via Mongoose)
- **Environment Variables**: `.env` files for managing API keys and MongoDB URI

## Getting Started

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/harsh4677/OptaCloud_Assignment.git
   ```

2. Install dependencies for both the frontend and backend:
   - **Frontend**:
     ```bash
     cd frontend
     npm install
     npm start
     ```
   - **Backend**:
     ```bash
     cd backend
     npm install
     npm run dev
     ```

3. Create a `.env` file in both the **frontend** and **backend** directories and add the necessary environment variables:
   - **Frontend (`frontend/.env`)**:
     ```
     REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
     ```

   - **Backend (`backend/.env`)**:
     ```
     MONGODB_URI=your-mongodb-uri
     GOOGLE_MAPS_API_KEY=your-google-maps-api-key
     ```

4. Start the backend server:
   ```bash
   cd backend
   npm start
   ```

5. Start the frontend application:
   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and navigate to `http://localhost:3000` to access the app.

## Usage

### Location Permission Request

Upon loading, the app prompts the user to enable location services. The user can:

- **Enable Location**: Requests the user’s current location using browser permissions.
- **Search Manually**: Allows the user to manually enter an address in a Google Maps search field.

### Geolocation and Pin Selection

If the user grants location access, the selected location is displayed on a Google Map. The user can manually adjust the location by dragging a pin to fine-tune their location.

### Delivery Address Form

The user enters additional address details:
- House/Flat/Block No.
- Apartment/Road/Area
- Category: Home, Office, or Friends & Family.

### Address Management

Users can:
- View saved addresses.
- Select an address .
- Search for recent or new addresses using a search feature.

## Code Explanation

### Frontend

- **App.js**: The main component that manages location permissions, displays the map, address form, and manages address data.
- **LocationPrompt.js**: A modal component for requesting location access.
- **MapComponent.js**: Displays the Google Map and allows users to adjust the location.
- **AddressForm.js**: Collects address details and categories.
- **ManageAddresses.js**: Displays and manages saved addresses.

### Backend

- **Address.js (Model)**: Mongoose schema for address data, including location (latitude/longitude), house/road details, and address category.
- **addressRoutes.js**: Defines routes for adding, viewing, and managing addresses.
- **catchAsync.js**: Handels Async erros
- **server.js**: Main server file that connects to MongoDB and sets up the Express server.

## Environment Variables

Both the frontend and backend rely on environment variables:

- **Google Maps API Key**: Set in the frontend `.env` file.
- **MongoDB URI**: Set in the backend `.env` file.

# OptaCloud_Assignment
# OptaCloud_Assignment
