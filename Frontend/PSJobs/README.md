# Product Space Job Board

This project is a Job Board application that scrapes job listings from LinkedIn and displays them on a web interface. It consists of three main parts: Backend, Frontend, and Web Scraping.

## Project Structure

```
.vscode/
    launch.json
Backend/
    index.js
    package.json
    config/
        db.js
    models/
        jobModel.js
    routes/
        jobRoutes.js
Frontend/
    PSJobs/
        .gitignore
        eslint.config.js
        index.html
        package.json
        README.md
        vite.config.js
        public/
            vite.svg
        src/
            App.css
            App.jsx
            index.css
            main.jsx
            assets/
            components/
                api.jsx
                JobCard.jsx
                Navbar.jsx
                Pagination.jsx
                Sidebar.jsx
WebScrapping/
    webScrapper.py
```

## Backend

The backend is built with Node.js, Express, and MongoDB. It provides APIs to fetch job listings from the database.

### Setup

1. Navigate to the `Backend` directory:
    ```sh
    cd Backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

The backend server will run on `http://localhost:3000`.

### API Endpoints

- `GET /api/jobs`: Fetch paginated job listings.

## Frontend

The frontend is built with React and Vite. It displays job listings and provides pagination and filtering options.

### Setup

1. Navigate to the `Frontend/PSJobs` directory:
    ```sh
    cd Frontend/PSJobs
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm run dev
    ```

The frontend application will run on `http://localhost:5173`.

## Web Scraping

The web scraper is built with Python and Selenium. It scrapes job listings from LinkedIn and stores them in MongoDB.

### Setup

1. Navigate to the `WebScrapping` directory:
    ```sh
    cd WebScrapping
    ```

2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Run the scraper:
    ```sh
    python webScrapper.py
    ```

The scraper will fetch job listings and store them in the `linkedin_jobs` collection in MongoDB.

## MongoDB Setup

Ensure MongoDB is running locally on `mongodb://localhost:27017/` and has a database named `job_board`.

## License

This project is licensed under the MIT License.