import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './pages/Home';
import gs from './globalStyle';
import backgroundImg from "./assets/background.png";
import { useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import {requestForegroundPermissionsAsync,getCurrentPositionAsync} from 'expo-location'
import { MeteoApi } from './api/meteo';

export default function App() {
  const [coordinates,setCoordinates] = useState();
  const [weather,setWeather] = useState();
  const [isFontLoaded] = useFonts({
    "Alata-Regular": require("./assets/fonts/Alata-Regular.ttf")
  });

  // console.log(isFontLoaded)

  useEffect(() => {
    getUserCoordinates();
  },[]);

  useEffect(() => {
    if(coordinates){
      fetchWeatherByCoords(coordinates);

    }
  },[coordinates]);

  async function fetchWeatherByCoords(coords){
    const weatherResponse = await MeteoApi.fetchWeatherByCoords(coords);
    setWeather(weatherResponse);
  }

  async function getUserCoordinates(){
    const {status} = await requestForegroundPermissionsAsync()

    if(status === "granted"){
      const location = await getCurrentPositionAsync();
      setCoordinates({lat: location.coords.latitude, lng: location.coords.longitude})
    }else{
      setCoordinates({lat: "48.85", lng:"2.35"})
    }
  }

  // console.log(weather)
  return (
    <ImageBackground imageStyle={gs.img} source={backgroundImg} style={gs.bgImg}>
      <SafeAreaProvider>
        <SafeAreaView style={gs.container}>
          {isFontLoaded && weather ? <Home data={weather} /> : null}
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
}


