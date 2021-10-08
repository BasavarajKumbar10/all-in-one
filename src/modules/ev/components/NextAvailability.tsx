import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { filterCardStyles } from "./filtercard.styles";
import Slider from '@react-native-community/slider';
import { Caption, Subheading, Text, useTheme } from "react-native-paper";
import { CHARGING_SPEED, NEXT_AVAILABLE } from "../../../config/constants"
import { Screen } from "../../../theme/measures";
import { Titles } from "../../../config/UserConstants";

interface IProps {

}

function NextAvailability(props: IProps) {
    const { } = props;
    const { colors, fonts } = useTheme();

    const [hr, setHr] = useState(0.5);

    const onAvailability = useCallback((value) => {
        setHr(value);
    }, []);

    return (
        <View style={filterCardStyles.container}>
            <View style={styles.ranges}>
                <Subheading>{Titles.nextAvailable}</Subheading>
                <View style={styles.valueView}>
                    <Text style={[styles.value, fonts.medium]}>
                    {`${hr} hrs`}
                    </Text>
                </View>
            </View>
            <View>
                <Slider
                    style={styles.slider}
                    minimumValue={3}
                    maximumValue={12}
                    minimumTrackTintColor={colors.accent}
                    maximumTrackTintColor={colors.primary}
                    step={1}
                    value={hr}
                    onValueChange={onAvailability}
                />
                <View style={styles.ranges}>
                    <Caption style={styles.rangeMinimum}>{NEXT_AVAILABLE.minimum}</Caption>
                    <Caption style={styles.rangeMax}>{NEXT_AVAILABLE.maximum}</Caption>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slider: {
        width: '100%', height: 6, marginTop: 14
    },
    ranges: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rangeMinimum: {
        marginLeft: Screen.width * 0.1 - 30,
    },
    rangeMax: {
        marginRight: Screen.width * 0.1 - 30,
    },
    valueView: {
        borderRadius: 4,
        paddingVertical: 4,
        paddingHorizontal: 8, 
        backgroundColor: '#FB8C00'
    },
    value: {
        fontSize: 16,
        color: '#fff',
    }
});
export const MemoNextAvailability = memo(NextAvailability);