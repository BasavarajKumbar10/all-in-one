import React from "react";
import { IconsType } from "../../config/enums";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { defaultIconSize } from "../../theme/measures";
import { PixelRatio } from "react-native";
import { IIcon } from "../../interfaces/homeData";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface IProps {
    icon: IIcon;
};

export default function (props: IProps) {
    const { icon } = props;
    const { color = '#000000', type, size = defaultIconSize, name } = icon;
    const pixelImageSize = PixelRatio.getPixelSizeForLayoutSize(size);
    console.log('Dynamic icon', icon)
    switch (type) {
        case IconsType.Ionicons:
            return <Ionicons size={pixelImageSize} name={name} color={color} />
        case IconsType.MaterialIcons:
            return <MaterialIcons size={pixelImageSize} name={name} color={color} />
        case IconsType.MaterialCommunityIcons:
            return <MaterialCommunityIcons size={pixelImageSize} name={name} color={color} />
            case IconsType.FontAwesome:
                return <FontAwesome5 size={pixelImageSize} name={name} color={color} />
            
            default:
            return null;
    }
}
