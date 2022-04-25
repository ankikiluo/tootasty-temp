import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Preformatted from "./component/preformatted";
import YelpSearchListItem from "./yelpSearchListItem";
// import {findRestaurantsByKeyword} from "./yelp-search-action";

const YelpSearchResList = () => {
    const keywordSearchRef = useRef();
    const [restaurants, setRestaurants] = useState();
    const searchUrl = 'http://localhost:4000/api/yelp/businesses/search';
    const searchByKeyword = async () => {
        console.log(keywordSearchRef.current.value);
        const searchKeywordStr = keywordSearchRef.current.value || "china";
        const response = await axios.get(`${searchUrl}/${searchKeywordStr}`);
        setRestaurants(response.data.businesses)

    }
    useEffect(()=>{searchByKeyword()},[])
        return (
            <div>
                <h1>Yelp Search</h1>
                <div className="flex mb-4">
                    <div className="row">
                        <div className="col-11">
                            <input ref={keywordSearchRef}
                                   className="form-control" type="text" placeholder="Search"/>
                        </div>
                        <div className="col-1">
                            <button onClick={searchByKeyword}
                                type="button" className="btn btn-outline-primary hero-btn">Search</button>
                        </div>
                    </div>
                </div>
                {/*<Preformatted obj={restaurants}/>*/}
                <ul className="list-group">
                    {restaurants && restaurants?.map(r => (
                        <YelpSearchListItem restaurant={r}/>
                    ))}
                    {/*<YelpSearchListItem />*/}
                </ul>
            </div>
        );
}

export default YelpSearchResList;