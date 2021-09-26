import React from 'react'
import {SafeAreaView, StatusBar, StyleSheet, Text} from "react-native";
import {INavigation} from "../../navigation/interfaces";
import {NavigationBar} from "../../navigation/NavigationBar";
import {RouteNames} from "../../navigation/RouteNames";
import {useTheme} from "react-native-paper";
import {useSafeAreaInsets} from "react-native-safe-area-context";

interface IProps {
    navigation: INavigation;
    children: React.ReactElement;
}
function ScreenWrapper(props: IProps) {
    const { navigation, children } = props;

    const {
        colors
    } = useTheme();

    const insets = useSafeAreaInsets();

    const containerStyle = [
        styles.container,
        {
            backgroundColor: colors.background,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.left,
        },
    ];

    return (
        <SafeAreaView style={containerStyle}>
            <StatusBar
                animated={true}
                backgroundColor={colors.accent}
                barStyle={"default"}/>
            {/* <NavigationBar navigation={navigation} title={RouteNames.home} /> */}
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
