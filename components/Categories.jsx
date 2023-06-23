import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoriesCard from './CategoriesCard'
import sanityClient from '../sanity'

export default function Categories() {
 const [categories, setCategories] = useState([])


  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"] {
        _id,
        title,
        image
      }
    `).then(data => setCategories(data))
  })

  return (
    <ScrollView 
        contentContainerStyle={{
            paddingHorizontal: 15,
            paddingTop: 10,
        }}
        horizontal 
        showsHorizontalScrollIndicator={false}>
      {categories?.map((category) => (<View key={category?._id}>
        <CategoriesCard imgUrl={category?.image}  title={category?.title} />
      </View>))}
    </ScrollView>
  )
}