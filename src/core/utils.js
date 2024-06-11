const {usBaseURL,indiaBaseURL} = require('../config/config.json')

export function apiBaseURL(){
    const us_baseURL = usBaseURL
    const india_baseURL = indiaBaseURL
    const country = localStorage.getItem("selectedCountry");
    if(country === "us"){
        return us_baseURL;
    }
    else{
        return india_baseURL;
    }
}