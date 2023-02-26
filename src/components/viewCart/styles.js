import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //ViewCart styling
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: defaultTheme.inactiveColor
    },
    modalCheckoutContainer: {
        backgroundColor: defaultTheme.backgroundColor,
        padding: 16,
        height: 500,
        borderWidth: 1
    },
    modalRestaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    },
    modalSubtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    modalSubtotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10
    },
    checkoutButtonView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: defaultTheme.iconColor,
        alignItems: 'center',
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: 'relative'
    },
    checkoutText: {
        color: 'white',
        fontSize: 20
    },
    checkoutPrice: {
        position: 'absolute',
        right: 20,
        color: 'white',
        fontSize: 15,
        top: 17
    },
    modalViewCartContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 40,
        zIndex: 999
    },
    modalViewCartView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    modalViewCartButton: {
        marginTop: 20,
        backgroundColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 8,
        borderRadius: 30,
        height: 40,
        width: 250,
        position: 'relative'
    },
    modalViewCartText: {
        color: 'white',
        fontSize: 18,
        marginRight: 30
    },
    modalViewCartPriceText: {
        color: 'white',
        fontSize: 18
    },
    modalLoadingContainer: {
        backgroundColor: 'black',
        position: 'absolute',
        opacity: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    modalAnimation: {
        height: 200
    }
});
