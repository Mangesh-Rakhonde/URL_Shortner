**Project Name:** URL Shortener
**Project Description:** This project uses shortId module to genrate shortid and gives user a new short url

**Technology used:** 
Node js with Express framework(EJS for frontend)
**Database:**MongoDB- I used mongoose to get connection with mongoDB database

external library: shortId (to get random letters)

**Routes:**

**GET: http://localhost:8000/**
You will get a web page which contain a web form to get your URL and give you a short URL for your website

![image](https://github.com/user-attachments/assets/7a087406-370d-4f84-b27a-38e1b667b143)

**User will only access below routes("/URL") if he is logged in I have added authentication using session and cookies**
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

Sign Up Form:
![image](https://github.com/user-attachments/assets/d9c485e5-70bc-43a6-97e8-1c881a28703f)

Sign In Form:
![image](https://github.com/user-attachments/assets/7c067d5f-41c0-4fb8-88af-500d1df78653)

