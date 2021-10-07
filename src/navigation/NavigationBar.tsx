import React from "react";
import { Appbar } from "react-native-paper";
import {INavigation} from "./interfaces";
import { Navigator } from "./Navigator";

interface IProps {
    navigation?: INavigation;
    title: string;
}
export function NavigationBar(props: IProps) {
    const { navigation, title } = props;
    return (
        <Appbar.Header>
            {Navigator.canGoBack() && <Appbar.BackAction onPress={Navigator.goBack} color={'#ffffff'} />}
            <Appbar.Content title={title} color={'#ffffff'} />
        </Appbar.Header>
    );
}


