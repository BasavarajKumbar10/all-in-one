import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import HomeConfig from '../../config/home.json'
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
            <View style={styles.view}>
                {getSections()}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {     
         paddingBottom: scrollViewBottomSpace,
    }
})
