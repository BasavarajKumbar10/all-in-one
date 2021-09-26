import React, {useCallback} from "react";
import {IIcon} from "../../config/interfaces";
import {StyleSheet, View} from "react-native";
import DynamicIcon from "../atoms/DynamicIcon";
import {Caption, Paragraph, TouchableRipple, useTheme} from "react-native-paper";

interface IProps {
    icon: IIcon | undefined;
    label: string;
    onClick?: () => void;
}

export default function (props: IProps) {
    const { icon, label, onClick } = props;

    const { colors } = useTheme();
    const clicked = useCallback(() => {
        if(onClick) {
            onClick();
        }
    }, []);

    return (
        <TouchableRipple
            onPress={clicked}
            rippleColor="rgba(0, 0, 0, .32)"
        >
            <View style={styles.container}>
                {icon && <DynamicIcon icon={{...icon, color: colors.primary}}/>}
                <Caption style={[styles.label, {color: colors.text}]} numberOfLines={2}>{label}</Caption>
            </View>
        </TouchableRipple>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        textAlign: 'center',
    }
});
