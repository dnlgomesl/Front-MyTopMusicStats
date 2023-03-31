import * as React from 'react';
import ListMenu from '../../components/ListMenu/ListMenu';
import './ArtistsView.css'

function ArtistsView(){
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
        <div className='menu'>
            <ListMenu options={optionsTime} label={'Time Range'} />
            <ListMenu options={optionsLimit} label={'Limt'} />
        </div>
    );
}

export default ArtistsView;