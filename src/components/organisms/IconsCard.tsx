import React from "react";
import {IListItem} from "../../config/interfaces";
import {Card, Subheading, Title} from "react-native-paper";
import IconLabel from "../molecules/IconLabel";
import {StyleSheet, View} from "react-native";
import {containerMargin, Screen} from "../../theme/measures";

interface IProps {
    title: string;
    list: IListItem[];
}

export default function IconsCard(props: IProps) {
    const { title, list } = props;
    return (
        <Card style={styles.card} mode={"elevated"} key={title}>
            <Card.Title title={title} />
            <Card.Content style={styles.content}>
            {list.map((item) => {
               return (
                   <View style={styles.icon}>
                       <IconLabel label={item.label} icon={item.icon} key={item.label} />
                   </View>
               )
            })}
            </Card.Content>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        marginVertical: 6,
        marginHorizontal: containerMargin,
    },
    content: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    icon: {
        width: Screen.width * 0.2,
        padding: 6,
    }
});
