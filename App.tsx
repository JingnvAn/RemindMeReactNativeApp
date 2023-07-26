import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EventsPage from "./screens/EventsPage";
import {Colors} from "react-native/Libraries/NewAppScreen";

function EventsScreen() {
    return (
        <View>
            <EventsPage/>
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={styles.center}>
            <Text>Settings!</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Events'
                screenOptions={({ route}) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Events') {
                            iconName = focused ? 'calendar' : 'calendar-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }
                        return <Ionicons name={iconName} size={size} color={Colors.primary} />;
                    },
                    tabBarActiveTintColor: Colors.primary,
                    tabBarInactiveTintColor: Colors.secondary,
                })}>
                <Tab.Screen name="Events" component={EventsScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    center:{ flex: 1, justifyContent: 'center', alignItems: 'center' },
});
