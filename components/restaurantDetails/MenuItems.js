import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { Divider } from '@rneui/themed'

import styles from '../../styles'

export default function MenuItems({ restaurantName, foods, hideCheckbox, marginLeft }) {
  const dispatch = useDispatch()

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue
      }
    })

  const cartItems = useSelector(state => state.cartReducer.selectedItems.items)

  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.name == food.name))

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map(([key, value], index) => (
        <View key={index}>
          <View style={styles.menuItemsContainer}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                iconStyle={styles.menuItemsCheckboxIcon}
				innerIconStyle={styles.menuItemsCheckboxInnerIcon}
                fillColor="green"
                isChecked={isFoodInCart(value, cartItems)}
                onPress={(checkboxValue) => selectItem(value, checkboxValue)}
              />
            )}
            <FoodInfo food={value} />
            <FoodImage food={value} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={styles.menuItemsDividerStyle}
          />
        </View>
      ))}
    </ScrollView>
  )
}

const FoodInfo = (props) => (
  <View style={styles.menuItemsFoodInfoContainer}>
    <Text style={styles.menuItemsFoodName}>{props.food.name}</Text>
    <Text style={styles.menuItemsFoodDescription}>{props.food.description}</Text>
    <Text style={styles.menuItemsFoodPrice}>{props.food.price}</Text>
  </View>
)

const FoodImage = ({ marginLeft, ...props }) => (
  <View>
    <Image source={{ uri: props.food.image }}
      style={[
        styles.menuItemsFoodImage,
        { marginLeft: marginLeft },
      ]}
    />
  </View>
)