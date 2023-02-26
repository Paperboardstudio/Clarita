import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //MenuItems styling
    menuItemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20
    },
    menuItemsCheckboxIcon: {
        marginLeft: -15,
        borderColor: defaultTheme.inactiveColor,
        borderRadius: 0
    },
    menuItemsCheckboxInnerIcon: {
        borderRadius: 0
    },
    menuItemsFoodInfoContainer: {
        width: 240,
        justifyContent: 'space-evenly'
    },
    menuItemsFoodName: {
        fontSize: 19,
        fontWeight: '600'
    },
    menuItemsFoodDescription: {
        color: defaultTheme.inactiveColor
    },
    menuItemsFoodPrice: {
        fontWeight: '600'
    },
    menuItemsFoodImage: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    menuItemsDividerStyle: {
        marginHorizontal: 20
    }
});
