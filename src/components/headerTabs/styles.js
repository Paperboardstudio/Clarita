import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //HeaderTabs styling
    headerTabsView: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    headerButton: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        fontSize: 15,
        fontWeight: '900',
        alignSelf: 'center'
    },
    headerButtonActive: {
        backgroundColor: defaultTheme.backgroundColor,
        color: defaultTheme.iconColor
    },
    headerButtonInactive: {
        backgroundColor: defaultTheme.iconColor,
        color: defaultTheme.backgroundColor
    }
});
