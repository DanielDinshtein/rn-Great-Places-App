import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import PlacesListScreen from '../screens/PlacesListScreen';
import PlacesDetailScreen from '../screens/PlaceDetailScreen';
import NewPlacesScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';


const PlacesNavigator = createStackNavigator({
    Places: PlacesListScreen,
    PlaceDetail: PlacesDetailScreen,
    NewPlace: NewPlacesScreen,
    Map: MapScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});


export default createAppContainer(PlacesNavigator);

