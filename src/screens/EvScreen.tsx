import React from 'react'
import ScreenWrapper from '../components/organisms/ScreenWrapper';
import EvContainer from '../modules/ev/EvContainer';
import { INavigation } from '../navigation/interfaces';

interface IProps {
 navigation: INavigation;
}
function EvScreen(props: IProps) {
    const { navigation } = props;
    return (
       <ScreenWrapper navigation={navigation} >
           <EvContainer />
       </ScreenWrapper>
    );
}

export default EvScreen;