import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, Text} from "react-native";
import {INavigation} from "../../navigation/interfaces";
import {NavigationBar} from "../../navigation/NavigationBar";
import {RouteNames} from "../../navigation/RouteNames";
import {useTheme} from "react-native-paper";

interface IProps {
    navigation: INavigation;
    children: React.ReactElement;
}
function ScreenWrapper(props: IProps) {
    const { navigation, children } = props;
    const { colors } = useTheme();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor={colors.accent}
                barStyle={"default"}/>
            <NavigationBar navigation={navigation} title={RouteNames.home} />
            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default ScreenWrapper;
