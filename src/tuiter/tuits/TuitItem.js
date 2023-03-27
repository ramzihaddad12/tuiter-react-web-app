import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "./index.css";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/feed-tuits-reducer";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit =
            {
                _id: 234,
                topic: "Space",
                userName: "SpaceX",
                time: "2h",
                title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
                image: "spacex.png",

                liked: true,
                replies: 123,
                retuits: 432,
                likes: 2345,
                handle: "@spacex",
                tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
            }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return(
        <li className="list-group-item">


            <div className="row">
                <div className="col-2">
                    <img width={60} className="float-end rounded-5" src={`/img/${tuit.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <div className="wd-tweeter">
                            <b>{tuit.userName}</b> <i className="wd-icon-color fa-solid fa-circle-check"></i>
                        </div>

                        <div className="wd-tweeter">
                            {tuit.handle}
                        </div>

                        <div className="wd-tweeter">
                            - {tuit.time}
                        </div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}></i>
                    </div>

                    <div>
                        {tuit.tuit}
                        {/*<img className="wd-tweet-main-image mt-2" src={`/img/${tuit.tweetImage}`}></img>*/}
                    </div>

                    <TuitStats tuit={tuit}/>

                </div>

            </div>
        </li>
    );
}
export default TuitItem;

