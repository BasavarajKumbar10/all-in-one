import React, { useCallback, useState } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import SectionCard from "../../components/organisms/SectionCard";
import { containerMargin, Screen, scrollViewBottomSpace } from "../../theme/measures";
import { EvItem } from "./components/EvItem";
import EvsList from "../../config/EvsList.json";
import EvsBanners from "../../config/EvBanners.json"
import Fab from "./Fab";
import useIsReady from "../../utils/NavigationTranistionUtils";
import Spinner from "../../components/atoms/Spinner";
import { Navigator } from "../../navigation/Navigator";
import { RouteNames } from "../../navigation/RouteNames";

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
    const isReady = useIsReady();

    const onBook = useCallback(() => {

    }, [])
    const itemView = ({ item, index }) => {
        let view = null;
        if (item === CAROUSAL) {
            view = <SectionCard section={EvsBanners} key={EvsBanners.title} />
        } else if (item?.operator) {
            view = (
                <View style={styles.items}>
                    <EvItem item={item} onBook={onBook} />
                </View>
            )
        }
        return view;
    }

    const headerView = (info: { section: Section }) => {
        return null;
    }

    const separator = useCallback(() => {
        return <View style={styles.separator} />;
    }, [])

    const key = (item, index) => item + index;

    return (
        <>
            {isReady ? <SectionList
                sections={sectionData}
                keyExtractor={key}
                renderItem={itemView}
                renderSectionHeader={headerView}
                contentContainerStyle={styles.sectionList}
                SectionSeparatorComponent={separator}
            /> : <Spinner />}
            <Fab />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sectionList: {
        paddingBottom: scrollViewBottomSpace + 70,
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
