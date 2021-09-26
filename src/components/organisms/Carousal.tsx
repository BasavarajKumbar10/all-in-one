import React, { Children } from "react";
import { StyleSheet } from "react-native";
import Swiper from 'react-native-swiper'
import { Screen } from "../../theme/measures";

interface IProps {
    children: any;
    customStyle?: any;
    color?: string;
    paginationStyle?: any;
}

export function Carousal(props: IProps){
    const { children, color = '#000000', customStyle = {}, paginationStyle = {} } = props;
    return (
        <Swiper style={[styles.container, customStyle]}
            activeDotColor={color} 
            paginationStyle={{...styles.paginationStyle, ...paginationStyle}}
            autoplay loadMinimal>
            {children}
        </Swiper>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Screen.height * 0.2,
    },
    paginationStyle: {
        top: Screen.height * 0.2+4,
    }
});