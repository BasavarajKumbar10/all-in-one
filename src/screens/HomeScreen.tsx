import React from 'react'
import {INavigation} from "../navigation/interfaces";
import ScreenWrapper from "../components/organisms/ScreenWrapper";
import HomeContainer from "../modules/home";

interface IProps {
 navigation: INavigation;
}
function HomeScreen(props: IProps) {
    const { navigation } = props;
    return (
       <ScreenWrapper navigation={navigation} >
           <HomeContainer />
       </ScreenWrapper>
    );
}

export default HomeScreen;
