import React from "react";
import { StatusBar } from "react-native";
import { Provider as PaperProvider, 
        DarkTheme as DarkThemePaper ,
        DefaultTheme as DefaultThemePaper,  
        DarkTheme
      } from "react-native-paper";
import { NavigationContainer,
          DarkTheme as DarkThemeNavigation, 
          DefaultTheme as  DefaultThemeNavigation 
        } from "@react-navigation/native";

import Navigation from "./src/navigations/Navigation"; 

export default function App(){
  DefaultThemePaper.colors.primary = "#f00950";
  DarkThemeNavigation.colors.primary = "#f00950";
  DarkThemePaper.colors.accent = "#f00930";

  DarkThemeNavigation.colors.background = "#000";
  DarkThemeNavigation.colors.card = "#0b0b0b";
  
  return(
    <PaperProvider theme={DefaultThemePaper}>
      <NavigationContainer theme={DefaultThemeNavigation}>
        <StatusBar barStyle={"light-content" } backgroundColor={"#000"}/>
      <Navigation />

      </NavigationContainer>
    </PaperProvider>
      )
}

