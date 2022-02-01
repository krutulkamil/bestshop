// react
import React, { FunctionComponent } from 'react';
// components
import StatsContainer from "./StatsContainer";

const Statistics: FunctionComponent = (): JSX.Element => {
    return (
        <section className="statistics" id="statistics">
            <div className="container">
                <h2 className="statistics__header">The most popular sales platform in country</h2>
                <StatsContainer />
            </div>
        </section>
    )
};

export default Statistics;