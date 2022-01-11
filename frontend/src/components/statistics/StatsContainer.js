import React from 'react';

import StatsBlock from "./StatsBlock";
import statisticsConfig from "../../helpers/statisticsConfig";

const StatsContainer = () => {
    return (
        <div className="statistics__container">
            {statisticsConfig.map((block) => (
                <StatsBlock key={block.name} block={block}/>
            ))}
        </div>
    )
};

export default StatsContainer;