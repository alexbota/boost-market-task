import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Boosters({ boostersData }) {
    const [t] = useTranslation();
    const [isSelected, setIsSelected] = useState(1);

    return (
        <section style={{ marginBottom: '180px' }}>
            <h3 className='text-lg color-primary'>{t('OUR BOOSTERS')}</h3>
            <h2 className='mb-6 text-5xl'>{t('Browse the best of the best')}<span className='color-primary'>.</span></h2>
            <div style={{ margin: '0 -260px 0 0', height: '590px' }} className='relative overflow-x-hidden'>
                <div className='absolute flex gap-5'>
                    {boostersData.map((booster, index) => {
                        const selected = isSelected === index;
                        return (
                            <div key={index} className='flex flex-column align-items-center justify-content-end'>
                                {booster.vip && <div className={selected ? 'relative background-tertiary' : 'relative background-secondary'}
                                    style={{
                                        borderRadius: '26px',
                                        padding: '5px 15px',
                                        width: 'fit-content',
                                        top: '20px',
                                        zIndex: 1
                                    }}
                                >
                                    <p className='text-m font-bold text-white'>VIP BOOSTER</p>
                                </div>}
                                <div className={selected ?
                                    'background-secondary flex flex-column align-items-center cursor-pointer relative'
                                    :
                                    'background-primary flex flex-column align-items-center cursor-pointer relative'
                                }
                                style={{
                                    borderRadius: '48px',
                                    height: '544px',
                                    width: '348px',
                                    padding: '54px 36px 36px'
                                }}
                                onClick={() => setIsSelected(index)}
                                >
                                    {selected && (
                                        <div className='absolute background-tertiary' style={{
                                            borderRadius: '48px',
                                            height: '544px',
                                            width: '348px',
                                            padding: '54px 36px 36px',
                                            top: 8,
                                            zIndex: -1
                                        }}/>
                                    )}
                                    <img className='border-circle mb-3' src={`icons/profiles/${booster.profile_pic}`} alt='' />
                                    <p className={selected ? 'text-white text-2xl font-bold mb-2' : 'mb-2 color-secondary text-2xl font-bold'}>{booster.name}</p>
                                    <div className='flex mb-7'>
                                        {booster.countries.map((country, index) => {
                                            return <img className='mx-1' key={index} src={`icons/flags/${country}.svg`} alt='' />;
                                        })}
                                    </div>
                                    <div className='flex mb-6'>
                                        {booster.display_characters.map((character, index) => {
                                            return (
                                                <div key={index} className='flex align-items-end mx-1'
                                                    style={{
                                                        background: selected ? '#313237' : '#D7DADE',
                                                        borderRadius: '15px',
                                                        padding: '5px 2px 0 2px',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    <img src={`icons/characters/${character}`} alt='' />
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className={selected ?
                                        'background-tertiary flex align-items-center justify-content-center text-white'
                                        :
                                        'background-secondary flex align-items-center justify-content-center text-white'
                                    }
                                    style={{
                                        borderRadius: '30px',
                                        padding: '8px 24px',
                                        width: 'fit-content'
                                    }}
                                    >
                                        <img src={selected ? 'icons/star.svg' : 'icons/star-primary.svg'} className='mr-2' alt='' /> {booster.rating}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}