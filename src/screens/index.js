import React from "react";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

// import screen components
import Feed from './feed';
import MyNotes from './mynotes';
import Favorites from "./favorites";

// create a tab navigator usign the 3 screen dependencies imported
const TabNavigator = createBottomTabNavigator({
    FeedScreen: {
        screen: Feed,
        navigationOptions: {
            tabBarLabel: 'Feed'
        }
    },
    MyNotesScreen: {
        screen: MyNotes,
        navigationOptions: {
            tabBarLabel: 'MyNotes'
        }
    },
    FavoritesScreen: {
        screen: Favorites,
        navigationOptions: {
            tabBarLabel: 'Favorites'
        }
    }
});

// create the app container
export default createAppContainer(TabNavigator);