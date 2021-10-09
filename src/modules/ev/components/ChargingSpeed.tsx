import React, { memo, useCallback, useState } from "react";
import { StyleSheet, View } from "react-native";
import { filterCardStyles } from "./filtercard.styles";
import Slider from '@react-native-community/slider';
import { Caption, Subheading, Text, useTheme } from "react-native-paper";
import { CHARGING_SPEED } from "../../../config/constants"
import { Screen } from "../../../theme/measures";
import { Titles } from "../../../config/UserConstants";

interface IProps {

}

function ChargingSpeed(props: IProps) {
    const { } = props;
    const { colors, fonts } = useTheme();

    const [kWh, setKwh] = useState(3);

    const onKwh = useCallback((value) => {
        setKwh(value);
    }, []);

    return (
        <View style={filterCardStyles.container}>
            <View style={filterCardStyles.ranges}>
                <Subheading style={[fonts.medium, filterCardStyles.title]}>{Titles.charginSpeed}</Subheading>
                <View style={filterCardStyles.valueView}>
                    <Text style={[filterCardStyles.value, fonts.medium]}>
                    {`${kWh} kWh`}
                    </Text>
                </View>
            </View>
            <View>
                <Slider
                    style={styles.slider}
                    minimumValue={CHARGING_SPEED.minimum}
                    maximumValue={CHARGING_SPEED.maximum}
                    minimumTrackTintColor={colors.accent}
                    maximumTrackTintColor={colors.primary}
                    step={2}
                    value={kWh}
                    onValueChange={onKwh}
                />
                <View style={filterCardStyles.ranges}>
                    <Caption style={filterCardStyles.rangeMinimum}>{CHARGING_SPEED.minimum}</Caption>
                    <Caption style={filterCardStyles.rangeMax}>{CHARGING_SPEED.maximum}</Caption>
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
export const MemoChargingSpeed = memo(ChargingSpeed);