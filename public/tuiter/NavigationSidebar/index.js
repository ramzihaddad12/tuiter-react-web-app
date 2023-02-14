const NavigationSidebar = () => {
 return(`
   <div class="list-group border-0">
                <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>

                <div class="list-group-item list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-home"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Home
                        </div>
                    </div>
                </div>
                
                <div class="list-group-item active list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-hashtag"></i>  
                        </div>
                        <div class=" d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Explore
                        </div>
                    </div>
                </div>
                
                <div class="list-group-item list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-bell"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Notifications
                        </div>
                    </div>
                </div>
                
                <div class="list-group-item list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-envelope"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Messages
                        </div>
                    </div>
                </div>
                
                <div class="list-group-item list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-bookmark"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Bookmarks
                        </div>
                    </div>
                </div>
                
                <div class="list-group-item list-group-item-action border-0">
                   <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-newspaper"></i>
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Top Articles
                        </div>
                    </div>
                </div>
                
                <div class="list-group-item list-group-item-action border-0">
                   <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-user"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Profile
                        </div>
                    </div>
                </div>
                
                <div class="list-group-item list-group-item-action border-0">
                   <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-comment-dots"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            More
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-grid mt-2">
              <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>

 `);
}
export default NavigationSidebar;

            