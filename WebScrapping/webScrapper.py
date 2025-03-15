from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from bs4 import BeautifulSoup
import time
import pymongo

# MongoDB Setup
client = pymongo.MongoClient("mongodb+srv://jarvis2799:BpltlpheQDic6uRy@cluster0.mongodb.net/job_board?retryWrites=true&w=majority")
db = client["job_board"]
collection = db["linkedin_jobs"]

# Selenium Setup
options = webdriver.ChromeOptions()
options.add_argument("--headless")  # Run in the background
options.add_argument("--no-sandbox")
options.add_argument("--disable-dev-shm-usage")

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

# LinkedIn Job Search URL
keyword = "Product Manager"
location = "India"
url = f"https://www.linkedin.com/jobs/search/?keywords={keyword}&location={location}"

driver.get(url)
time.sleep(5)  # Wait for page to load

# Scroll multiple times to load jobs dynamically
for _ in range(5):
    driver.find_element(By.TAG_NAME, "body").send_keys(Keys.END)
    time.sleep(3)  # Wait for jobs to load

# Get the updated page source after scrolling
soup = BeautifulSoup(driver.page_source, "html.parser")

# Check LinkedIn's current job card structure
jobs = soup.find_all("div", class_="base-search-card")

job_list = []
for job in jobs:
    try:
        title = job.find("h3", class_="base-search-card__title").text.strip()
        company = job.find("h4", class_="base-search-card__subtitle").text.strip()
        location = job.find("span", class_="job-search-card__location").text.strip()
        link = job.find("a", class_="base-card__full-link")["href"]

        job_data = {
            "title": title,
            "company": company,
            "location": location,
            "link": link
        }
        job_list.append(job_data)
    except AttributeError:
        continue  # Skip if any element is missing

# Store in MongoDB
if job_list:
    collection.insert_many(job_list)

print(f"Scraped {len(job_list)} jobs successfully!")

# Close browser
driver.quit()
