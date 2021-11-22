import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';

import "./dropdown.scss"

export const Dropdown = ({ selected, setSelected, lotteryDays }) => {

    const [isActive, setIsActive] = useState(false);

    const [ options, setOptions ] = useState([]);

    useEffect(() => {

        setOptions(lotteryDays)

    }, [lotteryDays])

    return (
        <div className="dropdown">
            <div className="dropdown__btn" onClick={ () => setIsActive(!isActive) }>
                { selected }
                < IoMdArrowDropdown />
            </div>
            {
                isActive &&
                <div className="dropdown__content">
                    { 
                        Object.keys(options).map( ( option, idx ) => (
                            <div 
                                key={idx} 
                                className="dropdown__item"
                                onClick={ () => {
                                    setSelected( `${options[option].date.year}-${options[option].date.month}-${options[option].date.day}` )
                                    setIsActive( false )
                                }}
                            >
                                {
                                    `
                                    ${options[option].date.day}
                                    -
                                    ${options[option].date.month}
                                    -
                                    ${options[option].date.year}
                                    `
                                }
                            </div>
                        ) )
                    }
                </div>
            }
        </div>
    )
}
