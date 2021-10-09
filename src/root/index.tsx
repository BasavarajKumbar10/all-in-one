import React, { useEffect } from "react";
import { BottomTabNavigation, EvsStackScreen } from "../navigation/BottomTabNavigation";
import MapboxGL from "@react-native-mapbox-gl/maps";
import { MAP_BOX_ACCESS_TOKEN } from "../config/constants";

MapboxGL.setAccessToken(MAP_BOX_ACCESS_TOKEN);

export default function() {

    useEffect(() => {
        MapboxGL.setTelemetryEnabled(false);
    }, [])
    return (
<>
 {/* <BottomTabNavigation /> */}
 <EvsStackScreen />
</>
    );
}