import React, { memo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { filterCardStyles } from "./filtercard.styles";
import { Searchbar, Subheading, Text, useTheme } from "react-native-paper";
import { Screen } from "../../../theme/measures";
import { Titles } from "../../../config/UserConstants";
import { IMap } from "../../../components/atoms/IMap";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MapServices } from "../../../services/MapServices";
import debounce from 'lodash.debounce';

interface IProps {

}

const line = {
    lineLayer: {
        lineColor: '#EF6C00',
        lineCap: 'round',
        lineJoin: 'round',
        lineWidth: 6,
        //   lineGradient: [
        //     'interpolate',
        //     ['linear'],
        //     ['line-progress'],
        //     0,
        //     'blue',
        //     0.1,
        //     'royalblue',
        //     0.3,
        //     'cyan',
        //     0.5,
        //     'lime',
        //     0.7,
        //     'yellow',
        //     1,
        //     'red',
        //   ],
    },
};

const annotationStyles = StyleSheet.create({
    touchableContainer: { borderColor: 'black', borderWidth: 1.0, width: 60 },
    touchable: {
        backgroundColor: 'blue',
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

const AnnotationContent = () => (
    <Ionicons size={30} name='location-sharp' color="red" />
);

function RouteMap(props: IProps) {
    const { } = props;
    const { colors, fonts } = useTheme();

    const searchLocation = (searchKey) => {
        if(!searchKey || searchKey.length < 3){
            return;
        }
        MapServices.searchLocation(searchKey)
        .then((data) => console.log(data))
        .catch(e => console.log('error', e))
    }
    const onSourceSearch = (searchKey: string) => {
        debounce(searchLocation, )
    }
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
                >
                    <MapboxGL.Camera
                        centerCoordinate={[-77.035, 38.875]}
                        zoomLevel={11}
                    />
                    <MapboxGL.PointAnnotation
                        coordinate={[-77.044211, 38.852924]}
                        id="pt-ann">
                        <AnnotationContent />
                    </MapboxGL.PointAnnotation>

                    <MapboxGL.MarkerView id="pt-ann2" coordinate={[-77.033643, 38.899926]}>
                        <AnnotationContent />
                    </MapboxGL.MarkerView>
                    <MapboxGL.ShapeSource
                        id="source1"
                        lineMetrics={true}
                        shape={{
                            type: 'Feature',
                            geometry: {
                                type: 'LineString',
                                coordinates: [
                                    [-77.044211, 38.852924],
                                    [-77.045659, 38.860158],
                                    [-77.044232, 38.862326],
                                    [-77.040879, 38.865454],
                                    [-77.039936, 38.867698],
                                    [-77.040338, 38.86943],
                                    [-77.04264, 38.872528],
                                    [-77.03696, 38.878424],
                                    [-77.032309, 38.87937],
                                    [-77.030056, 38.880945],
                                    [-77.027645, 38.881779],
                                    [-77.026946, 38.882645],
                                    [-77.026942, 38.885502],
                                    [-77.028054, 38.887449],
                                    [-77.02806, 38.892088],
                                    [-77.03364, 38.892108],
                                    [-77.033643, 38.899926],
                                ],
                            },
                        }}>
                        <MapboxGL.LineLayer id="layer1" style={line.lineLayer} />
                    </MapboxGL.ShapeSource>
                </IMap>
                <View style={styles.srcDest}>
                    <Searchbar
                        placeholder="Source"
                        onChangeText={debounce(searchLocation, 500)}
                    />
                    <Searchbar
                        placeholder="Destination"
                        onChangeText={() => { }}
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