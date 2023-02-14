import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./who.js"


const WhoToFollowList = () => {
   return (`
   <div class="list-group border border-light ">
           <div class="list-group-item list-group-item-action border-0">
                    <b style="color:white">Who to follow</b>
            </div>
            

           ${
            whos.map(who => {
               return(WhoToFollowListItem(who));
            }).join('')
         }

            </div>
`); }

export default WhoToFollowList;
