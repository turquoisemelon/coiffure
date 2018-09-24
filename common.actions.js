export const COMMON_ACTIONS = {
    SALON_INFO_RECEIVED: 'SALON_INFO_RECEIVED'
}

export const getSalonInfo = (info) => {
    const YELP_API_KEY = process.env.yelpApiKey;
    const fetchUrl = `https://api.yelp.com/v3/businesses/search?term=hair&latitude=43.653908&longitude=-79.384293`;
    return fetch(fetchUrl, {
      method: 'GET',
      headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${YELP_API_KEY}`
    }}).then((response) => response.json(), 
    (error) => {
      console.error('error', error)
    }).then((json) => {
      this.setState({ data: json })
    }).catch((ex) => {
      console.log('parsing failed', ex)
    });
    return {
        type: COMMON_ACTIONS.SALON_INFO_RECEIVED,
        payload: info
    }
}