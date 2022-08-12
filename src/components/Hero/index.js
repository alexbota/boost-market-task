import React from 'react';
import { useTranslation } from 'react-i18next';
import heroImg from 'Assets/images/hero-image.png';
import pattern from 'Assets/images/pattern.png';
import { Button } from 'Components/shared/UnstyledComponents';

export default function Hero() {
    const [t] = useTranslation();

    const text = {
        title: 'Apex Legends Boost',
        subtitle: 'Boosting Market is the most reliable way to boost your account in Apex. We offer a variety of services in Apex from rank boost to leveling'
    };

    return (
        <header style={{
            borderRadius: '50px',
            height: '550px',
            position: 'relative',
            padding: '80px 160px',
            marginBottom: '160px'
        }} className='background-secondary text-white'>
            <div className='flex flex-column justify-content-center'>
                <h1 className='text-7xl mb-3'>{t(text.title)}</h1>
                <p className='max-w-30rem font-normal text-lg mb-6'>{t(text.subtitle)}</p>
                <Button className='relative mb-5'>
                    <div
                        style={{
                            position: 'absolute',
                            bottom: 8,
                            background: 'linear-gradient(85.81deg, #D33B4B 6.43%, #F4495A 95.61%)',
                            borderRadius: '20px',
                            height: '66px',
                            width: '276px',
                            padding: '0px 20px'
                        }}
                        className='flex align-items-center justify-content-center font-semibold text-lg'
                    >
                        Boost now!
                    </div>
                    <div style={{
                        background: 'linear-gradient(85.81deg, #A0202D 6.43%, #BE2736 95.61%)',
                        borderRadius: '20px',
                        height: '66px',
                        width: '276px',
                        padding: '0px 20px'
                    }} />
                </Button>
                <div className='flex'>
                    <img className='mr-3' src={'icons/playstation-logo.svg'} alt='' />
                    <img className='mx-3' src={'icons/xbox-logo.svg'} alt='' />
                    <img className='mx-3' src={'icons/windows-logo.svg'} alt='' />
                    <img className='mx-3' src={'icons/mobile-logo.svg'} alt='' />
                </div>
            </div>
            <img style={{
                position: 'absolute',
                right: 0,
                top: 0,
                borderRadius: '50px',
            }} src={pattern} alt='' />
            <img style={{
                position: 'absolute',
                top: 16,
                right: 60,
            }} src={heroImg} alt='' />
        </header>
    );
}