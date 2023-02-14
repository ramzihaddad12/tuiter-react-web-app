import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="border border-light">
            <div class="row">
             <div class="col-12 col-sm-11">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent"><i class="fa fa-search"></i></span>
                    </div>
                    <input class="form-control wd-rounded-corners-all-around" type="text" placeholder="Search Tuiter" name="search">
                </div>
             </div>
             
             <div class="col-12 col-sm-1">
                  <a href="explore-settings.html"><i class="pt-1 fas fa-cog fa-2x"></i></a>
             </div>
             
            </div>
            <ul class="nav mb-2 mt-2 nav-tabs">
                   <li class="nav-item active ms-2">
                       <a class="nav-link active" href="for-you.html">For You</a>
                   </li>
                   <li class="nav-item ms-2">
                       <a class="nav-link" href="trending.html">Trending</a>
                   </li>
                   <li class="nav-item ms-2">
                       <a class="nav-link" href="news.html">News</a>
                   </li>
                   <li class="nav-item ms-2">
                       <a class="nav-link" href="sports.html">Sports</a>
                   </li>
                   <li class="nav-item ms-2">
                       <a class="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                   </li>
            </ul>
        </div>
        
        
        <div class="wd-main">
            <img class = "wd-main-image" src="../../img/starship.png"></img>
            <span class="wd-overlay-text">SpaceX's Starship</span>
        </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;



