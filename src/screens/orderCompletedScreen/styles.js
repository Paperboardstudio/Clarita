import { StyleSheet } from 'react-native';
import { defaultTheme } from '../../utils/paths';

export const styles = StyleSheet.create({
    //OrderCompleted styling
    orderCompletedContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    orderCompletedContent: {
        margin: 15,
        alignItems: 'center',
        height: '100%'
    },
    orderCompletedCheckMark: {
        height: 100,
        alignSelf: 'center',
        marginBottom: 30
    },
    orderCompletedConfirmation: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    orderCompletedCooking: {
        height: 200,
        alignSelf: 'center'
    }
});
