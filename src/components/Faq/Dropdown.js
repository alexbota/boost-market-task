import React, { useState } from 'react';
import { Button } from 'Components/shared/UnstyledComponents';
import { useTranslation } from 'react-i18next';

export default function Dropdown({ faq }) {
    const [t] = useTranslation();
    const [isExtended, setIsExtended] = useState(false);

    return (
        <div className={isExtended ? 'background-secondary mb-4' : 'background-primary mb-4'}
            style={{ borderRadius: '24px', padding: '30px 42px' }}
        >
            <div className='flex align-items-center justify-content-between '>
                <p className={isExtended ? 'text-white text-2xl font-medium' : 'text-2xl font-medium'}>{t(faq.question)}</p>
                <Button onClick={() => setIsExtended(!isExtended)} className='flex align-items-center'>
                    <img className='ml-8' src={isExtended ? 'icons/minus.svg' : 'icons/plus.svg'} alt='' />
                </Button>
            </div>
            {isExtended && (
                <p className='mt-4 color-medium-grey font-regular'>{faq.answer}</p>
            )}
        </div>
    );
}