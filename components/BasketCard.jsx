import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectBasketItems, selectBasketTotalCost } from '../redux/basketSlice'
import { useNavigation } from '@react-navigation/native'

export default function BasketCard() {
    const allItems = useSelector(selectBasketItems)
    const navigation = useNavigation()
    const basketTotalCost = useSelector(selectBasketTotalCost)

    // To make sure nothing shows when there's no item selected
    if(allItems.length === 0) return null

    return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity onPress={() => navigation.navigate("Basket")} className="bg-[#00CC88] mx-5 p-4 rounded-lg flex-row items-center space-x-1">
        <Text className="bg-green-800 rounded text-lg text-white py-1 px-2">
            {allItems.length}
        </Text>
        <Text className="flex-1 text-white font-extrabold text-lg text-center">
            View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
            ${basketTotalCost}
        </Text>
      </TouchableOpacity>
    </View>
  )
}