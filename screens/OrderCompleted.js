import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import AnimatedLottieView from "lottie-react-native";
import firestore from '@react-native-firebase/firestore'
import MenuItems from "../components/restaurantDetails/MenuItems";

export default function OrderCompleted() {
    //needs to be updated
    const [lastOrder, setLastOrder] = useState({ items: [] });

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems)

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString("en", {
        style: "currency",
        currency: "USD",
    });

    useEffect(() => {
        const unsubscribe = firestore()
            .collection("orders")
            .orderBy("createdAt", "desc")
            .limit(1)
            .onSnapshot(snapshot => {
                snapshot.docs.forEach(doc => {
                    const items = Object.entries(doc.data().items).map(([key, value]) => [key, value]);
                    setLastOrder({ items });
                });
            });
        return unsubscribe;
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <View
                style={{
                    margin: 15,
                    alignItems: "center",
                    height: "100%",
                }}
            >
                <AnimatedLottieView
                    style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                    source={require("../assets/animations/check-mark.json")}
                    autoPlay
                    speed={0.5}
                    loop={false}
                />
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Your order at {restaurantName.restaurantName} has been placed for {totalUSD}
                </Text>
                <ScrollView>
                    <MenuItems
                        foods={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <AnimatedLottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}