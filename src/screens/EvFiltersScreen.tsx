import React from 'react'
import ScreenWrapper from '../components/organisms/ScreenWrapper';
import { INavigation } from '../navigation/interfaces';
import { Text } from 'react-native';
import { UserConstants } from '../config/UserConstants';
import { EvFiltersContainer } from '../modules/ev/EvFiltersContainer';

interface IProps {
 navigation: INavigation;
}
function EvFiltersScreen(props: IProps) {
    const { navigation } = props;
    return (
       <ScreenWrapper navigation={navigation} showNavBar={true} screenTitle={UserConstants.screeTitle.evFilter}>
           <EvFiltersContainer />
       </ScreenWrapper>
    );
}

export default EvFiltersScreen;