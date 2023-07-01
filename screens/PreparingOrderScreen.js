import { SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'


export default function PreparingOrderScreen() {
    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Delivery")
        }, 5000)
    }, [])
  
  
    return (
    <SafeAreaView className="bg-[#5FD7DD] flex-1 justify-center items-center">
      <Animatable.Image 
        source={require("../assets/orderLoading.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96" 
       />

       <Animatable.Text
        animation="slideInUp"
        iterationCount={4}
        className="text-lg my-10 text-white font-bold text-center"
       >
        Waiting for Restaurant to accept your order!
       </Animatable.Text>
    </SafeAreaView>
  )
}