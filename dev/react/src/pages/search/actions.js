import axios from 'axios';


const loader = axios.create({
    baseURL: 'https://pricesearcher-frontend-test.herokuapp.com/',
    headers: {'x-api-key': '46c0a1e171c76bb37784d60aad4df750'}
});

// const getCustomer = (id) => {
//     return loader.get('customers/'+id+'/customer-summary/');
// };

const getProducts = (id) => {
    if (id) {
        console.log('query is '+id);
        return loader.get('products/?q='+id+'&_limit=30');
    }

}

const getData = (id) => {
    return {
        type: 'FETCH_DATA',
        payload: axios.all([getProducts(id)/*, getOrders(id), getPrescriptions(id)*/])
    }
};



export { getData, getProducts/*, getCustomer, getOrders*/ };