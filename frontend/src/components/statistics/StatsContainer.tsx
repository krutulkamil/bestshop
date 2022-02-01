// react
import React, {FunctionComponent} from 'react';
// statistics config
import statisticsConfig from "../../helpers/statisticsConfig";
// components
import StatsBlock from "./StatsBlock";

const StatsContainer: FunctionComponent = (): JSX.Element => {
    return (
        <div className="statistics__container">
            {statisticsConfig.map((block) => (
                <StatsBlock key={block.name} block={block}/>
            ))}
        </div>
    )
};

export default StatsContainer;