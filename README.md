# communication_platform
 A web-based communication platform that allows users to authenticate using Google OAuth, view communication history, and send/receive emails using Postmark.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup and Installation](#setup-and-installation)
  - [Backend](#backend)
  - [Frontend](#frontend)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Demo](#demo)
- [License](#license)

## Features

- User authentication with Google OAuth
- View communication history (sent and received emails)
- Send emails using Postmark
- Secure user identification with JWT

## Tech Stack

- **Backend**: Node.js, Express, MongoDB, Passport.js, Postmark
- **Frontend**: React, React Router, Axios

## Setup and Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (local or cloud-based instance)

### Backend

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd communication_platform/backend
    ```

2. Install backend dependencies:

    ```sh
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `backend` directory and add the following variables:

    ```env
    MONGO_URI=<your_mongodb_connection_string>
    GOOGLE_CLIENT_ID=<your_google_client_id>
    GOOGLE_CLIENT_SECRET=<your_google_client_secret>
    JWT_SECRET=<your_jwt_secret>
    POSTMARK_SERVER_TOKEN=<your_postmark_server_token>
    ```

4. Start the backend server:

    ```sh
    npm start
    ```

### Frontend

1. Navigate to the frontend directory:

    ```sh
    cd ../frontend
    ```

2. Install frontend dependencies:

    ```sh
    npm install
    ```

3. Start the frontend development server:

    ```sh
    npm start
    ```

The application should now be running, with the backend accessible at `http://localhost:5000` and the frontend at `http://localhost:3000`.

## Environment Variables

### How to Obtain Required Keys

- **MongoDB URI**: Create a MongoDB cluster at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and get the connection string.
- **Google Client ID & Secret**: Create a project on [Google Cloud Console](https://console.cloud.google.com/), enable the OAuth 2.0 API, and get the credentials.
- **JWT Secret**: Generate a random string to use as your JWT secret (e.g., using a tool like [RandomKeygen](https://randomkeygen.com/)).
- **Postmark Server Token**: Sign up for [Postmark](https://postmarkapp.com/), create a server, and get the server token.

## Usage

1. **Login**: Navigate to `http://localhost:3000/login` and authenticate using your Google account.
2. **Dashboard**: After login, you'll be redirected to the dashboard (`http://localhost:3000/dashboard`) where you can view your communication history.
3. **Send Email**: Use the compose email form to send emails via Postmark.


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
