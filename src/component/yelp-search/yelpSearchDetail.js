import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import Preformatted from "./component/preformatted";
import {Link, useParams} from "react-router-dom";

const YelpSearchDetail = ({
    r = {
        "id": "XZ1_66Wa4tumkbKfTI2dWA",
        "alias": "china-live-san-francisco",
        "name": "China Live",
        "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/vTiacfMNynZlRjC3lmx_8w/o.jpg",
        "is_claimed": true,
        "is_closed": false,
        "url": "https://www.yelp.com/biz/china-live-san-francisco?adjust_creative=7ogyWzylWz1K2-HU2TbO5g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=7ogyWzylWz1K2-HU2TbO5g",
        "phone": "+14157888188",
        "display_phone": "(415) 788-8188",
        "review_count": 1416,
        "categories": [
            {
                "alias": "chinese",
                "title": "Chinese"
            },
            {
                "alias": "cocktailbars",
                "title": "Cocktail Bars"
            },
            {
                "alias": "asianfusion",
                "title": "Asian Fusion"
            }
        ],
        "rating": 3.5,
        "location": {
            "address1": "644 Broadway",
            "address2": "",
            "address3": "",
            "city": "San Francisco",
            "zip_code": "94133",
            "country": "US",
            "state": "CA",
            "display_address": [
                "644 Broadway",
                "San Francisco, CA 94133"
            ],
            "cross_streets": "Stockton St"
        },
        "coordinates": {
            "latitude": 37.7977636140901,
            "longitude": -122.407851420238
        },
        "photos": [
            "https://s3-media4.fl.yelpcdn.com/bphoto/vTiacfMNynZlRjC3lmx_8w/o.jpg",
            "https://s3-media1.fl.yelpcdn.com/bphoto/H4831W1dygbFXQn4OdIgsA/o.jpg",
            "https://s3-media3.fl.yelpcdn.com/bphoto/-yMHtSkd7HPj05QKhU4DRA/o.jpg"
        ],
        "price": "$$",
        "hours": [
            {
                "open": [
                    {
                        "is_overnight": false,
                        "start": "1700",
                        "end": "2100",
                        "day": 0
                    },
                    {
                        "is_overnight": false,
                        "start": "1700",
                        "end": "2100",
                        "day": 1
                    },
                    {
                        "is_overnight": false,
                        "start": "1700",
                        "end": "2100",
                        "day": 2
                    },
                    {
                        "is_overnight": false,
                        "start": "1700",
                        "end": "2100",
                        "day": 3
                    },
                    {
                        "is_overnight": false,
                        "start": "1700",
                        "end": "2130",
                        "day": 4
                    },
                    {
                        "is_overnight": false,
                        "start": "1700",
                        "end": "2130",
                        "day": 5
                    },
                    {
                        "is_overnight": false,
                        "start": "1700",
                        "end": "2100",
                        "day": 6
                    }
                ],
                "hours_type": "REGULAR",
                "is_open_now": true
            }
        ],
        "transactions": [
            "delivery",
            "pickup"
        ],
        "messaging": {
            "url": "https://www.yelp.com/raq/XZ1_66Wa4tumkbKfTI2dWA?adjust_creative=7ogyWzylWz1K2-HU2TbO5g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_lookup&utm_source=7ogyWzylWz1K2-HU2TbO5g#popup%3Araq",
            "use_case_text": "Message the Business"
        }
    }
                          }) => {
    const [restaurant, setRestaurant] = useState();
    const searchUrl = 'http://localhost:4000/api/yelp/businesses';
    const searchIDStr = useParams();
    console.log(searchIDStr)
    const searchByID = async () => {
        const response = await axios.get(`${searchUrl}/${searchIDStr._id}`);
        setRestaurant(response.data)

    }
    useEffect(()=>{searchByID()},[])

    return (
        <>
            <h1>{restaurant?.name}</h1>
            <button className="btn btn-outline-primary mb-3"><Link to="/search">Back</Link></button>
            <p><i className="fa-solid fa-star"/>{restaurant?.rating}</p>
            <p><i className="fa-solid fa-comment"/>{restaurant?.review_count}</p>
            <p><i className="fa-solid fa-phone"/>{restaurant?.phone}</p>
            <p className="lg">Address:
                {restaurant?.location.address1},
                {restaurant?.location.city},
                {restaurant?.location.state},
                {restaurant?.location.zip_code}
            </p>
            <h2>More pictures</h2>
            <div className="list-group">
                <li className="list-group-item"><img className="w-100" src={restaurant?.photos[0]}/></li>
                <li className="list-group-item"><img className="w-100" src={restaurant?.photos[1]}/></li>
                <li className="list-group-item"><img className="w-100" src={restaurant?.photos[2]}/></li>

            </div>

            {/*<Preformatted obj={restaurant}/>*/}


        </>
    );
};

export default YelpSearchDetail;