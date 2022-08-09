import axios from 'axios';

// MOCK-UP DATA
import services from './data/services.json';
import faq from './data/faq.json';
import features from './data/faq.json';
import reviews from './data/reviews.json';
import trustpilot from './data/trustpilot.json';
import tutorial from './data/tutorial.json';

const api = {};

api.getServices = () => new Promise(resolve => {
    resolve(services);
});

api.getFaq = () => new Promise(resolve => {
    resolve(faq);
});

api.getFeatures = () => new Promise(resolve => {
    resolve(features);
});

api.getReviews = () => new Promise(resolve => {
    resolve(reviews);
});

api.getTrustPilot = () => new Promise(resolve => {
    resolve(trustpilot);
});

api.getTutorial = () => new Promise(resolve => {
    resolve(tutorial);
});

api.getApex = productIds => new Promise((resolve, reject) => {
    axios.get('/product/search?references=' + productIds.join(',')).then(response => {
        if (response.error) {
            reject(response);
        } else {
            resolve(response.data);
        }
    }).catch(console.error);
});