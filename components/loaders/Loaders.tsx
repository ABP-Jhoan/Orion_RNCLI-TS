import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image, Animated } from 'react-native';


const DotLoader = () => {
  const dotCount = 4; // Número de puntos en el loader
  const animationDuration = 1000; // Duración de la animación en milisegundos
  const animationDelay = 200; // Retardo entre animaciones en milisegundos

  const animatedValues = useRef(Array.from({ length: dotCount }, () => new Animated.Value(0))).current;

  function startAnimation(index : number){
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedValues[index], {
          toValue: 1,
          duration: animationDuration,
          useNativeDriver: false, // Necesario para Android
        }),
        Animated.timing(animatedValues[index], {
          toValue: 0,
          duration: animationDuration,
          useNativeDriver: false,
        }),
      ]),
      { iterations: -1 } // Hacer que la animación se repita indefinidamente
    ).start();
  };

  useEffect(() => {
    // Iniciar las animaciones con un retraso entre cada una
    animatedValues.forEach((value, index) => {
      setTimeout(() => startAnimation(index), index * animationDelay);
    });
  }, []);

  function renderDots(){
    return animatedValues.map((value, index) => (
        <Animated.View
            key={index}
            style={[styles.dot, { opacity: value, transform: [{ scale: value }] }]}
        />
        ));
    };

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/Logo.png')}/>
            <View style={styles.dots}>
                {renderDots()}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    position: 'relative',
    top: '50%',
  },
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: '#215877',
    margin: 5,
  },
});

export default DotLoader;
