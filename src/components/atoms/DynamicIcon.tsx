import React from "react";
import {IconsType, IIcon} from "../../config/interfaces";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {defaultIconSize} from "../../theme/measures";
import { PixelRatio } from "react-native";

interface IProps {
    icon: IIcon;
};

export default function (props: IProps){
    const { icon } = props;
    const { color = '#000000', type, size = defaultIconSize, name } = icon;
    const pixelImageSize = PixelRatio.getPixelSizeForLayoutSize(size);
   switch (type) {
       case IconsType.ionicons:
           return <Ionicons size={pixelImageSize} name={name} color={color} />
       case IconsType.materialIcon:
           return <MaterialIcons size={pixelImageSize} name={name} color={color} />
       default:
           return null;
   }
}
