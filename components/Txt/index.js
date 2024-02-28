
import React from 'react';
import { Text, useWindowDimensions } from 'react-native';
import style from './style';

const Txt = ({children, cstyle, ...restProps}) => {
    const IPHONE_RATIO = 0.001261467889908257;
    const fontSize = cstyle?.fontSize || style.textStyle.fontSize;
    const { height } = useWindowDimensions();
    
    return (
        <Text style={[
            style.textStyle, 
            cstyle,
            { 
                fontSize: fontSize * IPHONE_RATIO * height, 
            }
        ]} 
            {...restProps}
            >{children}</Text>
    )
}

export default React.memo(Txt);