import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'

export default function RestaurantCard({
    _id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat, url, price,
}) {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image 
        source={{ uri: url || urlFor(imgUrl).url(),}}
        className="h-36 w-64 rounded-sm fit"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            {rating && <StarIcon color="green" opacity={0.5} size={22} fill='green' />}
            <Text className="text-xs text-gray-500">
                {rating && <Text className="text-green-500">{rating}</Text>}  {genre}
                {price && <View>
                  {/* <Text>{short_description}</Text> */}
                  <Text className="text-green-500 font-bold text-base">${price}</Text>
                </View>}
            </Text>
        </View>
        { address && <View className="flex-row items-center space-x-1">
            <MapPinIcon color='gray' opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">{address}</Text>
        </View>
        }
      </View>
    </TouchableOpacity>
  )
}