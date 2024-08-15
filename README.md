**Project Name:** URL Shortener

**Technology used:** 
Node js with Express framework
MongoDB- I used mongoose to get connection with mongoDB database

external library: shortId (to get random letters)

**Routes:**

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
