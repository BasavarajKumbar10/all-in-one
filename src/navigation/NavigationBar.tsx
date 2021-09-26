import React from "react";
import { Appbar } from "react-native-paper";
import {INavigation} from "./interfaces";

interface IProps {
    navigation: INavigation;
    title: string;
}
export function NavigationBar(props: IProps) {
    const { navigation, title } = props;
    return (
        <Appbar.Header>
            {navigation.previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
            <Appbar.Content title={title} color={'#ffffff'} />
        </Appbar.Header>
    );
}


