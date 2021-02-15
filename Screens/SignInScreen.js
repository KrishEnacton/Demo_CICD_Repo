import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Animated
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable'
import reference from '../firebase/UserDataFirebase';
// import database from '@react-native-firebase/database';

const SignInScreen = ({ navigation }) => {

    // const reference = database().ref('/MyUsers');

    const initData = {
        circleIcon: 0,
        email: "",
        password: "",
        uList: [],
        isSignIn: false,
        emailErrorTxt: "",
        pwdErrorTxt: ""
    }

    const [flag, setFlag] = useState(0);
    const [data, setData] = useState(initData);

    const hideShowPwd = () => {
        if (flag == 0) {
            setFlag(1);
            //alert(`Flag : ${flag.toString()}`);
        }
        else {
            setFlag(0);
            //alert(`Flag : ${flag.toString()}`);
        }
    }

    const emailHandler = (val) => {
        setData({
            ...data,
            circleIcon: val,
            email: val
        });
    }

    const pwdHandler = (val) => {
        setData({
            ...data,
            password: val,
        });
    }

    const signInHandler = () => {
        let l = []
        let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (data.email.trim() == "") {
            setData({
                ...data,
                emailErrorTxt: "Email can not be null or empty!"
            })
        }
        else if (!data.email.trim().match(mailformat)) {
            setData({
                ...data,
                emailErrorTxt: "You have entered an invalid email address!"
            })
        }


        // const ref = reference.on('value', (snapshot) => {
        //     snapshot.val().forEach((datas) => {
        //         // console.log("DataInside : ", datas.Email, "Password:", datas.Password);
        //         if (datas.Email == data.email && datas.Password == data.password) {
        //             navigation.navigate("HomeScreenDra");
        //             // console.log("Success");
        //             //break;
        //             return true;
        //         }
        //     })
        // })

        // console.log("Data : ", data.email, " ", data.password);
    }

    return (

        <View style={styles.rootView}>
            <StatusBar backgroundColor="#009387"></StatusBar>
            <View style={styles.headerView} >
                <Text style={styles.headerText}>Welcome!</Text>
            </View>
            <Animatable.View style={styles.footerView} animation="fadeInUp" useNativeDriver={true}  >
                <Text style={styles.footerText}>Email</Text>
                <View style={styles.iconInputView}>
                    <MaterialCommunityIcons
                        name="email-outline"
                        size={25}
                        style={{ marginTop: 15, marginRight: 5 }}
                    />
                    <TextInput
                        style={styles.footerInputText}
                        placeholder="Enter Email"
                        autoCapitalize="none"
                        onChangeText={(val) => emailHandler(val)}
                    />

                    {data.circleIcon ? <Feather
                        name="check-circle"
                        size={20}
                        style={{ marginTop: 15, color: "red" }}
                    /> : null}

                </View>
                <Text style={styles.errorTxt} >{data.emailErrorTxt}</Text>
                <Text style={[styles.footerText, { marginTop: 30 }]}>Password</Text>
                <View style={styles.iconInputView}>
                    <MaterialIcons
                        name="lock-outline"
                        size={25}
                        style={{ marginTop: 15, marginRight: 5 }}
                    />
                    <TextInput
                        style={styles.footerInputText}
                        placeholder="Enter Password"
                        autoCapitalize="none"
                        secureTextEntry={flag == 0 ? true : false}
                        onChangeText={(val) => pwdHandler(val)}
                    />
                    <TouchableOpacity onPress={() => hideShowPwd()} >
                        <Feather
                            name={flag == 0 ? "eye-off" : "eye"}
                            size={20}
                            style={{ marginTop: 15, color: "red" }}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.errorTxt} >Error</Text>
                <View style={styles.btnSignInView} >
                    <TouchableOpacity onPress={() => signInHandler()}>
                        <LinearGradient
                            colors={['rgb(41,194,180)', 'rgb(7,162,151)']}
                            style={styles.signIn}
                        >
                            <Text style={styles.btnSignInText}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={styles.btnSignUpView} >
                    <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
                        <View style={styles.signUp}>
                            <Text style={styles.btnSignUpText}>Sign Up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>

    );
};

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        backgroundColor: "#009387"
    },
    headerView: {
        flex: 1,
        backgroundColor: "#009387"
    },
    headerText: {
        fontSize: 35,
        fontWeight: "bold",
        marginLeft: "5%",
        marginTop: "25%",
        color: "white"
    },
    footerView: {
        flex: 3,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
        paddingLeft: 15,
    },
    footerText: {
        fontSize: 15
    },
    footerInputText: {
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        flex: 0.9,

    },
    iconInputView: {
        flexDirection: "row",
        // borderBottomColor: "black",
        // borderBottomWidth: 1,
    },
    btnSignInView: {
        marginTop: 40,
        marginRight: 15,

        // borderRadius: 
    },
    signIn: {
        borderRadius: 10
    },
    btnSignInText: {
        height: 50,
        textAlignVertical: "center",
        alignSelf: "center",
        fontSize: 17,
        color: "white",
        fontWeight: "bold"
    },
    btnSignUpView: {
        marginTop: 15,
        marginRight: 15,
        // borderRadius: 
    },
    signUp: {
        borderRadius: 10,
        borderColor: "rgb(41,194,180)",
        borderWidth: 1.5

    },
    btnSignUpText: {
        height: 50,
        textAlignVertical: "center",
        alignSelf: "center",
        fontSize: 17,
        color: "rgb(41,194,180)",
        fontWeight: "bold"
    },
    errorTxt: {
        marginLeft: 30,
        marginTop: 2,
        color: "red",
        fontSize: 13
    }

});

export default SignInScreen;
