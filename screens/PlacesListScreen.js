import react from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const PlaceListScreen = props => {
    return(
        <View>
            <Text>PlaceListScreen</Text>
        </View>
    );
}

PlaceListScreen.navigationOptions = navData => {
    return {
        headerTitle: 'All Places',
        headerRight: () =>
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item
                    title="Add Place"
                    iconName={ Platform.OS === 'android' ? 'md-add' : 'ios-add' }
                    onPress={() => {
                        navData.navigation.navigate('NewPlace');
                    }}
                />
            </HeaderButtons>
    };
};

const styles = StyleSheet.create({

});

export default PlaceListScreen;
