## OpenAI API Boilerplate | ReactJS NodeJS 

This boilerplate provides a starting point for building applications that interact with the OpenAI API. It is designed to simplify the setup process and ensure the secure handling of API keys.

### Features
- Securely stores API keys to prevent exposure through browser inspection.
- Back end is preconfigured to handle API calls.
- Minimal front-end setup, ready to connect to the back end.
- Scalable folder structure for easy expansion.
- Basic utilities and accessors for fetching and processing API responses.

## Installation & Setup Guide: 
#### Requirements:

- NodeJS
- ReactJS
- Express
- DotEnv
- Nodemon
- CORS


#### Installation Steps:

1. Download the folder from GitHub.
2. Install the required dependencies using <b>npm install.</b>
3. Follow the steps below to set up <b>environment variables.</b>
4. Open your terminal, navigate to the project root, and run <b>npm run start-backend</b> (defaults to port 8000). You can change the port in server.js.
5. In new terminal tab, run <b>npm run start-frontend</b>. Your default browser should open to localhost.

Any changes made to the code will automatically reflect in the running app thanks to Nodemon.

#### Environment Variables:
Create a .env file at the project's root level (same level as package.json) and add the following environment variables:

- REACT_APP_OPEN_AI_SECRET_API_KEY
- REACT_APP_BACKEND_COMPLETIONS_URL

If you don't have an API key, sign up with OpenAI and obtain one from OpenAI's platform.

The default backend completions URL is http://localhost:8000/completions when running locally. To change this, see server.js.

#### Backlog: 
- Add firebase hosting configurations
- Github Actions for CI/CD