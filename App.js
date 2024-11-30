import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import Slider from '@react-native-community/slider';

const App = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>Adjust the Sliders to Change Background</Text>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Red: {red}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          step={1}
          value={red}
          onValueChange={(value) => setRed(value)}
          minimumTrackTintColor="red"
          thumbTintColor="red"
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Green: {green}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          step={1}
          value={green}
          onValueChange={(value) => setGreen(value)}
          minimumTrackTintColor="green"
          thumbTintColor="green"
        />
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Blue: {blue}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={255}
          step={1}
          value={blue}
          onValueChange={(value) => setBlue(value)}
          minimumTrackTintColor="blue"
          thumbTintColor="blue"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  sliderContainer: {
    width: "90%",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  slider: {
    width: "100%",
    height: 40,
  },
});

export default App;
