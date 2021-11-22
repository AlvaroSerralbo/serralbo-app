import React from 'react';
import { GiSandsOfTime } from 'react-icons/gi';

import { calcDays } from '../../helpers/calcDays';
import { generateRandomColor } from '../../helpers/randomColor';

import './slide.scss'

export const Slide = ( { key, title, prize, date, setActiveLottery } ) => {

    const { year, month, day, hour, minute } = date.next.date;

    return (
        <div 
            key={key} 
            className="slide" 
            onClick={() => setActiveLottery(title)}
        >
            <div className="slide__header">
                <h2 
                    className="slide__header__title" 
                    style={{color: generateRandomColor()}}
                >
                    { title }
                </h2>
                <img 
                    src="https://www.lottoland.co.uk/cms/5f08300375542300015bb9ad/lt-lotto5.png" 
                    alt="alt" 
                />
            </div>
            <div className="slide__prize">
                {
                    `€${prize || "-"} million`
                }
            </div>
            <div className="slide__next">
                <GiSandsOfTime />  
                {
                    calcDays(
                        year,
                        month,
                        day,
                        hour,
                        minute
                    )} 
            </div>
        </div>
    )
}
