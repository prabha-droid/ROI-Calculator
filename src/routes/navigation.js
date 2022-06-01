import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VisibleScreen from '../components/VisibleScreen';
// import EventListing from '../components/eventsList';

const AuthStack = createNativeStackNavigator();
export const AuthNavigation = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false}} initialRouteName={VisibleScreen}>
            <AuthStack.Screen name="VisibleScreen" component={VisibleScreen}></AuthStack.Screen>
            {/* <AuthStack.Screen name="EventListing" component={EventListing}></AuthStack.Screen> */}
        </AuthStack.Navigator>
    )
}
