import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {tuitToggle} from "../reducers/feed-tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks"
const TuitStats = (
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

    const toggleTuitLike = (tuit) => {
        dispatch(tuitToggle(tuit))
    }

    return (
        <div className="wd-flex-impressions mt-2">
            <div>
                <i className="fa-regular fa-comment"></i> {tuit.replies}
            </div>

            <div>
                <i className="fa-solid fa-retweet"></i> {tuit.retuits}
            </div>


            <div>
                    <i onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        likes: tuit.likes + 1
                    }))}
                       style={{
                           // Ternary operator to conditionally set color
                           color: tuit.liked ? 'red' : 'lightgrey'
                       }}
                       className="bi bi-heart-fill me-2 text-danger"></i> {tuit.likes}

            </div>

            <div>

                <i className="fa-solid fa-upload"></i>
            </div>

        </div>

    );
};
export default TuitStats;