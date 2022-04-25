import yelp from 'yelp-fusion'
const client = yelp.client('1wlU5YQHyNhUchE04oorjxwgZMFenZJDInO5TzQP6dVNMSevR-0IiK0D5NbhfvewdjWArJ9DBvh5Kajp_XrqICOXLD9Y1GMBK-rMx2wlnQ_6PeeRTE6-TJPVX3NjYnYx');

const yelpSearchController = (app) => {
    app.get('/api/yelp/businesses/search/:keyword', findResByKeyword);
    app.get('/api/yelp/businesses/:_id', findResDetailByID);

}

const findResByKeyword = async (req, res) => {
    const keyword = req.params['keyword'];
    // console.log(keyword);
    const restaurants = await client.search({term: keyword,
                                      location: 'USA',
                                      limit: 5,})
                                .catch(e => console.log(e));
    res.json(restaurants.jsonBody);
    const prettyJson = JSON.stringify(restaurants.jsonBody, null, 4);
    // const firstResult = restaurants.jsonBody.businesses[0];
    // const prettyJson = JSON.stringify(firstResult, null, 4);
    // console.log(prettyJson);
    // console.log(restaurants);
}

const findResDetailByID = async (req, res) => {
    const _id = req.params._id;
    const restaurant = await client.business(_id).catch(e => console.log(e));
    res.json(restaurant.jsonBody);
    const prettyJson = JSON.stringify(restaurant.jsonBody, null, 4);
    // console.log(prettyJson);
}

export default yelpSearchController;