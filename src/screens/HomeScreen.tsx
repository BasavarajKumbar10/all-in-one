import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, Text} from "react-native";
import {INavigation} from "../navigation/interfaces";
import {NavigationBar} from "../navigation/NavigationBar";
import {RouteNames} from "../navigation/RouteNames";
import {Title, useTheme} from "react-native-paper";
import ScreenWrapper from "../components/organisms/ScreenWrapper";
import HomeContainer from "../modules/home";

interface IProps {
 navigation: INavigation;
}
function HomeScreen(props: IProps) {
    const { navigation } = props;
    return (
       <ScreenWrapper navigation={navigation} >
           <HomeContainer />
       </ScreenWrapper>
    );
}

export default HomeScreen;
