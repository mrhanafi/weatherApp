
import React, { useEffect, useState } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import style from './style';
import Txt from '../Txt';
import { nowToHHMM } from '../../utils/date-time';

const Clock = () => {
    const [time,setTime] = useState(nowToHHMM());

    useEffect(()=>{
        const intervalId = setInterval(() => {
            setTime(nowToHHMM())
        },1000);

        // cleanup function
        return () => {
            clearInterval(intervalId);
        }
    },[]);

    return (
        <>
            <Txt cstyle={style.time}>{nowToHHMM()}</Txt>
        </>
    )
}

export default React.memo(Clock);