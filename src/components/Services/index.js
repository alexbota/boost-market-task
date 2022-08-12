import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Services({ servicesData }) {
    const [t] = useTranslation();

    return (
        <section style={{ marginBottom: '180px' }}>
            <h3 className='text-lg color-primary'>{t('WHAT WE OFFER')}</h3>
            <h2 className='mb-8 text-5xl'>{t('Our services')}<span className='color-primary'>.</span></h2>
            <div style={{ margin: '0 -260px 0 0', height: '366px' }} className='relative overflow-x-hidden'>
                <div className='absolute flex'>
                    {servicesData && servicesData.map((service, index) => {
                        return (
                            <div style={{ height: '366px', width: '272px' }} className='relative mr-3 font-semibold'
                                key={index}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        borderRadius: '48px',
                                        width: '272px',
                                        height: '360px',
                                        padding: '60px 30px'
                                    }}
                                    className='flex flex-column justify-content-center align-items-center background-primary z-1'
                                >
                                    <p className='text-lg'>{service.title}</p>
                                    <img src={service.icon} alt=""/>
                                </div>
                                <div style={{
                                    position: 'absolute',
                                    borderRadius: '50px',
                                    top: 6,
                                    width: '272px',
                                    height: '360px',
                                    padding: '60px 30px'
                                }} className='background-tertiary' />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}