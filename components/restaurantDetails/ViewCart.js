import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items)

  let total = 0;
  if (items) {
    total = items
      .map((item) => Number(item.price.replace("$", "")))
      .reduce((prev, curr) => prev + curr, 0)
  }

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })
  console.log("poop" + items)
  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            flexDirection: 'row',
            position: 'absolute',
            bottom: 320,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <TouchableOpacity
              style={{
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
              }}
            >
              <Text style={{ color: "white", fontSize: 18, marginRight: 30 }}>
                View Cart</Text>
              <Text style={{ color: "white", fontSize: 18 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  )
}