import React from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet} from 'react-native'


function CreateUser() {
  return (
    <ScrollView>
    <View>
      <TextInput placeholder="Name User"/>
    </View>
    <View>
      <TextInput placeholder="Name User"/>
    </View>
    <View>
      <TextInput placeholder="Name User"/>
    </View>
    <View>
      <Button placeholder="Save User"/>
    </View>
    </ScrollView>
  );
}

export default CreateUser;
