import React, { useState, useEffect } from 'react';
import { romanize } from '../../helpers/romanize';

import './table.scss'

export const Table = ({ lotteryTable }) => {

    const [lotteryTableOptions, setlotteryTableOptions] = useState([]);

    const [ ranks, setRanks ] = useState([])

    useEffect(() => {

        setlotteryTableOptions(lotteryTable)

    }, [lotteryTable])

    useEffect(() => {
        
        if ( lotteryTableOptions ) {
            Object.keys(lotteryTableOptions).map( (option, idx) =>{

                setRanks( lotteryTableOptions[option][idx].odds )
                return false;

            } )
        }

    }, [lotteryTableOptions, ranks])

    return (
      <>
        <div className="Rtable Rtable--4cols Rtable--collapse">
                <div className="Rtable-cell Rtable-cell--head header desktop">
                    <h3>Tier</h3>
                </div>
                <div className="Rtable-cell header desktop">
                    <h3>Match</h3>
                </div>
                <div className="Rtable-cell header desktop">
                    <h3>Winners</h3>
                </div>
                <div className="Rtable-cell Rtable-cell--foot header desktop">
                    <h3>Amount</h3>
                </div>
                {
                    Object.keys(ranks).map( ( option, idx ) =>(
                        <React.Fragment key={idx}>
                            <div className="Rtable-cell Rtable-cell--head">
                                <h4 className="mobile title">Tier</h4><h3 className="entry">{romanize(idx + 1)}</h3>
                            </div>
                            <div className="Rtable-cell">
                                <h4 className="mobile title">Match</h4><h3 className="entry">{ranks[option].specialPrize}</h3>
                            </div>
                            <div className="Rtable-cell">
                                <h4 className="mobile title">Winners</h4><h3 className="entry">{ranks[option].winners}</h3>
                            </div>
                            <div className="Rtable-cell Rtable-cell--foot">
                                <h4 className="mobile title">Amount</h4><h3 className="entry">€{(ranks[option].prize).toLocaleString()}</h3>
                            </div>
                        </React.Fragment>
                    ) )
                }
            </div>
        </>
    );
}
