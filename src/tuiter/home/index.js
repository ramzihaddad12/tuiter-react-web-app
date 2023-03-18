import PostItem from "./post-item";
import posts from "./posts.js"
import TuitsList from "../tuits/TuitsList";
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
   return (
           <div>
               <h1>Home</h1>
               <WhatsHappening/>
               <TuitsList/>
           </div>
); }

export default HomeComponent;
