import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView, TextInput, StyleSheet } from 'react-native';
const pharmacies = [{
  name: 'Pharmacy 1',
  description: 'This is Pharmacy 1',
  hours: '9am - 5pm'
}, {
  name: 'Pharmacy 2',
  description: 'This is Pharmacy 2',
  hours: '10am - 6pm'
}, {
  name: 'Pharmacy 3',
  description: 'This is Pharmacy 3',
  hours: '8am - 4pm'
}];

const PharmacyScreen = () => {
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.searchBox} placeholder="Search..." />
      <ScrollView>
        {pharmacies.map((pharmacy, index) => <View key={index} style={styles.card}>
            <Image style={styles.image} source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} />
            <Text style={styles.title}>{pharmacy.name}</Text>
            <Text style={styles.description}>{pharmacy.description}</Text>
            <Text style={styles.hours}>{pharmacy.hours}</Text>
            <View style={styles.buttonContainer}>
              <Button title="Show Details" onPress={() => {}} />
              <Button title="Remove" color="red" onPress={() => {}} />
            </View>
          </View>)}
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5'
  },
  searchBox: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 10,
    padding: 10
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  description: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5
  },
  hours: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});
export default PharmacyScreen;