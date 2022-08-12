import React from 'react';
import robotImg from 'Assets/images/robot.png';
import { useTranslation } from 'react-i18next';
import Dropdown from 'Components/Faq/Dropdown';

export default function Faq({ faqData }) {
    const [t] = useTranslation();

    return (
        <section style={{ marginBottom: '180px' }} className='grid'>
            <div className='col-2 flex flex-column justify-content-between'>
                <div>
                    <h3 className='text-lg color-primary'>{t('Experience flow')}</h3>
                    <h2 className='mb-8 text-5xl'>{t('Frequently Asked Questions')}<span className='color-primary'>.</span></h2>
                </div>
                <div className='h-30rem w-auto'>
                    <img className='h-full w-auto' src={robotImg} alt='' />
                </div>
            </div>
            <div className='col-1' />
            <div className='col-9'>
                {faqData.map((faq, index) => {
                    return <Dropdown key={index} faq={faq} />;
                })}
            </div>
        </section>
    );
}