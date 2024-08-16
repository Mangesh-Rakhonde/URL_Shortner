**Project Name:** URL Shortener
**Project Description:** This project uses shortId module to genrate shortid and gives user a new short url
**Technology used:** 
Node js with Express framework
**Database:**MongoDB- I used mongoose to get connection with mongoDB database

external library: shortId (to get random letters)

**Routes:**

**GET: http://localhost:8000/**
You will get a web page which contain a web form to get your URL and give you a short URL for your website

![image](https://github.com/user-attachments/assets/7a087406-370d-4f84-b27a-38e1b667b143)

**Post: http://localhost:8000/URL/**
add object in body with url attribute ex. {url:"www.google.com"}  will give you a shortId

**GET: http://localhost:8000/URL/RCgAQxnfB  **
Redirects you to your main URL

**GET: http://localhost:8000/URL/analytics/RCgAQxnfB**
Gives you analytics onn how many times your shortURl got hit
ex:
{
    "Total Clicks": 1,
    "Analytics": [
        {
            "timestamp": 1723722707387,
            "_id": "66bdebd3fdd99b82b0f6a96f"
        }
    ]
}
