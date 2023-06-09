import { MenuItem } from "../types";
import { BlogPostItem } from "../types";

export const menuItems: MenuItem[] = [
  { name: "index", display: "Home" },
  { name: "portfolio", display: "Portfolio" },
  { name: "contact", display: "Contact" },
 
];

export const blogPostItems: BlogPostItem[] = [
  { 
  title:"Raspberry Pi to Display iRacing Telemetry Data", 
  about:`This iRacing LED Display project was great fun, getting hands-on with a Raspberry Pi and learning to link hardware and software. In this project I also learned about socket programming, which was new to me but very interesting.<br><br>The project consists of a client app, running on the Raspberry Pi, and a server app on my PC. The two chat with each other via sockets to make the LED Display show real-time iRacing data.<br><br>While it might look simple, this project is proof of my ability to learn, adapt and create.`, 
  link:"https://github.com/christywastaken/iracing-led-matrix", 
  image: "/blog_post_images/iracing-led-matrix.png" 
},
{ 
  title:"This Website", 
  about:`This website serves as both a learning experience and a portfolio to showcase my learning.<br/><br/>I'm trying to work with many different technologies. Building web apps has been a great help in broadening my base knowledge.<br/><br/>Additionally, although it may not look it, it has been a good opportunity to learn design in Figma.<br/><br/>This website is universally rendered using Nuxt3 and deployed on Vercel (wow, that was easy!)`, 
  link:"https://github.com/christywastaken/christianharrison", 
  image: "/blog_post_images/christianharrison.png" 
},
{ 
  title:"Tweet Sentiment Analysis: Exploring Temporal Patterns", 
  about:"In January, I started a Python data analysis course with Purple Beard. This is my capstone project required to complete the course.<br/><br/> This project explores temporal changes in the sentiment of tweets in my hometown in 2020 using a RoBERTa-base model for the sentiment analysis.<br/><br/>I created a Selenium web scraper to collect the data as Twitter API access is now a little out of my price range...<br/><br/> Pandas, Numpy, Scikit, Scipy, Matplotlib & Seaborn are used for the analysis and displaying of data. ", 
  link:"https://github.com/christywastaken/twitter-sentiment-analysis", 
  image:"/blog_post_images/tweet-sentiment-analysis.png" 
},
{ 
  title:"Twitscrape - A Seleniumwire Twitter Scraping Package", 
  about:"I created this scraper to acquire tweets without having access to the Twitter API. It’s published as a PyPI package that I’m updating as frequently as possible to keep up with Twitter's changes (as I write this, the scraper is broken due to Twitter adding a new auth loop. I have a fix ready, but not implemented.)<br/><br/>I use Seleniumwire to navigate the page while also reading the incoming requests to get the tweet data and monitoring the rate-limit.<br/><br/>I intend to add multithreading to increase the rate of tweet scraping as a partial fix to the rate limiter. <br/><br/>This project continues to be both incredibly satisfying and incredibly frustrating.", 
  link:"https://pypi.org/project/twitscrape/", 
  image:"/blog_post_images/twitscrape.png" 
},
{ 
  title:"SendJoy Web App", 
  about:"They say the kindest acts are those done with nothing expected in return. SendJoy embodies this, allowing anyone to anonymously send goodwill messages around the world.<br/><br/>SendJoy utilises an LLM to analyse the messages, ensuring only those containing good intent and positive sentiment are passed on to the recipient.<br/><br/>The web app is built on Nuxt3, interacting with a Python API for the sentiment analysis and data flow/management.<br/><br/>Feel free to send some love and joy to those you hold close!", 
  link:"https://sendjoy.app", 
  image:"/blog_post_images/sendjoy.png" 
},
{ 
  title:"Python API for SendJoy Backend", 
  about:"This Flask API is primarily built to handle sentiment analysis for the SendJoy app.<br/><br/>The actual sentiment analysis section has been redacted in this cloned repo to stop bad actors from exploiting the app.<br/><br/>It also generates images using Pillow from the message content and automatically posts to Instagram using the Facebook API. Sensitive data is removed from the raw messages using NLP.<br/><br/>The API is hosted on DigitalOcean hooked up to a MongoDB Atlas instance.<br/><br/>Currently, this isn't public as I want to double-check for vulnerabilities before open-sourcing.", 
  link:"https://github.com/christywastaken/", 
  image:"/blog_post_images/python-api.png"
},
{ 
  title:"iOS App for SendJoy Backend Utilities", 
  about:"After fiddling with Retool and realising it didn't have the functionality to support my needs, I made this iOS app using Swift (another great learning opportunity).<br/><br/>This app allows me to control some of the SendJoy backend utilities when I'm AFK.<br/><br/>Messages that don't pass our benchmark for positive sentiment land in this app for manual review.<br/><br/>This app is also used for vetting the messages I feed into the Flask API for posting on social media.", 
  link:"https://github.com/christywastaken/sendjoy-ios-clone", 
  image:"/blog_post_images/ios-app-sendjoy.png"
},
];


