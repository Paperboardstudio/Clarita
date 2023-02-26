import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    bottomTabsView: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bottomTabsIconContainer: {
        flex: 1,
        margin: 5,
        alignItems: 'stretch',
        justifyContent: 'space-evenly'
    },
    bottomTabsIconWrapper: {},
    bottomTabsIcon: {
        color: defaultTheme.iconColor
    },
    bottomTabsText: {
        color: defaultTheme.textColor
    }
});
