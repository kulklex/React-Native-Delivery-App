import { View, Text, ScrollView } from 'react-native'
import React, {useEffect, useState} from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'


export default function DishesRow({id, title, description, featuredCategory}) {

const [dishes, setDishes] = useState([])


  useEffect(() => {
    sanityClient.fetch(`
        *[_type == "dish"] {
            title,
            _id,
            short_description,
            price,
            image,
        } 
    `).then((data) => setDishes(data))
})
  
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
        {dishes.map((dish) => (<View>
            <RestaurantCard 
                id={dish?._id}
                imgUrl={dish?.image}
                title={dish?.title}
                price={dish?.price}
                short_description={dish?.short_description}
            />
        </View>))}
      </ScrollView>
    </View>
  )
}