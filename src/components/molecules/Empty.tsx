import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Title, useTheme } from "react-native-paper";
import FoundationIcon from "react-native-vector-icons/Foundation";

interface IProps {
    customStyle?: StyleProp<ViewStyle>;
    text?: string;
};

export function Empty(props: IProps) {
    const { colors } = useTheme();
    return (
        <View style={props.customStyle}>
            <FoundationIcon size={100} name='' color={colors.accent} />
            <Title>{props.text || 'Wow! nothing to show.'}</Title>
        </View>
    )
}