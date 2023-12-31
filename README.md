# Sportslight

Sportslight is a sports blog website that fetches data from the News API to display the latest sporting blogs on our platform. It is built using React and incorporates various technologies such as React Bootstrap, React Router, Styled Components, and APIs for fetching blogs and sports quotes. The fetched data is stored in a Firebase database. The website also provides information about upcoming sporting events.
![Screenshot 2023-06-15 183043](https://github.com/gharsh24/sportlight2.0/assets/97461390/6e936c34-9c51-4f72-8217-7da8d468bfb5)
![Screenshot 2023-06-15 183235](https://github.com/gharsh24/sportlight2.0/assets/97461390/9e3046e1-7d58-469b-ad68-f40bfa98adae)
![Screenshot 2023-06-15 183750](https://github.com/gharsh24/sportlight2.0/assets/97461390/eeafb723-743a-4174-920f-5363a659ed66)


## Features

- Fetches and displays the latest sporting blogs from the News API.
- Utilizes React Bootstrap for responsive and stylish UI components.
- Implements React Router for seamless navigation between different pages.
- Uses Styled Components for custom styling and theming.
- Stores fetched data in a Firebase database for easy retrieval and persistence.
- Provides information about upcoming sporting events.

## Installation

To run Sportslight locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/sportslight.git
   ```

2. Navigate to the project directory:

   ```bash
   cd sportslight
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and provide the necessary configuration:

   ```plaintext
   REACT_APP_NEWS_API_KEY=YOUR_NEWS_API_KEY
   REACT_APP_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
   REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
   REACT_APP_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
   REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
   REACT_APP_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
   REACT_APP_SPORTS_QUOTE_API_URL=YOUR_SPORTS_QUOTE_API_URL
   ```

   Replace `YOUR_NEWS_API_KEY` with your News API key, `YOUR_FIREBASE_API_KEY` with your Firebase API key, and so on.

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to access Sportslight locally.

## Deployment

Sportslight is currently live at [https://sportslight.netlify.app] .
Status [![Netlify Status](https://api.netlify.com/api/v1/badges/e0d25040-a8e6-4ab4-830d-af7891d56de3/deploy-status)](https://app.netlify.com/sites/sportslight/deploys)

To deploy the project to your own domain or hosting platform, you can follow these general steps:

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy the generated `build` folder to your hosting platform or domain.

## Contributing

We welcome contributions to Sportslight! If you want to contribute to the project, please follow these steps:

1. Fork the repository on GitHub.

2. Clone your forked repository:

   ```bash
   git clone https://github.com/your-username/sportslight.git
   ```

3. Create a new branch for your feature or bug fix:

   ```bash
   git checkout -b feature/your-feature
   ```

4. Make the necessary changes and commit them:

   ```bash
   git commit -m "Add your commit message here"
   ```

5. Push your changes to your forked repository:

   ```bash
   git push origin feature/your-feature
   ```

6. Open a pull request on the original repository and provide a clear description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- News API: [https://newsapi.org/](https://newsapi.org/)
- Firebase: [https://firebase.google.com/](https://firebase.google.com/)
- React Bootstrap
