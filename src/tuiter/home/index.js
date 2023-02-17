import PostItem from "./post-item";
import posts from "./posts.js"


const HomeComponent = () => {
   return (
           <div className="list-group border border-light">
            
           {
            posts.map(post => <PostItem
           key={post.title} post={post}/>)
         }

           </div>
); }

export default HomeComponent;
