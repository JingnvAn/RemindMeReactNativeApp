import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View } from 'react-native';

const InputBox = ({emoji, placeHolderText}) => {
  const [text, setText] = useState('');

  const handleTextChange = (inputText) => {
    setText(inputText);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.key}> {emoji} </Text>
        <TextInput
            style={styles.input}
            value={text}
            onChangeText={handleTextChange}
            placeholder={placeHolderText}
        />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    key: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginTop: 20,
        
    },
    input: {
        height: 40,
        borderColor: "white",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginTop: 10,
        marginBottom: 15,
    },
});

export default InputBox;