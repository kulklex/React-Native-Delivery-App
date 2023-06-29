import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { StarIcon, MapPinIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

export default function RestaurantCard({
    id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat, url, price,
}) {

  const navigation = useNavigation()
  
  return (
    <TouchableOpacity 
      className="bg-white mr-3 shadow rounded-sm" 
      onPress={() => {
        navigation.navigate('Restaurant', {id, imgUrl, url, title, rating, genre, address, short_description, dishes, price, long, lat,})
      }}
    >
      <Image 
        source={{ uri: imgUrl ? urlFor(imgUrl).url() : url,}}
        className="h-36 w-64 rounded-sm"
      />
      <View className={`px-3 pb-4 ${price ? "flex flex-row  justify-between" : ""}`}>
        <Text className="font-bold text-lg pt-2">{title}</Text>
        {price && 
          <Text className="text-green-500 font-bold text-lg pt-2">${price}</Text>
        }
        <View className="flex-row items-center space-x-1">
            {rating && <StarIcon color="green" opacity={0.5} size={22} fill='green' />}
            <Text className="text-xs text-gray-500">
                {rating && <Text className="text-green-500">{rating}</Text>}  {genre}
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