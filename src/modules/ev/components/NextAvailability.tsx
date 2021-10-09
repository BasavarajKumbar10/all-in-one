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
            <View style={filterCardStyles.ranges}>
                <Subheading style={[fonts.medium, filterCardStyles.title]}>{Titles.nextAvailable}</Subheading>
                <View style={filterCardStyles.valueView}>
                    <Text style={[filterCardStyles.value, fonts.medium]}>
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
                <View style={filterCardStyles.ranges}>
                    <Caption style={filterCardStyles.rangeMinimum}>{NEXT_AVAILABLE.minimum}</Caption>
                    <Caption style={filterCardStyles.rangeMax}>{NEXT_AVAILABLE.maximum}</Caption>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    slider: {
        width: '100%', height: 6, marginTop: 14
    },
});
export const MemoNextAvailability = memo(NextAvailability);