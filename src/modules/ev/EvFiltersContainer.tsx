import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { ChargingOptions } from "./components/ChargingOptions";

export function EvFiltersContainer(){

    return (
        <ScrollView style={styles.container}>
            <ChargingOptions />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});