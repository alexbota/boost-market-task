import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'Components/shared/UnstyledComponents';
import { StyledList } from 'Components/Steps/styled';
import rankingImg from 'Assets/images/ranking.png';

export default function Steps({ stepsData }) {
    const [selection, setSelection] = useState(0);
    const [t] = useTranslation();

    return (
        <section style={{ marginBottom: '180px' }}>
            <h3 className='text-lg color-primary'>{t('Rank-up process')}</h3>
            <h2 className='mb-8 text-5xl'>{t('How It Works')}<span className='color-primary'>.</span></h2>
            <div className='flex mb-8'>
                {stepsData.map((step, index) => {
                    const selected = selection === index;
                    return (
                        <>
                            <div key={index} onClick={() => setSelection(index)}
                                className={selected ?
                                    'background-secondary w-4 flex align-items-center relative cursor-pointer'
                                    :
                                    'background-primary w-4 flex align-items-center relative cursor-pointer'
                                }
                                style={{
                                    borderRadius: '42px',
                                    padding: '30px 36px'
                                }}
                            >
                                {index === selection &&
                                    <img className='absolute w-full' style={{ left: 0, top: 46, zIndex: -1 }} src={'icons/bubble.svg'} alt='' />
                                }
                                <img className='mr-5 align-self-start' src={step.icon} alt='' />
                                <div>
                                    <p className={selected ? 'text-white font-semibold text-2xl mb-3' : 'color-secondary font-semibold text-2xl mb-3'}>{t(step.short_title)}</p>
                                    <p className={selected ? 'color-medium-grey text-xl' : 'color-dark text-xl'}>{t(step.short_description)}</p>
                                </div>
                            </div>
                            {index < 2 && <img className='mx-3' src={'icons/arrow-right.svg'} alt='' />}
                        </>
                    );
                })}
            </div>
            <div style={{
                borderRadius: '50px',
                padding: '119px 110px',
            }} className='background-primary flex align-items-center justify-content-between'>
                <div className='mr-8'>
                    <p className='font-bold text-2xl color-primary'>0{selection + 1}.</p>
                    <p className='font-bold text-4xl mb-4'>{t(stepsData[selection].title)}</p>
                    <p className='color-dark mb-3 text-xl'>{t(stepsData[selection].description)}</p>
                    {stepsData[selection].list.length > 0 && (
                        <StyledList className='color-dark mb-6 text-xl'>
                            {stepsData[selection].list.map((list, index) => {
                                return <li className='mb-3' key={index}>{list}</li>;
                            })}
                        </StyledList>
                    )}
                    <Button
                        style={{ borderRadius: '20px', padding: '20px 70px' }}
                        className='flex align-items-center justify-content-center font-semibold text-lg background-tertiary text-white'
                    >
                        Try now!
                    </Button>
                </div>
                <img className='ml-8' src={rankingImg} alt='' />
            </div>
        </section>
    );
}