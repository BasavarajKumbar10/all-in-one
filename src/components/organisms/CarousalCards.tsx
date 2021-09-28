import React from "react";
import { IListItem } from "../../config/interfaces";
import { Card, Surface, useTheme } from "react-native-paper";
import IconLabel from "../molecules/IconLabel";
import { StyleSheet, View } from "react-native";
import { Screen } from "../../theme/measures";
import { Carousal } from "./Carousal";
import FastImage from "react-native-fast-image";

interface IProps {
    title: string;
    list: IListItem[];
}

export default function CarousalCards(props: IProps) {
    const { title, list } = props;
    const { colors } = useTheme();
    return (
       <View style={styles.container}>
            <Carousal color={colors.primary}>
            {list.map((item) => {
                return (
                   <View style={styles.cardHolder} key={title}>
                            <FastImage
                                style={styles.image}
                                source={{
                                    uri: item.imageUrl,
                                    priority: FastImage.priority.high,
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                   </View>
                )
            })}
        </Carousal>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: 4,
        marginBottom: 4,
    },
    cardHolder: {
        padding: 6,
        width: Screen.width,
        borderRadius: 6,
    },
    image: { 
        padding: 6,
        height: '100%',
        borderRadius: 6,
        backgroundColor: '#CFD8DC'
    },
});
