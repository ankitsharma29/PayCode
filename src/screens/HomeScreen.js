import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  console.log('homescreen');

  return (
    <View style={{margin: 10, marginTop: 50}}>
      <Text style={{color: 'black'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit
        quisquam recusandae cum ipsa distinctio, itaque explicabo, consequuntur
        laboriosam neque voluptate est numquam tempora. Porro assumenda eveniet
        iure exercitationem sequi?
      </Text>
      <Text style={{color: 'black'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit
        quisquam recusandae cum ipsa distinctio, itaque explicabo, consequuntur
        laboriosam neque voluptate est numquam tempora. Porro assumenda eveniet
        iure exercitationem sequi?
      </Text>
      <Text style={{color: 'black'}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum impedit
        quisquam recusandae cum ipsa distinctio, itaque explicabo, consequuntur
        laboriosam neque voluptate est numquam tempora. Porro assumenda eveniet
        iure exercitationem sequi?
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'blue',
          borderRadius: 10,
          height: 50,
          padding: 10,
        }}
        onPress={() => {
          navigation.navigate('TestCode');
        }}>
        <Text style={{color: 'white'}}>Click PayU SDK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
