import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    clock: {
        alignItems: 'flex-end',
    },
    city: {

    },
    intepretation: {
        alignSelf: 'flex-end',
        transform: [{rotate:"-90deg"}],

    },
    interpretationText: {
        fontSize: 20,
    },
    tempContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    tempText: {
        fontSize: 120,

    },
    img: {
        height: 90,
        width: 90,
        // backgroundColor: 'white',
    }
});

export default style;