// react
import React, {FunctionComponent, ReactNode} from 'react';

interface Props {
    children: ReactNode;
}

const MainContent: FunctionComponent<Props> = ({children}): JSX.Element => {
    return (
        <main>
            {children}
        </main>
    );
};

export default MainContent;