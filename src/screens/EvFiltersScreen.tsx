import React from 'react'
import ScreenWrapper from '../components/organisms/ScreenWrapper';
import { UserConstants } from '../config/UserConstants';
import { EvFiltersContainer } from '../modules/ev/EvFiltersContainer';

interface IProps {
}
function EvFiltersScreen(props: IProps) {
    return (
       <ScreenWrapper showNavBar={true} screenTitle={UserConstants.screeTitle.evFilter}>
           <EvFiltersContainer />
       </ScreenWrapper>
    );
}

export default EvFiltersScreen;