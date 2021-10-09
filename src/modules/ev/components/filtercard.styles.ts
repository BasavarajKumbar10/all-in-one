import { StyleSheet } from "react-native";
import { cardRadius, containerMargin, Screen } from "../../../theme/measures";

export const filterCardStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: containerMargin,
        marginTop: containerMargin,
        borderRadius: cardRadius,
    },
    chip: {
        marginRight: 4,
        marginTop: 6,
    },
    title: {
        textTransform: 'uppercase',
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
})