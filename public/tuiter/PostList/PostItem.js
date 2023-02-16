const PostItem = (post) => {
  return(`
    <div class="list-group-item list-group-item-action border-bottom">
        <div class="row ">
        <div class="col-1 col-sm-1">
            <img class="wd-tweet-img-avatar mt-1 me-2" src="../../img/${post.avatarIcon}"></img>
        </div>
        
        <div class="col-11 mt-2 col-sm-11">
            <div>
                <div class="wd-author-handle">
                    ${post.title} <i class="fas fa-check-circle"></i>
                </div>
                
                <div class="wd-author-handle" style="color:darkgrey">
                    @${post.handle}
                </div>
                
                <div class="wd-time">
                    - ${post.time}
                </div>
            </div>
            
            <div>
                ${post.text}
                <img class="wd-tweet-main-image mt-2" src="../../img/${post.tweetImage}"></img>
            </div>
            
            <div class="wd-flex-impressions mt-2">
                <div>
                     <i class="far fa-comment-dots"></i> ${post.numOfReplies}
                </div>
                
                <div>
                    <i class="fas fa-retweet"></i> ${post.numOfRTs}
                </div>
           
            
                <div>
                    <i class="far fa-heart"></i> ${post.numOfLikes}
                </div>
                
                <div>
                    <i class="fas fa-upload"></i> 
                </div>
                
            </div>
    
    </div>
        </div>
    </div>
`
  );
}
export default PostItem;

