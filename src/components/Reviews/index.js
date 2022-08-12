import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'Components/shared/UnstyledComponents';

export default function Reviews({ reviewsData }) {
    const [t] = useTranslation();
    const [currentReview, setCurrentReview] = useState(0);

    const handlePrev = () => {
        if (currentReview <= 0) {
            setCurrentReview(reviewsData.length - 1);
        } else {
            setCurrentReview(currentReview - 1);
        }
    };

    const handleNext = () => {
        if (currentReview >= reviewsData.length - 1) {
            setCurrentReview(0);
        } else {
            setCurrentReview(currentReview + 1);
        }
    };

    return (
        <section style={{ marginBottom: '160px' }}>
            <h3 className='text-lg color-primary'>{t('REVIEWS')}</h3>
            <h2 className='mb-8 text-5xl'>{t('What Clients Says')}<span className='color-primary'>.</span></h2>
            <div className='flex justify-content-between'>
                <div>
                    <div className='flex mb-7'>
                        <Button onClick={handlePrev} className='background-primary border-circle w-3rem h-3rem text-2xl mr-3'>&lt;</Button>
                        <Button onClick={handleNext} className='background-primary border-circle w-3rem h-3rem text-2xl'>&gt;</Button>
                    </div>
                    <div className='flex align-items-end'>
                        <img src={'icons/quote.svg'} alt='' />
                        <img src={'icons/quote.svg'} alt='' />
                    </div>
                    <div style={{ left: 40, bottom: 25, width: '45rem' }} className='relative'>
                        <h2 style={{ lineHeight: 0.9 }} className='text-5xl color-primary mb-4'>{reviewsData[currentReview].name}</h2>
                        <p className='text-3xl mb-6'>{t(reviewsData[currentReview].review)}</p>
                        <div className='background-secondary flex align-items-center justify-content-center text-white'
                            style={{
                                borderRadius: '30px',
                                padding: '8px 24px',
                                width: 'fit-content'
                            }}
                        >
                            <img src={'icons/star-primary.svg'} className='mr-2' alt='' /> {reviewsData[currentReview].rating}
                        </div>
                    </div>
                </div>
                <div className='background-secondary text-white flex flex-column justify-content-center align-items-center'
                    style={{
                        borderRadius: '50px',
                        padding: '78px 40px'
                    }}
                >
                    <img className='mb-5' src={'icons/reviewsio-logo.svg'} alt='' />
                    <p className='text-4xl font-medium mb-4'>{t('Excellent!')}</p>
                    <div className='background-tertiary flex align-items-center justify-content-evenly mb-6'
                        style={{
                            borderRadius: '23px',
                            padding: '6px 20px',
                            width: '204px'
                        }}
                    >
                        <img src={'icons/star.svg'} alt='' />
                        <img src={'icons/star.svg'} alt='' />
                        <img src={'icons/star.svg'} alt='' />
                        <img src={'icons/star.svg'} alt='' />
                        <img src={'icons/star-half.svg'} alt='' />
                    </div>
                    <div className='flex justify-content-between align-items-center'>
                        <div className='flex flex-column align-items-center'>
                            <p className='text-4xl font-semibold'>4.86</p>
                            <p className='color-medium-grey font-regular text-l'>{t('AVARAGE')}</p>
                        </div>
                        <div className='mx-8' style={{ width: '1.5px', background: '#414449', height: '24px' }} />
                        <div className='flex flex-column align-items-center'>
                            <p className='text-4xl font-semibold'>2066</p>
                            <p className='color-medium-grey font-regular text-l'>{t('REVIEWS')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}