import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Chip } from "react-native-paper";

export const ChargingOptions = memo(() => {
    const arr = Array(5).fill('test')
    console.log('arr', arr)
    return (
        <View style={styles.container}>
             {
                arr.map((str) => {
                    return <Chip
                    selected
                    onClose={() => {}}
                    onPress={() => console.log('Pressed')}>
                        Example Chip
                    </Chip>
                })
             }
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff'
    },
    text: {
        color: '#000'
    }
})