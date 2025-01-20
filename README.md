# NetworkNest

Welcome to **NetworkNest** — a modern and intuitive networking web application that connects users through posts and profiles. With NetworkNest, you can share updates, engage with others, and explore profiles in a vibrant online community.

## Features

- **Post Sharing**: Create and upload posts to share updates, thoughts, or media with the community.
- **Profile Viewing**: Browse user profiles to learn more about other members of the NetworkNest community.
- **Interactive Interface**: A sleek, user-friendly design that ensures smooth navigation and engagement.

## Getting Started

Follow these steps to get a copy of NetworkNest up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (for database support)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/MauroT11/socialNetwork.git
   cd NetworkNest
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add the following:

   ```env
   DATABASE_URL=your-postgresql-connection-string
   JWT_SECRET=your-jwt-secret-key
   PORT=5000
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Technologies Used

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (hosted on Vercel)
- **Authentication**: Clerk

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Special thanks to the open-source community for providing valuable tools and resources.

## Contact

Have questions or feedback? Feel free to reach out:

- Email: mauro.co.uk@hotmail.com
