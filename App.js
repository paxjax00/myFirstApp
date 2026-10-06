import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
// Composant Enfant recevant des Props
const CustomGreeting = ({ name }) => {
return <Text style={styles.text}>Bonjour {name} !</Text>;
};
// Composant Parent gérant le State
export default function StatePropsExample() {
const [clickCount, setClickCount] = useState(0);
return (
<View style={styles.container}>
  <CustomGreeting name="Étudiant" />
<Text style={styles.text}>Nombre de clics : {clickCount}</Text>
<Button
title="Incrémenter"
onPress={() => setClickCount(clickCount + 1)}
/>
</View>
);
}
const styles = StyleSheet.create({
container: {
padding: 20,
alignItems: 'center',
},
text: {
fontSize: 18,
marginVertical: 8,
},
});