import React from "react";
import {Link} from "react-router-dom";
import "./yelp-search.css"

const YelpSearchListItem = ({
                                restaurant = {
                                    "id": "bUllrq8bcGbn9TKtVcjL-A",
                                    "alias": "izakaya-yoki-san-francisco-2",
                                    "name": "Izakaya Yoki",
                                    "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Nn-JV7RE8teR0wWSU0MaOQ/o.jpg",
                                    "is_closed": false,
                                    "url": "https://www.yelp.com/biz/izakaya-yoki-san-francisco-2?adjust_creative=7ogyWzylWz1K2-HU2TbO5g&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search & utm_source = 7ogyWzylWz1K2-HU2TbO5g",
                                    "review_count": 328,
                                        "categories": [
                                        {
                                            "alias": "japanese",
                                            "title": "Japanese"
                                        },
                                        {
                                            "alias": "korean",
                                            "title": "Korean"
                                        }
                                    ],
                                        "rating": 4.5,
                                        "coordinates": {
                                        "latitude": 37.789884,
                                            "longitude": -122.412317
                                    },
                                    "transactions": [
                                        "restaurant_reservation",
                                        "delivery",
                                        "pickup"
                                    ],
                                        "price": "$$",
                                        "location": {
                                        "address1": "900 Bush St",
                                            "address2": "Ste C101",
                                            "address3": null,
                                            "city": "San Francisco",
                                            "zip_code": "94109",
                                            "country": "US",
                                            "state": "CA",
                                            "display_address": [
                                            "900 Bush St",
                                            "Ste C101",
                                            "San Francisco, CA 94109"
                                        ]
                                    },
                                    "phone": "+14159231141",
                                        "display_phone": "(415) 923-1141",
                                        "distance": 3858.1284480407476
                                }
                            }) => {
        return(
            <>
                {/*<img src="https://s3-media2.fl.yelpcdn.com/bphoto/Nn-JV7RE8teR0wWSU0MaOQ/o.jpg"/>*/}
                <Link to={`/detail/${restaurant.id}`}>
                    {/*<li className="list-group-item">*/}
                    {/*    {restaurant.image_url}*/}
                    {/*    <img src={restaurant.image_url}/>*/}
                    {/*</li>*/}
                    <li className="text-white list-group-item justify-content-between align-items-center">
                        <div className="homepage-list-child row">
                            <div className="col-12 col-md-4">
                                <img className="yelp-search-img" src={restaurant.image_url} alt=""/>
                            </div>
                            <div className="text p-2 col-md-8">
                                <h5>{restaurant.name}</h5>
                                <p><i className="fa-solid fa-star"/>{restaurant.rating}</p>
                                <p className="lg">Address:
                                    {restaurant.location.address1},
                                    {restaurant.location.city},
                                    {restaurant.location.state},
                                    {restaurant.location.zip_code}
                                </p>
                            </div>
                        </div>
                    </li>
                </Link>
            </>
        )
    }
    export default YelpSearchListItem;