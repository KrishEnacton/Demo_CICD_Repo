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

const SignInScreen = ({ navigation }) => {

    console.log("Nav:", navigation);
    return (

        <View style={styles.rootView}>
            <Text>Hello</Text>
            <Button title="Hello" onPress={() => navigation.openDrawer()} />
        </View>

    );
};

const styles = StyleSheet.create({

});

export default SignInScreen;
