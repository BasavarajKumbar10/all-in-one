import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeConfig } from '../../config/home'
import SectionCard from "../../components/organisms/SectionCard";
import { containerMargin, Screen, scrollViewBottomSpace } from "../../theme/measures";
import { EvItem } from "../../components/molecules/EvItem";
import EvsList from "../../config/EvsList.json";
import { Empty } from "../../components/molecules/Empty";
import { Separator } from "../../components/atoms/Divider";
import { useTheme } from "react-native-paper";
import EvsBanners from "../../config/EvBanners.json"

const CAROUSAL = 'carousal';
const EV = 'EV';
const sectionData = [
    {
        title: CAROUSAL,
        data: [CAROUSAL]
    },
    {
        title: EV,
        data: EvsList,
    }
]
export default function EvContainer() {
    const [evsListData] = useState(EvsList);
    const { colors } = useTheme();
    const itemView = ({ item, index }) =>
    (
        <EvItem item={item} />
    )


    const key = (item) => item?.id;

    const evsList = () => {
        return (
            <FlatList
                data={evsListData}
                renderItem={itemView}
                keyExtractor={key}
                ItemSeparatorComponent={() => <View style={[styles.separator, { backgroundColor: colors.background }]} />}
                ListEmptyComponent={<Empty />}
            />
        );
    }

    return (
        <View style={styles.container}>
            <SectionCard section={EvsBanners} key={EvsBanners.title} />
            <View style={styles.view}>
                {evsList()}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        paddingBottom: scrollViewBottomSpace,
        paddingHorizontal: containerMargin,
        paddingTop: containerMargin,
    },
    separator: {
        height: Screen.height * 0.01,
    }
})
