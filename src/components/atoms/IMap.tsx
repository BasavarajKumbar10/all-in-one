import React, { useEffect, useState } from "react";
import MapboxGL, {MapViewProps} from "@react-native-mapbox-gl/maps";
import { requestMultipleAndroidPermissions } from "../../utils/Permissions";
import { StyleSheet, ViewStyle } from "react-native";

interface IProps {
    mapProps?: MapViewProps;
    customStyle?: ViewStyle;
}
export function IMap(props: IProps) {
    const { mapProps, customStyle } = props;
    const [showMap, setShowMap] = useState(false);
    // effects
    useEffect(() => {
        (async function anyNameFunction() {
            const isGranted = await requestMultipleAndroidPermissions();
            console.log('IMAP - persmission', isGranted);
            if (isGranted) {
                setShowMap(isGranted);
            }
        })();
    }, [])

    if (!showMap) {
        return null;
    }
    return (
        <MapboxGL.MapView style={[styles.container, customStyle]} {...mapProps}/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#FAFAFA',
    }
});