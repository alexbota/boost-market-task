import React, { useEffect, useState } from 'react';
import MainLayout from 'Hoc/MainLayout';
import API from 'Common/api';

// COMPONENTS
import Hero from 'Components/Hero';
import Services from 'Components/Services';
import Feedback from 'Components/Feedback';
import Features from 'Components/Features';
import Reviews from 'Components/Reviews';
import Steps from 'Components/Steps';
import Faq from 'Components/Faq';
import Boosters from 'Components/Boosters';

export default function Apex() {
    const [servicesData, setServicesData] = useState([]);
    const [featuresData, setFeaturesData] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);
    const [stepsData, setStepsData] = useState([]);
    const [faqData, setFaqData] = useState([]);
    const [boostersData, setBoostersData] = useState([]);

    useEffect(() => {
        if (servicesData.length === 0) {
            API.getServices().then(res => setServicesData(res));
        }
    }, [servicesData]);

    useEffect(() => {
        if (featuresData.length === 0) {
            API.getFeatures().then(res => setFeaturesData(res));
        }
    }, [featuresData]);

    useEffect(() => {
        if (reviewsData.length === 0) {
            API.getReviews().then(res => setReviewsData(res));
        }
    }, [reviewsData]);

    useEffect(() => {
        if (stepsData.length === 0) {
            API.getSteps().then(res => setStepsData(res));
        }
    }, [stepsData]);

    useEffect(() => {
        if (faqData.length === 0) {
            API.getFaq().then(res => setFaqData(res));
        }
    }, [faqData]);

    useEffect(() => {
        if (boostersData.length === 0) {
            API.getBoosters().then(res => setBoostersData(res));
        }
    }, [boostersData]);
    console.log(boostersData);
    return (
        <MainLayout>
            <Hero />
            {servicesData.length > 0 && <Services servicesData={servicesData} />}
            <Feedback />
            {featuresData.length > 0 && <Features featuresData={featuresData} />}
            {boostersData.length > 0 && <Boosters boostersData={boostersData} />}
            {reviewsData.length > 0 && <Reviews reviewsData={reviewsData} />}
            {stepsData.length > 0 && <Steps stepsData={stepsData} />}
            {faqData.length > 0 && <Faq faqData={faqData} />}
        </MainLayout>
    );
}