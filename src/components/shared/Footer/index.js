import React from 'react';
import pattern from 'Assets/images/footer-pattern.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'Components/shared/UnstyledComponents';

export default function Footer() {
    const [t] = useTranslation();

    const styledIcon = {
        borderRadius: '15px',
        background: '#2D2E33',
        padding: '12px 14px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <footer className='background-secondary'
            style={{
                marginTop: '380px',
                borderRadius: '50px 50px 0px 0px',
                height: '914px',
                padding: '0 260px'
            }}
        >
            <div className='background-tertiary relative flex flex-column justify-content-center align-items-center'
                style={{
                    borderRadius: '50px',
                    height: '320px',
                    bottom: '160px',
                    overflow: 'hidden',
                    marginBottom: '-80px'
                }}
            >
                <img style={{ right: 0, width: '100%' }} className='absolute' src={pattern} alt='' />
                <div className='text-center z-1 text-white'>
                    <p>{t('Don\'t waste your time')}</p>
                    <h3 className='text-7xl font-bold border-bottom-3'>BOOST NOW!</h3>
                </div>
            </div>
            <div className='flex justify-content-between'>
                <img src={'icons/logo-variant.svg'} alt='' />
                <div className='flex align-items-center'>
                    <div className='flex align-items-center'>
                        <Link className='mx-4' href=''><img src={'icons/payments/paypal-logo.svg'} alt='' /></Link>
                        <Link className='mx-4' href=''><img src={'icons/payments/stripe-logo.svg'} alt='' /></Link>
                        <Link className='mx-4' href=''><img src={'icons/payments/shopifyssl-logo.svg'} alt='' /></Link>
                        <Link className='mx-4' href=''><img src={'icons/payments/skrill-logo.svg'} alt='' /></Link>
                        <Link className='mx-4' href=''><img src={'icons/payments/paysafe-logo.svg'} alt='' /></Link>
                    </div>
                    <div className='flex align-items-center'>
                        <Link className='mx-1' style={styledIcon} href=''><img src={'icons/payments/bitcoin-logo.svg'} alt='' /></Link>
                        <Link className='mx-1' style={styledIcon} href=''><img src={'icons/payments/ethereum-logo.svg'} alt='' /></Link>
                        <Link className='mx-1' style={styledIcon} href=''><img src={'icons/payments/litecoin-logo.svg'} alt='' /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}