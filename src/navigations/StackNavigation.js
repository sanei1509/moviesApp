import React from "react";
import { IconButton } from "react-native-paper";
import {createStackNavigator} from "@react-navigation/stack";

import Home from "../screens/Home";
import Movies from "../screens/Movies";
import News from "../screens/News";
import Popular from "../screens/Popular";
import Search from "../screens/Search";
import { useIsDrawerOpen } from "@react-navigation/drawer";

const Stack = createStackNavigator();

export default function StackNavigation(props){
   const { navigation } = props;
   const buttonLeft = () => {
       return (
           <IconButton 
                icon="menu"
                onPress={() => navigation.openDrawer()}
            />
       )
   }
    return(
        <Stack.Navigator>

            <Stack.Screen name="home" component={Home} options={{title: "Todo películas app", headerLeft:() => buttonLeft()}} />
            <Stack.Screen name="movies" component={Movies} options={{title: "Sinopsis", headerLeft:() => buttonLeft()}} />
            <Stack.Screen name="news" component={News} options={{title: "Novedades", headerLeft:() => buttonLeft()}} />
            <Stack.Screen name="popular" component={Popular} options={{title: "Películas mejor valoradas", headerLeft:() => buttonLeft()}} />
            <Stack.Screen name="search" component={Search} options={{title: "", headerLeft:() => buttonLeft()}}/>

        </Stack.Navigator>

    )
}