import { StyleSheet } from "react-native";
import { cardRadius, containerMargin } from "../../../theme/measures";

export const filterCardStyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 16,
        marginHorizontal: containerMargin,
        marginTop: containerMargin,
        borderRadius: cardRadius,
    },
})