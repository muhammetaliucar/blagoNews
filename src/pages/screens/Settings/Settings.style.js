import { StyleSheet, Dimensions } from "react-native";

const dim = Dimensions.get('window')


export default StyleSheet.create({
    containerUp: {
        height: dim.height * 0.3,
        backgroundColor: '#372D79'
    },
    avatar: {
        position: 'absolute',
        top: dim.height * 0.23,
        left: '30%',
        borderRadius: 999,
        borderWidth: 3,
        width: dim.width * 0.4,
        height: 150,
        borderColor: 'white',
        zIndex: 1,
    },
    name: {
        color: 'white',
        fontSize: 25,
        flexShrink: 1,
        textAlign: 'center',
        marginTop: 30
    },
    changeAvatar: {
        padding: 3,
        margin: 100,
        borderRadius: 10,
        borderColor: '#372D79'
    },
    modal: {
        flex: 1,
        justifyContent: 'flex-end',
        width: dim.width * 1,
        margin: 0
    },
    image:{
        width: dim.width * 0.4,
        height: 150,
        borderRadius: 999
    }
})