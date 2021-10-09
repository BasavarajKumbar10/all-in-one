import React, { useCallback, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { LabelChipOptions } from "./components/LabelChipOptions";
import EvFilters from '../../config/EvFilters.json';
import { containerMargin } from "../../theme/measures";
import { Titles } from "../../config/UserConstants";
import { MemoChargingSpeed } from "./components/ChargingSpeed";
import { MemoNextAvailability } from "./components/NextAvailability";
import { MemoRouteMap } from "./components/RouteMap";


export function EvFiltersContainer(){
    const [chargeType, setChargeType] = useState([]);
    const [operator, setOperator] = useState([]);

    const onChargeType = useCallback((str: string, isSelected: boolean) => {
        let updated: string[] = [...chargeType];
        if(!isSelected){
            updated = updated.filter((s) => s !== str);
        } else {
            updated = [...updated, str];
        }
        setChargeType(updated);
    }, [chargeType])

    const onOperator = useCallback((str: string, isSelected: boolean) => {
        let updated: string[] = [...operator];
        if(!isSelected){
            updated = updated.filter((s) => s !== str);
        } else {
            updated = [...updated, str];
        }
        setOperator(updated);
    }, [operator])

    return (
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.container}>
            <LabelChipOptions
                options={EvFilters.chargeOptions}
                selected={chargeType}
                onSelection={onChargeType}
                title={Titles.chargingOptions}
            />
             <LabelChipOptions
                options={EvFilters.operator}
                selected={operator}
                onSelection={onOperator}
                title={Titles.perticularOperator}
            />
            <MemoChargingSpeed />
            <MemoNextAvailability />
            <MemoRouteMap/>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 4,
        paddingBottom: containerMargin + 10,
    }
});