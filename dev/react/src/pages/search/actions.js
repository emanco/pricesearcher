import axios from 'axios';


const loader = axios.create({
    baseURL: 'https://pricesearcher-frontend-test.herokuapp.com/',
    headers: {'x-api-key': '46c0a1e171c76bb37784d60aad4df750'}
});


const getProducts = (id) => {
    if (id) {
        console.log('query is '+id);
        return loader.get('products/?q='+id+'&_limit=100');
    }

}

const getData = (id) => {
    return {
        type: 'FETCH_DATA',
        payload: axios.all([getProducts(id)/*, getProduct(id)*/])
    }
};



export { getData, getProducts };