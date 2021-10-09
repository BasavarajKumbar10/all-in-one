import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { filterCardStyles } from "./filtercard.styles";
import { Searchbar, Subheading, useTheme } from "react-native-paper";
import { Screen } from "../../../theme/measures";
import { Titles } from "../../../config/UserConstants";
import { IMap } from "../../../components/atoms/IMap";

interface IProps {

}

function RouteMap(props: IProps) {
    const { } = props;
    const { colors, fonts } = useTheme();

    return (
        <View style={filterCardStyles.container}>
            <Subheading style={[fonts.medium, filterCardStyles.title]}>{Titles.route}</Subheading>
            <View style={{ width: '100%', marginTop: 10 }}>
                <IMap
                    customStyle={styles.mapHolder}
                    mapProps={{
                        zoomEnabled: false,
                        scrollEnabled: false,
                        pitchEnabled: false,
                        rotateEnabled: false,
                    }}
                />
                <View style={styles.srcDest}>
                    <Searchbar
                        placeholder="Source"
                        onChangeText={() => { }}
                        value={''}
                    />
                    <Searchbar
                        placeholder="Destination"
                        onChangeText={() => { }}
                        value={''}
                        style={{ marginTop: 10 }}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mapHolder: {
        borderRadius: 8,
        overflow: 'hidden',
        height: Screen.height * 0.3,
    },
    srcDest: {
        width: '100%',
        marginTop: 10,
    }
});
export const MemoRouteMap = memo(RouteMap);