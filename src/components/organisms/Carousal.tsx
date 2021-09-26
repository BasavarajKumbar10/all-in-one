import React, { Children } from "react";
import { StyleSheet } from "react-native";
import Swiper from 'react-native-swiper'
import { Screen } from "../../theme/measures";

interface IProps {
    children: any;
    customStyle?: any;
    color?: string;
}

export function Carousal(props: IProps){
    const { children, color = '#000000', customStyle = {} } = props;
    return (
        <Swiper style={[styles.container, customStyle]} activeDotColor={color} autoplay loadMinimal>
            {children}
        </Swiper>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Screen.height * 0.2,
    }
});