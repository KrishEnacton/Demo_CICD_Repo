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
    Animated,
    Button
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable'
import reference from '../firebase/UserDataFirebase';
// import database from '@react-native-firebase/database';

const HomeDrawerContent = ({ navigation }) => {
    // console.log("MyProps : ", props);
    return (

        <View style={styles.rootView}>
            <Button title="hello" onPress={() => navigation.navigate("SignUpScreen")} />
        </View>

    );
};

const styles = StyleSheet.create({

});

export default HomeDrawerContent;
