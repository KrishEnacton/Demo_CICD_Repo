import 'react-native-gesture-handler';
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.Container}>
            <StatusBar backgroundColor="#009387"></StatusBar>
            <Animatable.View style={styles.Header} animation="bounceIn" useNativeDriver={true}  >
                <Image
                    style={styles.Img} source={require('../assets/logo.png')} ></Image>
            </Animatable.View>
            <Animatable.View style={styles.Footer} animation="fadeInUp" useNativeDriver={true} >
                <Text style={styles.title}>Stay Connected with everyone!</Text>
                <Text style={styles.text}>Sign in with acocunt</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
                        <LinearGradient
                            colors={['rgb(41,194,180)', 'rgb(7,162,151)']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSignIn}>Get Started</Text>
                            <IconAntDesign style={styles.iconStyle} name="right" size={15} />
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    Header: {
        flex: 2,
        justifyContent: 'center',
    },
    Footer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    Img: {
        height: 200,
        width: 200,
        alignSelf: 'center'
    },
    title: {
        paddingTop: 30,
        paddingRight: 10,
        paddingLeft: 30,
        fontSize: 26,
        fontWeight: 'bold',
    },
    text: {
        paddingLeft: 30,
        color: "grey"
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSignIn: {
        color: 'white',
        fontWeight: 'bold',
        width: "72%"
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
        paddingRight: 30
    },
    iconStyle: {
        paddingLeft: 5,
        color: "white"
    }
});

export default SplashScreen;
