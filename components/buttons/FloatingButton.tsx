import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import { TapGestureHandler } from 'react-native-gesture-handler';
import { Plus } from 'lucide-react-native';

export const RotatingComponent = () => {
  const [isRotated, setRotated] = useState(false);
  const rotationValue = useSharedValue(0);

  function rotateComponent(){
    rotationValue.value = withSpring(isRotated ? 0 : 45);
    setRotated(!isRotated);
  };

  function backClose(){
    if (isRotated) {
        setRotated(false)
    }
  }

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotationValue.value}deg` }],
    };
  });

  return (
    <View style={[styles.container, isRotated ? {backgroundColor: '#8f8f8f8f'} : null]}>
        <View style={styles.optionsContainer}>
            {isRotated ? <Text>Hola</Text> : null}
            <TapGestureHandler onActivated={rotateComponent}>
                    <Animated.View style={[styles.box, animatedStyle]}>
                        <Plus color='#fff' size={30}/>
                    </Animated.View>
            </TapGestureHandler>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  optionsContainer:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#adc56f'
  },
  box: {
    width: 60,
    height: 60,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
