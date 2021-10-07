import React from "react";
import { PixelRatio, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { useTheme, Subheading, Paragraph, Caption, Card, Title, Button, Avatar, Chip, Text } from "react-native-paper";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";
import FastImage from 'react-native-fast-image'
import { AvatarInitials } from "../../../components/molecules/AvatarInititals";
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Units } from "../../../config/enums";
import { Currency } from "../../../config/UserConstants";
import { appColors } from "../../../theme/colors";

interface IProps {
    customStyle?: StyleProp<ViewStyle>;
    item: IEv;
    onBook: () => void;
};

const size = 18;

export function EvItem(props: IProps) {
    const { customStyle, item, onBook } = props;
    const { colors } = useTheme();
    const imageSize = PixelRatio.getPixelSizeForLayoutSize(size);

    const charges = (charge: ICharge) => {
        const iconProps = {
            style: { paddingVertical: 4 },
            size: 14,
        }
        const icon = charge.unit === Units.kWh ? <SimpleLineIcons name="energy" {...iconProps} /> :
            <MaterialCommunityIcons name="clock-time-four-outline" {...iconProps} />;
        return (
            <Chip avatar={icon} style={styles.chip} textStyle={styles.unit} key={charge.unit}>
                {`${Currency.INR}${charge.price}/${charge.unit}`}
            </Chip>
        )
    }
    const LeftContent = props => <AvatarInitials {...props} size={imageSize} imageUrl={item.imageUrl} />
      
    const statusColor = item.isAvailable ? appColors.green : appColors.red;
    return (
        <Card elevation={2}>
            <Card.Title
                title={item.operator}
                subtitle={item.address}
                left={LeftContent}
                subtitleNumberOfLines={2}
                titleStyle={styles.title}
            />
            <Card.Content style={styles.content}>
                {item.charges.map(charge => {
                    return charges(charge);
                })}
            </Card.Content>
            <Card.Actions style={styles.actions}>
                <Button onPress={() => {}}>Direction</Button>
                <Button onPress={onBook} disabled={!item.isAvailable} >Book</Button>
            </Card.Actions>
            <View style={[styles.status, { backgroundColor: statusColor }]}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        borderRadius: PixelRatio.getPixelSizeForLayoutSize(size) / 2,
    },
    content: {
        flexDirection: 'row',
        marginTop: 4,
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
        // alignItems: 'space-between'
    },
    chip: {
        marginLeft: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    unit: {
        marginVertical: 2,
        marginLeft: -6,
        fontSize: 12
    },
    title: {
        fontSize: 18
    },
    status: {
        // borderWidth: 1,
        // borderColor: 'green',
        // borderRadius: 50,
        width: 4,
        height: '100%',
        position: 'absolute',
        borderTopLeftRadius: 2,
        borderBottomLeftRadius: 2,
    }
});