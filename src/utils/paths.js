// File: components.js
// Named exports only
// screens.js

import { Home } from '../screens/Home';
import { OrderCompleted } from '../screens/OrderCompleted';
import { RestaurantDetails } from '../screens/RestaurantDetails';

export { RestaurantDetails, Home, OrderCompleted };

// firebase.js
import { Login } from '../firebase/Login';
import { Register } from '../firebase/Register';
import { UserSelect } from '../firebase/UserSelect';
import { Account } from '../firebase/Account';

export { Login, Register, UserSelect, Account };

// components
import { About } from '../components/restaurantDetails/About';
import { MenuItems } from '../components/restaurantDetails/MenuItems';
import { ViewCart } from '../components/restaurantDetails/ViewCart';
import { OrderItem } from '../components/restaurantDetails/OrderItem';

export { About, MenuItems, ViewCart, OrderItem };

import { BottomTabs } from '../components/Home/BottomTabs';
import { RestaurantItems } from '../components/Home/RestaurantItems';

export { BottomTabs, RestaurantItems };
