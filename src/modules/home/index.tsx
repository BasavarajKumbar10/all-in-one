import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import { HomeConfig } from '../../config/home'
import SectionCard from "../../components/organisms/SectionCard";
import {containerMargin, scrollViewBottomSpace} from "../../theme/measures";

export default function HomeContainer() {
    console.log('HomeContainer', HomeConfig);
    const getSections = () => {
        return (
          <>
              {
                  HomeConfig.map((section) => {
                      return <SectionCard section={section} key={section.title} />
                  })
              }
          </>
        );
    }

    return (
        <ScrollView style={styles.container}>
            {getSections()}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: containerMargin,
        paddingBottom: scrollViewBottomSpace,
        paddingTop: containerMargin,
    }
})
