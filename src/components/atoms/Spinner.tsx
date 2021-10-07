import React from "react";
import { ActivityIndicator } from "react-native-paper";

interface IProps {
    size?: 'small' | 'large' | number;
    color?: string;
}

export default function Spinner(props: IProps){
    const { size = 'large', color } = props;
    return <ActivityIndicator size="large" color={color} />
}