import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //RestaurantItems styling
    restaurantItemsContainer: {
        marginBottom: 10
    },
    restaurantItemsInfoContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: defaultTheme.backgroundColor
    },
    restaurantItemsImage: {
        width: '100%',
        height: 180
    },
    restaurantItemsFavoriteButton: {
        position: 'absolute',
        right: 20,
        top: 20
    },
    restaurantItemsInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },
    restaurantItemsName: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    restaurantItemsDeliveryTime: {
        fontSize: 13,
        color: defaultTheme.inactiveColor
    },
    restaurantItemsRating: {
        backgroundColor: defaultTheme.restaurantbackGroundColor,
        height: 30,
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15
    }
});
