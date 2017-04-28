import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

interface ButtonProps {
  onPress(): void
}

// use flow-incompatible type to make sure we're doing TS
type Type = keyof Partial<{
  readonly value: 5
}>;

export default ({onPress}: ButtonProps) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{padding: 5, borderRadius: 5, backgroundColor: '#FFEEEE'}}>
      <Text>Touch me, for I am a button</Text>
    </View>
  </TouchableOpacity>
);
