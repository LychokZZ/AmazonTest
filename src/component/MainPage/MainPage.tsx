'use client';
import {useWindowWidth} from '@/hook/useWindowWidth';

import Mobile from '../Mobile/Mobile';
import Pc from '../Pc/Pc';

import './MainPage.css';



const MainPage =() => {
    
    const width = useWindowWidth();

    if (width === 0) {
        return null;
    }

    return (
        <div className='myMainContainer'>
            {width <= 768 ? <Mobile /> : <Pc />}
        </div>
    )
}
export default MainPage;






