import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
export default  class List extends Component {
   alertItemName = (item) => {
      alert(item.user_id)
   }
    render() {
      console.log(Array.isArray(this.props.state));
      if (this.props.state != undefined) {
         console.log(this.props.state);
         return (
           <View>
               {  
                this.props.state.map((item, index) => (
                    <TouchableOpacity
                       key = {index}
                       onPress = {() => this.alertItemName(item)}>
                       <Text>
                          {item.amount}/{item.date}
                       </Text>
                    </TouchableOpacity>
                 ))
              } 
           </View>
        )         
      }
      else{
         return (
            <View>
               <Text>Some error ocures</Text>
            </View>
         )
      }
   }
}