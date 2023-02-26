import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import { Divider } from '@rneui/themed';

import styles from '../../../styles';

/**
 * A component that renders a list of food items, with optional checkboxes next to each item
 * to allow the user to select them and add them to the cart.
 * @param {object} props - The component's props.
 * @param {string} props.restaurantName - The name of the restaurant that the food items belong to.
 * @param {array} props.foods - An array of food items to render. Each item is an array of two elements:
 * a unique identifier for the item (key) and an object containing the item's details (value).
 * @param {boolean} [props.hideCheckbox=false] - Whether to hide the checkboxes next to each item.
 * @param {number} [props.marginLeft=0] - The amount of left margin to apply to each food image.
 * @returns {JSX.Element} - The rendered component.
 */
export function MenuItems({ restaurantName, foods, hideCheckbox = false, marginLeft = 0 }) {
    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cartReducer.selectedItems.items);

    const selectItem = ({ item, checkboxValue }) => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                ...item,
                restaurantName,
                checkboxValue
            }
        });
    };

    const isFoodInCart = food => Boolean(cartItems.find(item => item.name === food.name));

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map(([key, value]) => (
                <View key={key}>
                    <View style={styles.menuItemsContainer}>
                        {!hideCheckbox && (
                            <BouncyCheckbox
                                iconStyle={styles.menuItemsCheckboxIcon}
                                innerIconStyle={styles.menuItemsCheckboxInnerIcon}
                                fillColor="green"
                                isChecked={isFoodInCart(value)}
                                onPress={checkboxValue =>
                                    selectItem({ item: value, checkboxValue })
                                }
                            />
                        )}
                        <FoodInfo food={value} />
                        <FoodImage food={value} marginLeft={marginLeft} />
                    </View>
                    <Divider
                        width={0.5}
                        orientation="vertical"
                        style={styles.menuItemsDividerStyle}
                    />
                </View>
            ))}
        </ScrollView>
    );
}

/**
 * A component that renders the food item's name, description, and price.
 */
function FoodInfo({ food }) {
    return (
        <View style={styles.menuItemsFoodInfoContainer}>
            <Text style={styles.menuItemsFoodName}>{food.name}</Text>
            <Text style={styles.menuItemsFoodDescription}>{food.description}</Text>
            <Text style={styles.menuItemsFoodPrice}>{food.price}</Text>
        </View>
    );
}
/**
 *A component that renders the food item's image.
 */
function FoodImage({ food, marginLeft }) {
    return (
        <View>
            <Image
                source={{ uri: food.image }}
                style={[styles.menuItemsFoodImage, { marginLeft }]}
                accessible={true}
                accessibilityLabel={food.name}
            />
        </View>
    );
}
FoodInfo.propTypes = {
    food: PropTypes.object
};

FoodImage.propTypes = {
    food: PropTypes.object,
    marginLeft: PropTypes.number
};
MenuItems.propTypes = {
    restaurantName: PropTypes.string,
    foods: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object]))
    ),
    hideCheckbox: PropTypes.bool,
    marginLeft: PropTypes.number
};
