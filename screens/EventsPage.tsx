import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {IconButton} from "react-native-paper";
import {Colors} from "react-native/Libraries/NewAppScreen";

const EventsPage = () => {
    const iconName = 'pencil-outline';
    const onPressCreateEvent = () => {
        // open modal up
        console.log('Pressed');
    }

    return (
        <View style={styles.OutMostContainer}>
            <View style={styles.InnerContainer1}>
            </View>
            <View style={styles.InnerContainer2}>
            </View>
            <View style={styles.InnerContainer3}>
                <IconButton icon={iconName} size={50} iconColor={Colors.primary} onPress={onPressCreateEvent}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    OutMostContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    InnerContainer1: {
        flex:3,
        backgroundColor: 'powderblue',
    },
    InnerContainer2: {
        flex:3,
        backgroundColor: 'skyblue',
    },
    InnerContainer3: {
        flex:1,
        backgroundColor: 'steelblue',
    },
})

export default EventsPage;