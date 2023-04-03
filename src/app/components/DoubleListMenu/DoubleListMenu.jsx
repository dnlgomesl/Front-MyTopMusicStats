import * as React from 'react';
import ListMenu from '../ListMenu/ListMenu';
import './DoubleListMenu.css'

function DoubleListMenu(){
    const optionsTime = [
        '',
        'Short',
        'Medium',
        'Long',
    ]

    const optionsLimit = [
        '',
        '10',
        '20',
        '50'
    ]
    
    return (
        <div>
            <div className='menu'>
                <ListMenu options={optionsTime} label={'Time Range'} />
                <ListMenu options={optionsLimit} label={'Limt'} />
            </div>
        </div>

    );
}

export default DoubleListMenu;