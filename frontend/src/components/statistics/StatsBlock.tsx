// react
import React, {FunctionComponent} from 'react';
// types
import {IStats} from "../../types";

interface Props {
    block: IStats
}

const StatsBlock: FunctionComponent<Props> = ({block}): JSX.Element => {
    const {img, numbers, entries} = block;

    return (
        <div className="statistics__single">
            <div className="statistics__circle">
                <img src={img} className="statistics__img" alt="BestShop Benefits" />
            </div>
            <div className="statistics__numbers">{numbers}</div>
            <div className="statistics__entries">{entries}</div>
        </div>
    );
};

export default StatsBlock;
