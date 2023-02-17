import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";

const PostItem = (
 {
   post = {
       text: 'Finally going to Mars! Brace yourselves and save the date, 1/7/29',
       handle: 'nasa',
       title: 'NASA',
       time: '2h',
       avatarIcon: 'nasa.png',
       tweetImage: 'starship.png',
       numOfReplies: '4.2K',
       numOfLikes: '3.5K',
       numOfRTs: '27.2K'
   }
 }
) => {
 return(
    <li className="list-group-item">
       <div className="row">
         <div className="col-2">
           <img width={70} className="float-end rounded-3" src={`/img/${post.avatarIcon}`}/>
         </div>
         <div className="col-10">
         <div>
                <div className="wd-tweeter">
                    <b>{post.title}</b> <i className="wd-icon-color fa-solid fa-circle-check"></i>
                </div>
                
                <div className="wd-tweeter">
                     @{post.handle} 
                </div>
                
                <div className="wd-tweeter">
                     - {post.time} 
                </div>
         </div>
         
         <div>
                {post.text}
                <img className="wd-tweet-main-image mt-2" src={`/img/${post.tweetImage}`}></img> 
         </div>
         
         <div className="wd-flex-impressions mt-2">
                <div>
                     <i className="fa-regular fa-comment"></i> {post.numOfReplies}
                </div>
                
                <div>
                    <i className="fa-solid fa-retweet"></i> {post.numOfRTs}
                </div>
           
            
                <div>
                    <i className="fa-regular fa-heart"></i> {post.numOfLikes}
                </div>
                
                <div>
                    <i className="fa-solid fa-upload"></i> 
                </div>
                
        </div>
            

         </div>
         
       </div>
  </li>
  );
}
export default PostItem;

