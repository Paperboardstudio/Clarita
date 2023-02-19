import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from "../../styles";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState('Delivery');
  return (
    <View style={styles.headerTabsView}>
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={[
      styles.headerButton,
      props.activeTab === props.title ? styles.headerButtonActive : styles.headerButtonInactive,
    ]}
    onPress={() => props.setActiveTab(props.title)}
  >
    <Text style={styles.button}>{props.title}</Text>
  </TouchableOpacity>
);