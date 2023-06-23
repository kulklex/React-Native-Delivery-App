import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'



export default function OtherRow({id, title, description, featuredCategory}) {
   const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        sanityClient.fetch(`
            *[_type == "restaurant"] {
                _id,
                title,
                image,
                short_description,
                lat,
                long,
                address,
                rating,
                genre->,
                dishes[]->,
                type-> {
                    name
                },
            }
        `).then(data => {
            setRestaurants(data)
        })
    }),[restaurants]
    
    return (
    <View className="">

      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CC88" />
      </View>

      <Text className="text-xs text-gray-500 px-4">
        {description}
      </Text>

      <ScrollView horizontal contentContainerStyle={{paddingHorizontal: 15}} showsHorizontalScrollIndicator={false} className="pt-4">
        {restaurants?.map((restaurant) =>(
            <View key={restaurant?._id}>
                <RestaurantCard 
                    id={restaurant?._id}
                    imgUrl={restaurant?.image}
                    title={restaurant?.title}
                    rating={restaurant?.rating}
                    genre={restaurant?.genre?.title}
                    address={restaurant?.address}
                    short_description={restaurant?.short_description}
                    dishes={restaurant?.dishes}
                    long={restaurant?.long}
                    lat={restaurant?.lat}
                />
            </View>
        ))}
      </ScrollView>
    </View>
  )
}