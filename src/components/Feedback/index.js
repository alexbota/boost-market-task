import React from 'react';
import entityImg from 'Assets/images/entity.png';
import { useTranslation } from 'react-i18next';

export default function Feedback() {
    const [t] = useTranslation();

    const title = 'Apex Legends Boost Services - The Quick And Reliable Choice';

    return (
        <section style={{ marginBottom: '277px' }} className='flex align-items-center'>
            <div style={{ marginRight: '144px' }}>
                <img src={entityImg} alt='' />
            </div>
            <div>
                <h3 className='text-3xl mb-6'>{t(title)}<span className='color-primary'>.</span></h3>
                <div className='flex mb-6'>
                    <div className='mr-6'>
                        <p className='font-bold text-4xl mb-1'>12.342</p>
                        <p className='color-dark font-semibold'>{t('COMPLETED ORDERS')}</p>
                    </div>
                    <div className='mr-6'>
                        <p className='font-bold text-4xl mb-1'>6.343</p>
                        <p className='color-dark font-semibold'>{t('HAPPY CUSTOMER')}</p>
                    </div>
                    <div className='mr-6'>
                        <p className='font-bold text-4xl mb-1'>16</p>
                        <p className='color-dark font-semibold'>{t('EXPERT GAMERS')}</p>
                    </div>
                </div>
                <div className='flex align-items-center'>
                    <img className='mr-3' src={'icons/trustpilot-logo.svg'} alt='' />
                    {[...Array(5)].map((e, index) => {
                        return <img key={index} style={{ margin: '0 1px' }} src={'icons/trust-star.svg'} alt='' />;
                    })}
                    <p className='text-xl font-medium ml-2'>4.9</p>
                </div>
            </div>
        </section>
    );
}