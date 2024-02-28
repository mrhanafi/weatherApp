
import React from 'react';
import { Image, Text, View } from 'react-native';
import style from './style';
import Txt from '../Txt';
import Clock from '../Clock';

const meteoBasic = ({temperature, intepretation}) => {
    return (
        <>
            <View style={style.clock}>
                <Clock />
            </View>
            <View style={style.city}>
                <Txt>City</Txt>
            </View>
            <View style={style.intepretation}>
                <Txt cstyle={style.interpretationText}>{intepretation.label}</Txt>
            </View>
            <View style={style.tempContainer}>
                <Txt cstyle={style.tempText}>{temperature}°</Txt>
                <Image style={style.img} source={intepretation.image} />
            </View>
        
        </>
    )
}

export default React.memo(meteoBasic);