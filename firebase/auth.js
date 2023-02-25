import auth from '@react-native-firebase/auth';

/**
 * Give this a better name later on to prevent confusion with firebase auth
 * Logs the user out of the app
 */
export const logout = () => {
    auth()
        .signOut()
        .then(() => console.log('User signed out!'));
};

/**
 * Handles changes in the user authentication state
 * @param {function} onAuthStateChanged - The function to be called when the authentication state changes.
 */
export const handleAuthStateChange = onAuthStateChanged => {
    return auth().onAuthStateChanged(onAuthStateChanged);
};
