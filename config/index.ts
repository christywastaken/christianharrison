import { MenuItem } from "../types";
import { BlogPostItem } from "../types";

export const menuItems: MenuItem[] = [
  { name: "index", display: "Home" },
  { name: "portfolio", display: "Portfolio" },
  { name: "contact", display: "Contact" },
 
];

export const blogPostItems: BlogPostItem[] = [
  { title: "This Website", about:"This website serves as both a learning experience and a portfolio to showcase my learning.", link:"https://github.com/christywastaken/christianharrison", image: "/blog_post_images/christianharrison.png" },
  { title:"Tweet Sentiment Analysis: Exploring Temporal Patterns", about:"test about section that reads like this", link:"https://github.com/christywastaken/twitter-sentiment-analysis", image:"/blog_post_images/tweet-sentiment-anlysis.png" },
  { title:"SendJoy Web App", about:"test about section that reads like this", link:"https://sendjoy.app", image:"/blog_post_images/sendjoy.png" },
  { title:"Python API for SendJoy Backend", about:"test about section that reads like this", link:"https://github.com/christywastaken/", image:"/blog_post_images/tweet-sentiment-anlysis.png"},
  { title:"iOS App for SendJoy Backend Utilities", about:"test about section that reads like this", link:"https://github.com/christywastaken/", image:"/blog_post_images/ios-app-sendjoy.png"},
];


