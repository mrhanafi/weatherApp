import React from 'react';
import { Text, View } from 'react-native';
import style from './style';
import Txt from '../../components/Txt';
import MeteoBasic from '../../components/MeteoBasic';
import { getWeatherInter } from '../../utils/meteoUtils';

const Home = ({data}) => {
    const current_weather = data.current_weather;
    const currentInter = getWeatherInter(current_weather.weathercode);
    return (
        <>
            <View style={style.meteoBasic}>
                <MeteoBasic intepretation={currentInter} temperature={Math.round(current_weather.temperature)} />
            </View>
            <View style={style.searchbarContainer}>
                <Txt>SearchBar</Txt>
            </View>
            <View style={style.meteoAdvance}>
                <Txt>Advance Weather Info</Txt> 
            </View>
        
        </>
    );
};

export default React.memo(Home);