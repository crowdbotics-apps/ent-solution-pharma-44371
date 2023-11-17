import React from 'react';
import { SafeAreaView, View, Text, Image, ScrollView, Button, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const App = () => {
  const pharmacies = [{
    name: 'Pharmacy 1',
    description: 'This is Pharmacy 1',
    workingHours: '9 AM - 5 PM'
  }, {
    name: 'Pharmacy 2',
    description: 'This is Pharmacy 2',
    workingHours: '10 AM - 6 PM'
  } // Add more pharmacies as needed
  ];
  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.appName}>App Name</Text>
        <TouchableOpacity style={styles.notification}>
          <Text style={styles.notificationText}>1</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section2}>
        <TextInput placeholder="Search" style={styles.search} />
        <ScrollView>
          {pharmacies.map((pharmacy, index) => <View key={index} style={styles.pharmacy}>
              <Text style={styles.pharmacyName}>{pharmacy.name}</Text>
              <Text style={styles.pharmacyDescription}>{pharmacy.description}</Text>
              <Text style={styles.pharmacyHours}>{pharmacy.workingHours}</Text>
              <Button title="Show Details" onPress={() => {}} />
            </View>)}
        </ScrollView>
      </View>

      <View style={styles.section3}>
        <Button title="Home" onPress={() => {}} />
        <Button title="My Orders" onPress={() => {}} />
        <Button title="Bookmarked Pharmacies" onPress={() => {}} />
        <Button title="Settings" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  logo: {
    width: 50,
    height: 50
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  notification: {
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  notificationText: {
    color: '#fff',
    fontSize: 10
  },
  section2: {
    flex: 1,
    padding: 10
  },
  search: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    marginBottom: 10
  },
  pharmacy: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  pharmacyName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  pharmacyDescription: {
    fontSize: 14,
    color: '#666'
  },
  pharmacyHours: {
    fontSize: 12,
    color: '#999'
  },
  section3: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
export default App;