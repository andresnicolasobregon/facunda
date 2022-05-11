import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/home/index'
import Quiz from '../screens/quiz';
import { COLORS } from '../constants';

const Stack = createNativeStackNavigator();


const MainNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
            headerStyle: {
                backgroundColor: COLORS.background,
            },
            headerTintColor: COLORS.white,
            headerTitleStyle: {
                fontFamily: 'OpenSans-Bold',
                fontSize: 17
            }
        }}>
            <Stack.Screen  name='Home' component={Home} options={{ headerShown: false }}/>
            <Stack.Screen  name='Quiz' component={Quiz} />
        </Stack.Navigator>
        )
        
}

export default MainNavigator;