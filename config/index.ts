import { MenuItem } from "../types";
import { BlogPostItem } from "../types";

export const menuItems: MenuItem[] = [
  { name: "index", display: "Home" },
  { name: "portfolio", display: "Portfolio" },
  { name: "contact", display: "Contact" },
 
];

export const blogPostItems: BlogPostItem[] = [
  { title:"This Website", about:`- This website serves as both a learning experience and a portfolio to showcase my learning.<br/><br/>- I'm trying to work with many different bits of tech. Building websites has been a great help in broadening my base knowldege.<br/><br/>- This website is built using the Nuxt3 framework and deployed on Vercel (wow, that was easy!)`, link:"https://github.com/christywastaken/christianharrison", image: "/blog_post_images/christianharrison.png" },
  { title:"Tweet Sentiment Analysis: Exploring Temporal Patterns", about:"test about section that reads like this", link:"https://github.com/christywastaken/twitter-sentiment-analysis", image:"/blog_post_images/tweet-sentiment-anlysis.png" },
  { title:"Twitscrape - A Seleniumwire Twitter Scraping Package", about:"Test about section that reads like this.", link:"https://pypi.org/project/twitscrape/", image:"blog_post_images/twitscrape.png" },
  { title:"SendJoy Web App", about:"test about section that reads like this", link:"https://sendjoy.app", image:"/blog_post_images/sendjoy.png" },
  { title:"Python API for SendJoy Backend", about:"test about section that reads like this", link:"https://github.com/christywastaken/", image:"/blog_post_images/tweet-sentiment-anlysis.png"},
  { title:"iOS App for SendJoy Backend Utilities", about:"test about section that reads like this", link:"https://github.com/christywastaken/", image:"/blog_post_images/ios-app-sendjoy.png"},
];


