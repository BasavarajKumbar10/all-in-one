
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

function navigate(name: string, params?: Object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export const Navigator = {
    navigate,
}