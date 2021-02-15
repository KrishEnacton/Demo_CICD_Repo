import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from './HomeScreen';
import SignInScreen from './SignInScreen';
import HomeDrawerContent from './HomeDrawerContent';


const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
    return (
        <Drawer.Navigator drawerContent={HomeDrawerContent} >
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            {/* <Drawer.Screen name="SignInScreen" component={SignInScreen} /> */}
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;