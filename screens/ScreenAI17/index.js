import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Image, Button, ScrollView } from 'react-native';

const PharmacyScreen = () => {
  const pharmacy = {
    name: 'Pharmacy Name',
    phone: '123-456-7890',
    address: '123 Main St, Anytown, USA',
    hours: {
      from: 8,
      to: 20
    },
    description: 'This is a pharmacy description.'
  };
  const items = [{
    id: 1,
    name: 'Item 1',
    description: 'This is a short summary of item 1.',
    packageSize: '20 servings',
    price: '$20.00',
    image: 'https://tinyurl.com/42evm3m3'
  } // ... more items
  ];
  return <SafeAreaView style={_styles.qZwMLqyF}>
      <ScrollView>
        <View style={_styles.wGsNARFd}>
          <Text style={_styles.kQMQFuyE}>{pharmacy.name}</Text>
          <Text style={_styles.GCAaSydv}>{pharmacy.phone}</Text>
          <Text style={_styles.skYIzdfD}>{pharmacy.address}</Text>
          <Text style={_styles.OPqZjQem}>From: {pharmacy.hours.from} hours</Text>
          <Text style={_styles.Qzxoqgxa}>To: {pharmacy.hours.to} hours</Text>
          <Text style={_styles.olNeNYwh}>{pharmacy.description}</Text>
        </View>

        <View style={_styles.PQVueuvl}>
          <Button title="Cart" onPress={() => {}} />
          <Text style={_styles.wINiMiMB}>Available Items</Text>
          {items.map(item => <View key={item.id} style={_styles.KwDoSUOy}>
              <Image source={{
            uri: item.image
          }} style={_styles.HitNlfSL} />
              <Text style={_styles.lEIdjSaV}>{item.name}</Text>
              <Text style={_styles.LPkXogYn}>{item.description}</Text>
              <Text style={_styles.pkBVRUzy}>{item.packageSize}</Text>
              <Text style={_styles.oZuPgvnj}>{item.price}</Text>
            </View>)}
        </View>
      </ScrollView>
    </SafeAreaView>;
};

export default PharmacyScreen;

const _styles = StyleSheet.create({
  qZwMLqyF: {
    flex: 1,
    backgroundColor: "#fff"
  },
  wGsNARFd: {
    padding: 20
  },
  kQMQFuyE: {
    fontSize: 24,
    fontWeight: "bold"
  },
  GCAaSydv: {
    fontSize: 18
  },
  skYIzdfD: {
    fontSize: 18
  },
  OPqZjQem: {
    fontSize: 18
  },
  Qzxoqgxa: {
    fontSize: 18
  },
  olNeNYwh: {
    fontSize: 18
  },
  PQVueuvl: {
    padding: 20
  },
  wINiMiMB: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20
  },
  KwDoSUOy: {
    marginTop: 20
  },
  HitNlfSL: {
    width: "100%",
    height: 200
  },
  lEIdjSaV: {
    fontSize: 18,
    fontWeight: "bold"
  },
  LPkXogYn: {
    fontSize: 16
  },
  pkBVRUzy: {
    fontSize: 16
  },
  oZuPgvnj: {
    fontSize: 16,
    fontWeight: "bold"
  }
});