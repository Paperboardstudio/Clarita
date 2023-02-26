import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //Categories styling
    categoriesImage: {
        width: 50,
        height: 40,
        resizeMode: 'contain'
    },
    categoriesView: {
        marginTop: 5,
        backgroundColor: defaultTheme.backgroundColor,
        paddingVertical: 10,
        paddingLeft: 20
    }
});
