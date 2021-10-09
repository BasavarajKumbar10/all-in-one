import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { Chip, Subheading, Text, useTheme } from "react-native-paper";
import { cardRadius, containerMargin } from "../../../theme/measures";
import { filterCardStyles } from "./filtercard.styles";

interface IProps {
    options: string[];
    onSelection: (str: string, isSelected: boolean) => void;
    selected: string[];
    title: string;
}

export const LabelChipOptions = memo((props: IProps) => {
    const { options, onSelection, selected, title } = props;
    const { fonts } = useTheme();

    if (!options || options.length === 0) {
        return null;
    }

    return (
        <View style={filterCardStyles.container}>
            <Subheading style={[fonts.medium, filterCardStyles.title]}>{title}</Subheading>
            <View style={styles.list}>
                {
                    options.map((str) => {
                        const isSelected = selected.includes(str);
                        const onPress = () => onSelection(str, !isSelected);
                        return <Chip
                            selected={isSelected}
                            style={styles.chip}
                            onPress={onPress}
                            // selectedColor={'#B2EBF2'}
                            // textStyle={{color: '#B2EBF2'}}
                            >
                            {str}
                        </Chip>
                    })
                }
            </View>
        </View>
    );
});

const styles = StyleSheet.create({
    list: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    text: {
        color: '#000'
    },
    chip: {
        marginRight: 4,
        marginTop: 6,
    }
})