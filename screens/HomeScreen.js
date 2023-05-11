import { Text, View, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { styled } from 'nativewind'
import { useNavigation } from '@react-navigation/native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon,  } from 'react-native-heroicons/outline'

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
            <StyledView className="flex flex-row pb-3 items-center mx-4 space-x-2">
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
            <StyledView>
                <StyledView>
                    
                </StyledView>

                <AdjustmentsVerticalIcon color="#00CC88" />
            </StyledView>
        </StyledView>
      </SafeAreaView>
    )
}


export default HomeScreen