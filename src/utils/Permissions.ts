import {checkMultiple, requestMultiple, PERMISSIONS, RESULTS} from 'react-native-permissions';

const permissions = [PERMISSIONS.ANDROID.READ_PHONE_STATE]
export const requestMultipleAndroidPermissions = async () => {
    let statuses = null;
    let isGranted = null;
    try {
        statuses = await checkMultiple(permissions)
        isGranted = statuses[PERMISSIONS.ANDROID.READ_PHONE_STATE];
        console.log('check Permission', statuses);

        if(isGranted === RESULTS.GRANTED) {
            return true;
        }
        statuses = await requestMultiple(permissions)
        console.log('requested Permission', statuses);

       isGranted = statuses[PERMISSIONS.ANDROID.READ_PHONE_STATE];
       return isGranted === RESULTS.GRANTED
    } catch(e) {
        console.log('Permission error', JSON.stringify(e));
    }
}


