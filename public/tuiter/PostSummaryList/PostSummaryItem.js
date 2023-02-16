const PostSummaryItem = (post) => {
  return(`
    <div class="list-group-item list-group-item-action border-0">
        <div class="wd-post ">
            <div>
                <div class="wd-post-topic-in-list">
                    ${post.topic}
                </div>
                
                <div class="wd-author-handle">
                     ${post.userName} <i class="fas fa-check-circle"></i>
                </div>
                
                <div class="wd-time">
                    - ${post.time}
                </div>
                </br>
                <div class="wd-author-handle">
                    ${post.title}
                </div>
                
                <div class="wd-post-topic-in-list">
                    ${post.tweets === undefined ? '': post.tweets + ' Tweets'}
                </div>
            </div>
        
            <div>
                <img class="wd-post-image" src=${post.image}></img>
            </div>
            
            
        </div>
        
    </div>
`
  );
}
export default PostSummaryItem;



                
