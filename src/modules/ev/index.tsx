import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { Text, View } from 'react-native';
import { RouteNames } from '../../navigation/RouteNames';
import EvContainer from './EvContainer';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

export function EvsTabs() {
    return (
            <Tab.Navigator>
                <Tab.Screen name={RouteNames.evList} component={EvContainer} />
                <Tab.Screen name={RouteNames.evMap} component={() => <Text>MAP</Text>} />
            </Tab.Navigator>
    );
}