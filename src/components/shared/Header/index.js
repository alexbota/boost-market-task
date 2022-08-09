import React from 'react';
import { Button } from 'Components/shared/UnstyledComponents';
import profile from 'Assets/icons/profiles/profile-me.png';

export default function Header() {

    const styles = {
        outlinedButton: {
            padding: '8px 20px',
            border: '1.2px solid',
            borderRadius: '24px'
        }
    };

    return (
        <nav>
            <div style={{ height: '36px', padding: '0 260px' }} className='flex align-items-center justify-content-between font-medium background-primary'>
                <div>
                    <img src={'icons/rocket.svg'} alt='icon' /> 26 Boosters
                </div>
                <ul className='flex align-items-center justify-content-end list-none'>
                    <li><Button>Blog</Button></li>
                    <li><Button>Contact 24/7</Button></li>
                    <li><Button className='flex align-items-center'><img src={'icons/flags/uk.svg'} alt='flag' />EN</Button></li>
                </ul>
            </div>
            <div style={{ height: '186px', padding: '0 260px' }} className='flex align-items-center justify-content-between font-semibold'>
                <ul className='flex align-items-center list-none'>
                    <li>
                        <Button><img src={'icons/logo.svg'} alt='logo' /></Button>
                    </li>
                    <li>
                        <Button>Services</Button>
                    </li>
                    <li>
                        <Button>Boosters</Button>
                    </li>
                    <li>
                        <Button>Loyalty</Button>
                    </li>
                    <li>
                        <Button className='color-secondary'>Account shop<img src={'icons/arrow.svg'} alt='icon' /></Button>
                    </li>
                </ul>
                <ul className='flex align-items-center list-none'>
                    <li className='mx-2'>
                        <Button style={{ ...styles.outlinedButton, borderColor: '#FC485A' }}>Dashboard</Button>
                    </li>
                    <li className='mx-2'>
                        <Button style={{ ...styles.outlinedButton, borderColor: '#DADEE4' }} className='flex align-items-center'>
                            <img src={'icons/coin.svg'} className='mr-1' alt='icon' /> 245
                        </Button>
                    </li>
                    <li className='mx-2'>
                        <Button><img src={'icons/message.svg'} alt='icon' /></Button>
                    </li>
                    <li className='mx-2'>
                        <Button><img src={'icons/bell.svg'} alt='icon' /></Button>
                    </li>
                    <li className='ml-2'>
                        <Button><img className='h-3rem' src={profile} alt='icon' /></Button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}