// File: components.js
// Named exports only
// screens.js

import { Home } from '../screens/homeScreen/Home';
import { OrderCompleted } from '../screens/orderCompletedScreen/OrderCompleted';
import { RestaurantDetails } from '../screens/restaurantDetailsScreen/RestaurantDetails';

export { RestaurantDetails, Home, OrderCompleted };

// firebase.js
import { Login } from '../screens/loginScreen/Login';
import { Register } from '../screens/registerScreen/Register';
import { UserSelect } from '../screens/userSelectScreen/UserSelect';
import { Account } from '../screens/accountScreen/Account';

export { Login, Register, UserSelect, Account };

// components
import { About } from '../components/about/About';
import { MenuItems } from '../components/menuItems/MenuItems';
import { ViewCart } from '../components/viewCart/ViewCart';
import { OrderItem } from '../components/orderItem/OrderItem';

export { About, MenuItems, ViewCart, OrderItem };

import { BottomTabs } from '../components/bottomTabs/BottomTabs';
import { RestaurantItems } from '../components/restaurantItems/RestaurantItems';

export { BottomTabs, RestaurantItems };

import { defaultTheme } from '../constants/theme';
export { defaultTheme };
