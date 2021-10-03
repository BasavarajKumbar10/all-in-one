import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Divider } from "react-native-paper";

interface IProps {
    customStyle?: StyleProp<ViewStyle>;
};

export function Separator(props: IProps) {
    return (
        <Divider style={props.customStyle} />
    )
}