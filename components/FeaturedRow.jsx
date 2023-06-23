import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({id, title, description, featuredCategory}) {
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

        <RestaurantCard 
          id={123}
          url="https://picography.co/wp-content/uploads/2022/06/picography-plated-tacos-768x432.jpg"
          title="Tacos"
          rating={4.7}
          genre="Mexican"
          address="123 Main street"
          short_description="This is a test desc"
          dishes={['Ogbono', 'Okra', 'ewedu']}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          url="https://picography.co/wp-content/uploads/2022/12/picography-pizza-and-wine-for-two-768x1152.jpg"
          title="Pizza"
          rating={4.8}
          genre="Italian"
          address="123 Main street"
          short_description="This is a test desc"
          dishes={['Ogbono', 'Okra', 'ewedu']}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          url="https://picography.co/wp-content/uploads/2020/11/picography-kale-salad-768x432.jpg"
          title="Kale Salad"
          rating={4.2}
          genre="European"
          address="123 Main street"
          short_description="This is a test desc"
          dishes={['Ogbono', 'Okra', 'ewedu']}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          url="https://picography.co/wp-content/uploads/2019/07/picography-breakfast-flatlay-with-fruit-and-waffles-768x1015.jpg"
          title="Waffles and Berries"
          rating={4.5}
          genre="American"
          address="123 Main street"
          short_description="This is a test desc"
          dishes={['Ogbono', 'Okra', 'ewedu']}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          url="https://links.papareact.com/gn7"
          title="Yo! Sushi"
          rating={4.5}
          genre="Japanese"
          address="123 Main street"
          short_description="This is a test desc"
          dishes={['Ogbono', 'Okra', 'ewedu']}
          long={20}
          lat={0}
        />
        <RestaurantCard 
          id={123}
          url="https://links.papareact.com/wru"
          title="TTTTTTTTTT"
          rating={4.5}
          genre="Irish"
          address="123 Main street"
          short_description="This is a test desc"
          dishes={['Ogbono', 'Okra', 'ewedu']}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  )
}