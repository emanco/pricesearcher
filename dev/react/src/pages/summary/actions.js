import axios from 'axios';


const loader = axios.create({
    baseURL: 'https://pricesearcher-frontend-test.herokuapp.com/',
    headers: {'x-api-key': '46c0a1e171c76bb37784d60aad4df750'}
});

// const getCustomer = (id) => {
//     return loader.get('customers/'+id+'/customer-summary/');
// };

const getProducts = (id, page) => {
    console.log(page);
    if (id) {
        return loader.get('products/?q='+id);
    } else {
        if (page) {
            console.log('found page');
            return loader.get('products/?_page='+page+'&_limit=30');
        } else {
            return loader.get('products/?_page=1&_limit=30');
        }

    }

}

// const getOrders = (id) => {
//     //return loader.get('customers/'+id+'/customer-summary/', );
//     // user heroku for the time being until swagger is okay to go
//     return axios.get('https://mog-api.herokuapp.com/orders/');
//
// };

// const getPrescriptions = (id) => {
//     return axios.get('https://mog-api.herokuapp.com/prescriptions/')
// }

const getData = (id, page) => {
    return {
        type: 'FETCH_DATA',
        payload: axios.all([getProducts(id, page)/*, getOrders(id), getPrescriptions(id)*/])
    }
};



export { getData, getProducts/*, getCustomer, getOrders*/ };