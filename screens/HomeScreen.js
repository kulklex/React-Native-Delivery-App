import { Text, View, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { styled } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRole from '../components/FeaturedRow'

const StyledView = styled(View)
const StyledText = styled(Text)



const HomeScreen = () => {
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: ``,
            headerShown: false,
        })
    }, [])


    return (
      <SafeAreaView className="bg-white pt-5 px-1">
        <StyledView>

            {/* Header */}
            <StyledView className="flex flex-row pb-3 items-center mx-4 space-x-2 px-1">
                <Image 
                    source={{ uri:'https://links.papareact.com/wru',}}
                    className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                />

                <StyledView className='flex-1'>
                    <StyledText className='text-gray-400 font-bold text-xs'>Deliver Now!</StyledText>
                    <StyledText className='font-bold text-xl'>
                        Current Location
                        <ChevronDownIcon size={20} color="#00CC88" />
                    </StyledText>
                </StyledView>

                <UserIcon size={35} color="#00CC88" />
            </StyledView>

            {/* Search */}
            <StyledView className="px-4 pb-2 space-x-2 flex-row items-center">
                <StyledView className='flex-row flex-1 space-x-2 bg-gray-200 p-3'>
                    <MagnifyingGlassIcon color="gray" size={20} />
                    <TextInput placeholder='Restaurants and cuisines' keyboardType='default' />
                </StyledView>

                <AdjustmentsVerticalIcon color="#00CC88" />
            </StyledView>

            {/* Body */}
            <ScrollView 
                className="bg-gray-100" 
                contentContainerStyle={{paddingBottom: 100,}}
            >
                {/* Categories */}
                <Categories />                


                {/* Featured */}
                <FeaturedRole id="1" title="Featured" description="Paid placements from our partners" featuredCategory="featured" />

                {/* Tasty */}
                <FeaturedRole id="1" title="Tasty Discounts" description="Everyone's been enjoying these juicy discounts" featuredCategory="discounts" />

                {/* Offers near you */}
                <FeaturedRole id="1" title="Offers near you!" description="Why not support your local restaurants" featuredCategory="offers" />
            </ScrollView>
        </StyledView>
      </SafeAreaView>
    )
}


export default HomeScreen