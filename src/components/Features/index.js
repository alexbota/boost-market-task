import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'Components/shared/UnstyledComponents';

export default function Features({ featuresData }) {
    const [t] = useTranslation();

    const text = {
        subtitle: 'WHY US?',
        title: 'Our Key Features',
        description: 'Forget about frustrating games, reach your deserved rank effortlessly. Whether you\'re purchasing League, Valorant, or Wild Rift Boosting, you are privileged to all premium features.'
    };

    return (
        <section style={{
            height: '522px',
            borderRadius: '50px',
            padding: '119px 110px',
            marginBottom: '180px'
        }} className='background-primary flex align-items-center relative'>
            <div>
                <h3 className='text-lg color-primary'>{t(text.subtitle)}</h3>
                <h2 className='text-5xl mb-3'>{t(text.title)}<span className='color-primary'>.</span></h2>
                <p className='max-w-30rem font-normal text-lg mb-6'>{t(text.description)}</p>
                <Button
                    style={{ borderRadius: '20px', padding: '20px 70px' }}
                    className='flex align-items-center justify-content-center font-semibold text-lg background-tertiary text-white'
                >
                    Try now!
                </Button>
            </div>
            <div style={{ right: 100 }} className='absolute flex gap-5'>
                <div className='flex flex-column gap-5'>
                    {featuresData.slice(0, 2).map((feature, index) => {
                        return (
                            <div key={index} className='col-6 background-secondary text-white flex flex-column justify-content-center'
                                style={{
                                    width: '280px',
                                    height: '340px',
                                    borderRadius: '48px',
                                    padding: '45px 42px'
                                }}
                            >
                                <img className='h-4rem align-self-start mb-5' src={feature.icon} alt='' />
                                <p className='font-bold text-lg mb-3'>{t(feature.title)}</p>
                                <p className='color-medium-grey'>{t(feature.description)}</p>
                            </div>
                        );
                    })}
                </div>
                <div className='flex flex-column gap-5 mt-8'>
                    {featuresData.slice(2, 4).map((feature, index) => {
                        return (
                            <div key={index} className='col-6 background-secondary text-white flex flex-column justify-content-center'
                                style={{
                                    width: '280px',
                                    height: '340px',
                                    borderRadius: '48px',
                                    padding: '45px 42px'
                                }}
                            >
                                <img className='h-4rem align-self-start mb-5' src={feature.icon} alt='' />
                                <p className='font-bold text-lg mb-3'>{t(feature.title)}</p>
                                <p className='color-medium-grey'>{t(feature.description)}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}