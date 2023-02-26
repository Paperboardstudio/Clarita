import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //OrderItem styling
    orderItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: defaultTheme.secondaryColor
    },
    orderItemName: {
        fontWeight: '600',
        fontSize: 16
    },
    orderItemPrice: {
        opacity: 0.7,
        fontSize: 16
    }
});
