import { StyleSheet } from "react-native";
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';

const PaymentScreen = ({
  navigation
}) => {
  const [cards, setCards] = useState([{
    id: '1',
    cardNumber: '**** **** **** 1234'
  }, {
    id: '2',
    cardNumber: '**** **** **** 5678'
  }, {
    id: '3',
    cardNumber: '**** **** **** 9012'
  }]);

  const Card = ({
    card
  }) => <TouchableOpacity style={_styles.JCHDkkcJ}>
      <Text>{card.cardNumber}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={_styles.cMBLSCiV}>
      <View style={_styles.FdgmazNZ}>
        <Text style={_styles.UolpxUAR}>Payment Amount</Text>
        <TouchableOpacity style={_styles.AAOrEzQl} onPress={() => navigation.navigate('AddCard')}>
          <Text style={_styles.WhDJHyzh}>Add a new card</Text>
        </TouchableOpacity>
        <Text style={_styles.qyuJQRTf}>Select the card</Text>
        <FlatList data={cards} renderItem={({
        item
      }) => <Card card={item} />} keyExtractor={item => item.id} />
        <View style={_styles.nXsGAgRS}>
          <TouchableOpacity style={_styles.KuAiEWqR} onPress={() => alert('Pay')}>
            <Text style={_styles.XBmwfUHL}>Pay</Text>
          </TouchableOpacity>
          <TouchableOpacity style={_styles.tpTaedHi} onPress={() => navigation.goBack()}>
            <Text style={_styles.yrPsSWHE}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>;
};

export default PaymentScreen;

const _styles = StyleSheet.create({
  JCHDkkcJ: {
    padding: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
  },
  cMBLSCiV: {
    flex: 1,
    backgroundColor: "#fff"
  },
  FdgmazNZ: {
    padding: 20
  },
  UolpxUAR: {
    fontSize: 24,
    fontWeight: "bold"
  },
  AAOrEzQl: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 5
  },
  WhDJHyzh: {
    color: "#fff",
    textAlign: "center"
  },
  qyuJQRTf: {
    fontSize: 20,
    marginTop: 20
  },
  nXsGAgRS: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  KuAiEWqR: {
    flex: 1,
    padding: 15,
    backgroundColor: "#007BFF",
    borderRadius: 5,
    marginRight: 10
  },
  XBmwfUHL: {
    color: "#fff",
    textAlign: "center"
  },
  tpTaedHi: {
    flex: 1,
    padding: 15,
    backgroundColor: "#6c757d",
    borderRadius: 5,
    marginLeft: 10
  },
  yrPsSWHE: {
    color: "#fff",
    textAlign: "center"
  }
});