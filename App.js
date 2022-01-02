import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs; // ignore log notification by message
import { AuthProvider } from "./hooks/useAuth";
import StackNavigator from './StackNavigator'

export default function App() {
  console.log("hello");
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};