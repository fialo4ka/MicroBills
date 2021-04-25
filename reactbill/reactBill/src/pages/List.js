import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
export default  class List extends Component {
    alertItemName = (item) => {
        alert(item.user_id)
     }
    render() {
        return (
           <View>
               {  
                this.props.state.map((item, index) => (
                    <TouchableOpacity
                       key = {item.id}
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
  }