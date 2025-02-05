import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmotionDetailsScreen = ({ route }) => {
  const emotion = route?.params?.emotion;  // Using optional chaining for safety

  if (!emotion) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>No emotion provided!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Expressions for {emotion}</Text>
      <Text style={styles.content}>{getContentForEmotion(emotion)}</Text>
    </View>
  );
};

const getContentForEmotion = (emotion) => {
  switch (emotion) {
    case 'Joy':
      return 'Smiling, laughing...';
    case 'Sadness':
      return 'Tears, frowning...';
    case 'Anger':
      return 'Frowning, yelling...';
    default:
      return 'No specific expressions available.';
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  content: {
    fontSize: 18,
    marginTop: 20
  },
  error: {
    fontSize: 18,
    color: 'red'
  }
});

export default EmotionDetailsScreen;