import { View, ScrollView, Text, Image, TouchableOpacity } from 'react-native'
import React, {useLayoutEffect, useEffect, useState} from 'react'
import { useRoute, useNavigation } from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline'
import DishRow from '../components/DishRow'
import BasketCard from '../components/BasketCard'
import { useDispatch } from 'react-redux'
import { setRestaurant } from '../redux/restaurantSlice'


export default function RestaurantScreen() {
    const {params: {
     id, imgUrl, url, title, rating, genre, address, short_description, dishes, price, long, lat,
    }} = useRoute()

    const navigation = useNavigation()

    const dispatch = useDispatch()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: ``,
            headerShown: false,
        })
    }, [])


    useEffect(() => {
        dispatch(setRestaurant({id, imgUrl, url, title, rating, genre, address, short_description, dishes, long, lat}))
    }, [dispatch])

  return (<>
    {dishes && <BasketCard />}


    <ScrollView>
      <View className="relative bg-gray-700">
        <Image 
            source={{ uri: url || urlFor(imgUrl).url(),}} 
            className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
            <ArrowLeftIcon size={20} color="#00CC88" />
        </TouchableOpacity>
      </View>

      <View className="white">
        <View className="px-4 pt-4" >
            <Text className="text-3xl font-bold">{title}</Text>
            
            <View className="flex-col my-2">
                <View className="flex-row items-center space-x-1">
                    <StarIcon size={22} color="#00CC88" />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text>  .  {genre}
                    </Text>
                </View>

                <View className="flex-row items-center space-x-1 py-1">
                    <MapPinIcon color="gray" opacity={0.5} size={22} />
                    <Text className="text-xs text-gray-500">Nearby . {address}</Text>
                </View>

                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                <Text className="pl-2 flex-1 text-md font-bold">Have a food allergy?</Text>
                <ChevronRightIcon color="#00CC88" />
            </TouchableOpacity>
        </View>

        {dishes && <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">
                Menu
            </Text>

            {/* Dishes */}
            {dishes.map(dish => (
                <DishRow
                    key={dish?.short_description}
                    id={dish?._id}
                    title={dish?.title}
                    short_description={dish?.short_description}
                    price={dish?.price}
                    image={dish?.image}
                />
            ))}
        </View>}
      </View>
    </ScrollView>
  </>)
}