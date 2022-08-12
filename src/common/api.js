import axios from 'axios';

// MOCK-UP DATA
import services from './data/services.json';
import faq from './data/faq.json';
import features from './data/features.json';
import reviews from './data/reviews.json';
import steps from './data/steps.json';
import { apiURL } from 'Common/constants';

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

api.getSteps = () => new Promise(resolve => {
    resolve(steps);
});

api.getBoosters = () => new Promise((resolve, reject) => {
    axios.get(`${apiURL}/api/boosters`).then(response => {
        if (response.error) {
            reject(response);
        } else {
            resolve(response.data);
        }
    }).catch(console.error);
});

export default api;