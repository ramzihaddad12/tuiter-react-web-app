const NavigationSidebar = (active) => {
 return(`
   <div class="list-group border-0">
                <a class="list-group-item" href="/"><i class="fab fa-twitter"></i></a>

                <a href="../home/index.html" class="list-group-item ${active == 'home' ? 'active' : ''} list-group-item-action border-0">
                    <div  class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-home"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Home
                        </div>
                    </div>
                </a>
                
                <a href="../explore/index.html" class="list-group-item ${active == 'explore' ? 'active' : ''} list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-hashtag"></i>  
                        </div>
                        <div class=" d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Explore
                        </div>
                    </div>
                </a>
                
                <a class="list-group-item ${active == 'notifications' ? 'active' : ''} list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-bell"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Notifications
                        </div>
                    </div>
                </a>
                
                <a class="list-group-item ${active == 'messages' ? 'active' : ''} list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-envelope"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Messages
                        </div>
                    </div>
                </a>
                
                <a class="list-group-item ${active == 'bookmarks' ? 'active' : ''} list-group-item-action border-0">
                    <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-bookmark"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Bookmarks
                        </div>
                    </div>
                </a>
                
                <a class="list-group-item ${active == 'top-articles' ? 'active' : ''} list-group-item-action border-0">
                   <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-newspaper"></i>
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Top Articles
                        </div>
                    </div>
                </a>
                
                <a class="list-group-item ${active == 'profile' ? 'active' : ''} list-group-item-action border-0">
                   <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-user"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            Profile
                        </div>
                    </div>
                </a>
                
                <a class="list-group-item ${active == 'more' ? 'active' : ''} list-group-item-action border-0">
                   <div class="row">
                        <div class="col-12 col-xl-2 col-xxl-2">
                            <i class="fas fa-comment-dots"></i>  
                        </div>
                        <div class="d-none d-xl-block col-12 col-xl-10 col-xxl-10">
                            More
                        </div>
                    </div>
                </a>
            </div>
            <div class="d-grid mt-2">
              <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">Tweet</a>
            </div>

 `);
}
export default NavigationSidebar;

            