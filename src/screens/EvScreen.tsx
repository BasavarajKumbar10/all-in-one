import React from 'react'
import ScreenWrapper from '../components/organisms/ScreenWrapper';
import { EvsTabs } from '../modules/ev';
import EvContainer from '../modules/ev/EvContainer';
import { INavigation } from '../navigation/interfaces';
import { NavigationContainer } from '@react-navigation/native';

interface IProps {
 navigation: INavigation;
}
function EvScreen(props: IProps) {
    const { navigation } = props;
    return (
       <ScreenWrapper navigation={navigation} >
           <EvContainer />
       </ScreenWrapper>
    // <NavigationContainer>
    // <EvsTabs/>
    // </NavigationContainer>
    );
}

export default EvScreen;