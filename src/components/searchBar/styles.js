import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //SearchBar styling
    searchBarContainer: {
        marginTop: 15,
        flexDirection: 'row'
    },
    searchBarLeftButtonContainer: {
        marginLeft: 10
    },
    searchBarRightButtonContainer: {
        flexDirection: 'row',
        marginRight: 8,
        backgroundColor: defaultTheme.backgroundColor,
        paddingVertical: 9,
        paddingHorizontal: 12,
        borderRadius: 30,
        alignItems: 'center'
    },
    searchBarClockIcon: {
        marginRight: 6
    },
    searchBarRightButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: defaultTheme.primaryColor
    }
});
