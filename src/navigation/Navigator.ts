
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef()

function navigate(name: string, params?: Object) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

function getNavigator() {
  return navigationRef;
}

function goBack(): void {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
}

function canGoBack(): boolean {
  if (navigationRef.isReady()) {
    return navigationRef.canGoBack();
  }
  return false;
}

export const Navigator = {
    navigate,
    goBack,
    canGoBack
}