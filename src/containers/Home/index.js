import React from 'react';
import { Button } from 'Components/shared/UnstyledComponents';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className='w-screen h-screen flex justify-content-center align-items-center'>
            <Button className='mx-8 text-4xl' onClick={() => navigate('/apex')}>Apex</Button>
            <Button className='mx-8 text-4xl' onClick={() => navigate('/lol')}>League of Legends</Button>
        </div>
    );
}