import { StyleSheet } from 'react-native';

/**
 * This is the page containing all the styling for all the pages
 */
const styles = StyleSheet.create({

    //BottomTabs styling
    bottonTabsView: {
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between"
    },
    bottomTabsIcons: {
        marginBottom: 3,
        alignSelf: "center"
    },

    //Categories styling
    categoriesImage: {
        width: 50,
        height: 40,
        resizeMode: "contain",
    },
    categoriesView: {
        marginTop: 5,
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingLeft: 20,
    },

    //HeaderTabs styling
    headerTabsView: {
        flexDirection: 'row',
        alignSelf: 'center',
    },
    headerButton: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        fontSize: 15,
        fontWeight: '900',
        alignSelf: 'center',
    },
    headerButtonActive: {
        backgroundColor: 'black',
        color: 'white',
    },
    headerButtonInactive: {
        backgroundColor: 'white',
        color: 'black',
    },

    //RestaurantItems styling
    restaurantItemsContainer: {
        marginBottom: 10,
    },
    restaurantItemsInfoContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: "white",
    },
    restaurantItemsImage: {
        width: "100%",
        height: 180,
    },
    restaurantItemsFavoriteButton: {
        position: 'absolute',
        right: 20,
        top: 20,
    },
    restaurantItemsInfo: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
    },
    restaurantItemsName: {
        fontSize: 15,
        fontWeight: "bold",
    },
    restaurantItemsDeliveryTime: {
        fontSize: 13,
        color: "gray",
    },
    restaurantItemsRating: {
        backgroundColor: "#eee",
        height: 30,
        width: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
    },

    //SearchBar styling
    searchBarContainer: {
        marginTop: 15,
        flexDirection: "row",
    },
    searchBarLeftButtonContainer: {
        marginLeft: 10,
    },
    searchBarRightButtonContainer: {
        flexDirection: "row",
        marginRight: 8,
        backgroundColor: "white",
        paddingVertical: 9,
        paddingHorizontal: 12,
        borderRadius: 30,
        alignItems: "center",
    },
    searchBarClockIcon: {
        marginRight: 6,
    },
    searchBarRightButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },

    //About styling
    aboutRestaurantImage: {
        width: "100%",
        height: 180,
    },
    aboutRestaurantTitle: {
        fontSize: 29,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    },
    aboutRestaurantDescription: {
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15.5,
    },

    //MenuItems styling
    menuItemsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
    },
    menuItemsCheckboxIcon: {
        marginLeft: -15,
        borderColor: 'lightgray',
        borderRadius: 0,
    },
    menuItemsCheckboxInnerIcon: {
        borderRadius: 0,
    },
    menuItemsFoodInfoContainer: {
        width: 240,
        justifyContent: 'space-evenly',
    },
    menuItemsFoodName: {
        fontSize: 19,
        fontWeight: '600',
    },
    menuItemsFoodDescription: {
        color: 'gray',
    },
    menuItemsFoodPrice: {
        fontWeight: '600',
    },
    menuItemsFoodImage: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    menuItemsDividerStyle: {
        marginHorizontal: 20,
    },

    //OrderItem styling
    orderItemContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
    },
    orderItemName: {
        fontWeight: "600",
        fontSize: 16,
    },
    orderItemPrice: {
        opacity: 0.7,
        fontSize: 16,
    },

    //ViewCart styling
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.7)",
    },
    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    modalRestaurantName: {
        textAlign: "center",
        fontWeight: "600",
        fontSize: 18,
        marginBottom: 10,
    },
    modalSubtotalContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
    },
    modalSubtotalText: {
        textAlign: "left",
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
    },
    checkoutButtonView: {
        flexDirection: "row",
        justifyContent: "center"
    },
    checkoutButton: {
        marginTop: 20,
        backgroundColor: "black",
        alignItems: "center",
        padding: 13,
        borderRadius: 30,
        width: 300,
        position: "relative",
    },
    checkoutText: {
        color: "white",
        fontSize: 20
    },
    checkoutPrice: {
        position: "absolute",
        right: 20,
        color: "white",
        fontSize: 15,
        top: 17,
    },
    modalViewCartContainer: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        bottom: 40,
        zIndex: 999,
    },
    modalViewCartView:
    {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    modalViewCartButton: {
        marginTop: 20,
        backgroundColor: 'black',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end",
        padding: 8,
        borderRadius: 30,
        height: 40,
        width: 250,
        position: 'relative',
    },
    modalViewCartText: {
        color: "white",
        fontSize: 18,
        marginRight: 30,
    },
    modalViewCartPriceText: {
        color: "white",
        fontSize: 18
    },
    modalLoadingContainer: {
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.6,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
    },
    modalAnimation: {
        height: 200
    },

    //Login styling
    loginInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    //Register styling
    registerInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    //OrderCompleted styling
    orderCompletedContainer: {
        flex: 1,
        backgroundColor: "white",
    },
    orderCompletedContent: {
        margin: 15,
        alignItems: "center",
        height: "100%",
    },
    orderCompletedCheckMark: {
        height: 100,
        alignSelf: "center",
        marginBottom: 30,
    },
    orderCompletedConfirmation: {
        fontSize: 20,
        fontWeight: "bold",
    },
    orderCompletedCooking: {
        height: 200,
        alignSelf: "center",
    },
});

export default styles;