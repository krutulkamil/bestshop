// assets
import person from '../assets/Person.svg';
import eye from '../assets/Eye.svg';
import catalog from '../assets/Catalog.svg';
// types
import {IStats} from "../types";

const statisticsConfig: IStats[] = [
    {
        name: 'entries',
        numbers: '100000+',
        entries: 'daily entries',
        img: person
    },
    {
        name: 'products',
        numbers: '2000000+',
        entries: 'seen products every day',
        img: eye
    },
    {
        name: 'posts',
        numbers: '10000+',
        entries: 'added posts daily',
        img: catalog
    }
];

export default statisticsConfig;