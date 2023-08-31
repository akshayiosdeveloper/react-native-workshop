import React from "react";
import { Text,View,StyleSheet } from "react-native";

const BoxScreen = () => {
 return <View style={styles.viewStyle}>
    <Text style={styles.textStyle}> Child #1 </Text>
    <Text style={styles.textStyleTwo}> Child #2 </Text>
    <Text style={styles.textStyleThree}> Child #3</Text>

 </View>
};


const styles = StyleSheet.create({
 viewStyle: {
   borderWidth: 3,
   borderColor:'black',
   flexDirection:'row',
   justifyContent:'space-between',
   height:100
 },
 textStyle: {
   borderWidth:2,
   borderColor:'red',
   height:50,
   width:50
   },
 textStyleTwo: {
  borderWidth:2,
  borderColor:'yellow',
  height:50,
  width:50,
  marginTop:50,
  alignSelf:'flex-end'

},
textStyleThree: {
  borderWidth:2,
  borderColor:'green',
  height:50,
  width:50
}
});

export default BoxScreen;