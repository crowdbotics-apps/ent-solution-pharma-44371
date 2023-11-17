import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, ScrollView, TextInput } from 'react-native';

const PaymentHistoryScreen = () => {
  const dummyData = [{
    payerName: 'John Doe',
    paymentDateTime: '2021-09-15 10:30',
    amountPaid: 100.00
  }, {
    payerName: 'Jane Doe',
    paymentDateTime: '2021-09-16 11:30',
    amountPaid: 200.00
  }];
  return <SafeAreaView style={_styles.ajFChQGz}>
      <ScrollView style={_styles.MfVNSQKH}>
        <Text style={_styles.JzICGUaB}>Payment History</Text>
        {dummyData.map((data, index) => <View key={index} style={_styles.wwIQpMTg}>
            <Text style={_styles.iuDSQgIg}>{data.payerName}</Text>
            <Text>{data.paymentDateTime}</Text>
            <Text>${data.amountPaid.toFixed(2)}</Text>
            <Button title="Download Receipt" onPress={() => {}} />
          </View>)}
        <Button title="Download Full Report" onPress={() => {}} />
        <View style={_styles.EwZGnojn}>
          <TextInput placeholder="From Date" style={_styles.fJxMevma} />
          <TextInput placeholder="To Date" style={_styles.QBzIgpJm} />
        </View>
        <Button title="Download" onPress={() => {}} style={_styles.ltTFENVm} />
      </ScrollView>
    </SafeAreaView>;
};

export default PaymentHistoryScreen;

const _styles = StyleSheet.create({
  ajFChQGz: {
    flex: 1,
    backgroundColor: "#fff"
  },
  MfVNSQKH: {
    padding: 20
  },
  JzICGUaB: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  wwIQpMTg: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#f0f0f0"
  },
  iuDSQgIg: {
    fontSize: 18,
    fontWeight: "bold"
  },
  EwZGnojn: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20
  },
  fJxMevma: {
    flex: 1,
    marginRight: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  QBzIgpJm: {
    flex: 1,
    marginLeft: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  ltTFENVm: {
    marginTop: 20
  }
});