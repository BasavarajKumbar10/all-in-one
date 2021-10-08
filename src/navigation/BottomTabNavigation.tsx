import React from 'react'

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import PromoScreen from "../screens/PromoScreen";
import CabsScreen from "../screens/CabsScreen";
import EvScreen from "../screens/EvScreen";
import ProfileScreen from "../screens/ProfileScreen";
import {RouteNames} from "./RouteNames";
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTheme} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import EvFiltersScreen from '../screens/EvFiltersScreen';

const Tab = createMaterialBottomTabNavigator();
const EvsStack = createNativeStackNavigator();

export function EvsStackScreen(){
    return (
        <EvsStack.Navigator>
            <EvsStack.Screen
                name={RouteNames.evList}
                component={EvScreen}
                options={{headerShown:false}}
            />
             <EvsStack.Screen
                name={RouteNames.evFilter}
                component={EvFiltersScreen}
                options={{headerShown:false}}
            />
        </EvsStack.Navigator>
    );
}

export function BottomTabNavigation() {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color }) => {
                    let iconName;
                    const tintColor = focused ? colors.primary : '#000000'
                    if (route.name === RouteNames.home) {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === RouteNames.promotion) {
                        iconName = focused ? 'people' : 'people-outline';
                    } else if (route.name === RouteNames.cabs) {
                        iconName = focused ? 'car-sport' : 'car-sport-outline';
                    } else if (route.name === RouteNames.evCharge) {
                        iconName = focused ? 'ios-battery-charging' : 'ios-battery-charging-outline';
                    } else if (route.name === RouteNames.profile) {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }

                    // You can return any component that you like here!
                    return <Ionicons name={iconName} size={24} color={tintColor} />;
                },
                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: '',
                tabBarColor: '#ffffff',
            })}
        >
            <Tab.Screen
                name={RouteNames.home} component={HomeScreen} />
            <Tab.Screen name={RouteNames.promotion} component={PromoScreen} />
            {/* <Tab.Screen name={RouteNames.cabs} component={CabsScreen} /> */}
            <Tab.Screen
                name={RouteNames.evCharge}
                component={EvsStackScreen} 
            />
            <Tab.Screen name={RouteNames.profile} component={ProfileScreen} />
        </Tab.Navigator>
    );
}
