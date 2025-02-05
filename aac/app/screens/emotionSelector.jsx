import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    emotionItem: {
        width: '30%', 
        margin: 5,
        backgroundColor: '#ddd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    emotionImage: {
        width: 70,  // 根据需要调整大小
        height: 70,
        marginBottom: 5  // 为文本留出空间
    },
    emotionText: {
        fontSize: 16
    }
});

const emotions = [
  {
    id: 1, name: 'Joy', image: require('@/assets/images/joy.png') },
  { id: 2, name: 'Sadness', image: require('@/assets/images/sadness.png') },
  { id: 3, name: 'Anger', image: require('@/assets/images/anger.png') },
  { id: 4, name: 'Disgust', image: require('@/assets/images/disgust.png') },
  { id: 5, name: 'Fear', image: require('@/assets/images/fear.png') },
  { id: 6, name: 'Anxiety', image: require('@/assets/images/anxiety.png') }
];

export default function EmotionSelector({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>What's your feeling today?</Text>
            <View style={styles.grid}>
                {emotions.map((emotion) => (
                    <TouchableOpacity
                        key={emotion.id}
                        style={styles.emotionItem}
                        onPress={() => navigation.navigate('EmotionDetails', { emotion: emotion.name })}
                    >
                        <Image source={emotion.image} style={styles.emotionImage} />
                        <Text style={styles.emotionText}>{emotion.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}