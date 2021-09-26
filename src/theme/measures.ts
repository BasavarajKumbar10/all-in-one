import {Dimensions, PixelRatio} from "react-native";

export const Screen = {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
}

export const containerMargin = 16;
export const defaultIconSize = 9;
export const scrollViewBottomSpace = PixelRatio.getPixelSizeForLayoutSize(8)
