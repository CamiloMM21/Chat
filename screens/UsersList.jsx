import React,{useEffect, useState} from 'react'
import { View, Text } from 'react-native'


function UsersList() {
  const [users, setUsers]= useState([])
  useEffect(()=>{

  },[])
  return (
    <View>
        <Text>User List</Text>
    </View>
  )
}

export default UsersList