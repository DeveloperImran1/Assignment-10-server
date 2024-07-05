## WebSite Name : TravelsBook 
A dynamic tourism website with multiple routes, user authentication, and interactive features for exploring tourist spots.

## Credential:
**email: user@user.com
**password: User1234

## Live Site Url:
Visit the live site url at[TravelsBook Live] (https://assignment-10-10bbc.web.app/)

## features and characteristics:

- **Interactive Home Slider:** Home section includes an image slider with navigation arrows.
- **Tourist Spot Cards:** Estate section displays 6 cards with tourist spot details and a "Details" button..
- **Add Tourist Spot:** Form allows users to add new tourist spots to the All About Information section.
- **User Authentication:** Navbar includes registration, login, and logout functionality.
- **Profile Page:** Profile route shows user's name and image URL.


## How to start this application:
 1. **Clone this repository:**
    ```sh Client Side:
    git clone https://github.com/DeveloperImran1/Assignment-10-Client.git
    cd Assignment-10-Client
    ```
    ```sh Server side:
    git clone https://github.com/DeveloperImran1/Assignment-10-server.git
    cd Assignment-10-server
    ```
2. **Install Dependcis**
   ```sh
   npm install
   ```
3. **Start the Development Server**
   ```sh
   nodemon index.js
   ```
4. **Build Production**
   ```sh
   npm run build
   ```
5. **Deploy firebase**
   ``sh
   firebase deploy
   ```
   


## Dependencies

- **Frontend:**
  - React: A JavaScript library for building user interfaces.
  - React Router: Declarative routing for React applications.
  - Axios: Promise-based HTTP client for the browser and Node.js.
  - React Query: Hooks for fetching, caching, and updating asynchronous data in React.
  - SweetAlert2: Beautiful, responsive, customizable replacement for JavaScript's popup boxes.
  - React-Hot-Toast: Beautiful, responsive, customizable replacement for JavaScript's notification/alert.
  - Tailwind CSS: A utility-first CSS framework for rapid UI development.
  - Headless UI: Unstyled, fully accessible UI components for React.

- **Backend:**
  - Express: Fast, unopinionated, minimalist web framework for Node.js.
  - MongoDB: NoSQL database for storing application data.
  - Mongoose: Elegant MongoDB object modeling for Node.js.
  - Cors: Middleware for enabling Cross-Origin Resource Sharing.
  - Dotenv: Module to load environment variables from a `.env` file.

## Additional Information

- **Environment Variables:**
  - Create a `.env.local` file in the root of your project in the clientside and add the following variables:
    ```plaintext
    VITE_APIKEY=Your firebase config file
    VITE_AUTHDOMAIN=Your firebase config file
    VITE_PROJECTID=Your firebase config file
    VITE_STORAGEBUCKET=Your firebase config file
    VITE_MESSAGINGSENDERID=Your firebase config file
    VITE_APPID=Your firebase config file
    VITE_SERVER='http://localhost:5000'
    VITE_IMG_KEY= your imageBB Api key
    ```
  - Create a `.env` file in the root of your project in the serverside and add the following variables:
    ```plaintext
    DB_USER=your database userName in MongoDB
    DB_PASS=your database password in MongoDB
    ```

- **Folder Structure:**
  - `client/`: Contains the React frontend code.
  - `server/`: Contains the Express backend code.

## Contributing

If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are welcome.

## License

This project is open-source and available under the [MIT License](LICENSE).
