import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState, useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { selectRestaurant } from '../redux/restaurantSlice'
import { removeFromBasket, selectBasketItems, selectBasketTotalCost } from '../redux/basketSlice'
import { XCircleIcon } from 'react-native-heroicons/solid'
import { urlFor } from './../sanity';

export default function BasketScreen() {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)
    const items = useSelector(selectBasketItems)
    const totalCost = useSelector(selectBasketTotalCost)
    const dispatch = useDispatch()

    const [groupedItemsInBasket, setGroupedItemsInBasket ] = useState([])


    useMemo(() => {
        // Loop through the items in your basket, create an object where by the key is checked for it's existence, if it exists, we push the items into that object. 
        // The object then contains arrays of each item selected and the key becomes the name of the arrays for each items. Remember they are all still inside an object. The arrays (named by the the item ids) will contain objects and the number of objects in each array will be determined by the number of times that particular item was selected.
        // Therefore, if we selected an item 6 times, another item 3 times and a third item once, then we'll have an object with three arrays named by the ids of each items, inside the first array will be six objects, the second array will be filled with 3 objects and the third array will be filled with one object
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item) 
            return results
        }, {})
        setGroupedItemsInBasket(groupedItems)
    }, [items])


  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00CC88] bg-white shadow-sm">
          <View>
            <Text className="text-xl font-bold text-center">
              Basket
            </Text>
            <Text className="text-center italic text-lg text-gray-400">
              {restaurant?.title}
            </Text>
          </View>

          <TouchableOpacity onPress={navigation.goBack} className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color="#00CC88" height={50} width={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image source={{
            uri: 'https://links.papareact.com/wru'
          }} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
          <Text className="flex-1">Deliver in 20-30 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CC88]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200 pb-32">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
              <Text className="text-[#00CC88]">{items.length} x</Text>
              <Image source={{uri: urlFor(items[0]?.image).url()}} className="h-12 w-12 rounded-full" />
              <Text className="flex-1">{items[0]?.title}</Text>
              <Text className="text-gray-600">${items[0]?.price}</Text>
              <TouchableOpacity>
                <Text className="text-[#00CC88] text-xs"
                onPress={() => dispatch(removeFromBasket({id: key}))}>
                  <XCircleIcon color="red" />
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">${totalCost}</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">$5.99</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="">Order Total</Text>
            <Text className="font-extrabold">${Math.round(100 * (totalCost + 5.99))/100}</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("PreparingOrder")} className="rounded-lg bg-[#00CC88] p-4 mx-4">
          <Text className="text-center text-white text-lg font-bold">
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}