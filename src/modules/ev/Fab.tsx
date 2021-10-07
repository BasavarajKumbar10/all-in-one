import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FAB, Portal, Provider } from 'react-native-paper';
import { RouteNames } from '../../navigation/RouteNames';

function Fab(){
  const navigation = useNavigation();
  
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <Provider>
      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'arrow-up' : 'plus'}
          actions={[
            {
              icon: 'plus',
              label: 'Add',
              onPress: () => console.log('Pressed Add'),
            },
            {
              icon: 'filter',
              label: 'Filter',
              onPress: () => navigation.navigate(RouteNames.evFilter),
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
  );
};

export default Fab;