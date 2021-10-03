import React, { useState } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import SectionCard from "../../components/organisms/SectionCard";
import { containerMargin, Screen, scrollViewBottomSpace } from "../../theme/measures";
import { EvItem } from "../../components/molecules/EvItem";
import EvsList from "../../config/EvsList.json";
import EvsBanners from "../../config/EvBanners.json"

const CAROUSAL = 'carousal';
const EV = 'EV';
const sectionData: any[] = [
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

    const itemView = ({ item, index }) => {
        let view = null;
        if (item === CAROUSAL) {
            view = <SectionCard section={EvsBanners} key={EvsBanners.title} />
        } else if (item?.operator) {
            view = (
                <View style={styles.items}>
                    <EvItem item={item} />
                </View>
            )
        }
        return view;
    }

    const headerView = (info: { section: Section }) => {
        return null;
    }

    const key = (item, index) => item + index;

    return <SectionList
        sections={sectionData}
        keyExtractor={key}
        renderItem={itemView}
        renderSectionHeader={headerView}
        contentContainerStyle={styles.sectionList}
        SectionSeparatorComponent={() => <View style={styles.separator} />}
    />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionList: {
        paddingBottom: scrollViewBottomSpace,
        paddingTop: containerMargin,
    },
    separator: {
        height: Screen.height * 0.01,
    },
    items: {
        paddingHorizontal: containerMargin,
        marginTop: Screen.height * 0.01,
    }
})
