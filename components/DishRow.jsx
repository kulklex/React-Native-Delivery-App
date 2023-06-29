import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useCallback, useState } from 'react'
import { urlFor } from '../sanity'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/outline'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../redux/basketSlice'
import { memoize } from 'proxy-memoize'

export default function DishRow({id, title, short_description, price, image}) {

    const [isPressed, setIsPressed] = useState(false)


    const dispatch = useDispatch()

    
    // const items = useSelector((state) => selectBasketItemsWithId(state, id))
    const items = useSelector(useCallback(memoize(state => selectBasketItemsWithId(state, id))))
    

    const addItemToBasket = () => {
        dispatch(addToBasket({id, title, short_description, price, image}))
    }

    const removeItemFromBasket = () => {
        if (!items.length > 0) return; // To make sure it stops reducing when the length becomes zero

        dispatch(removeFromBasket({id}))
    }


    return (<>
    <TouchableOpacity onPress={() => setIsPressed(!isPressed)}
     className={`flex-row items-center justify-between border bg-white ${isPressed && "border-b-0"} p-4 border-gray-200`}>
      <View>
        <Text className="text-lg mb-1">{title}</Text>
        <Text className="text-gray-400">{short_description}</Text>
        <Text className="text-green-600 mt-2">${price}</Text>
      </View>

      <View>
        <Image
            style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
            }}
            source={{uri: urlFor(image).url()}}
            className="h-20 w-20 bg-gray-300 p-4"
        />
      </View>
    </TouchableOpacity>

    {isPressed && (<View className="bg-white px-4">
        <View className="flex-row items-center space-x-2 py-3">
            <TouchableOpacity onPress={removeItemFromBasket} disabled={!items.length}>
                <MinusCircleIcon color={items.length > 0 ? "#00CC88" : "gray" } size={40} />
            </TouchableOpacity>

            <Text>
                {items?.length}
            </Text>

             <TouchableOpacity onPress={addItemToBasket}>
                <PlusCircleIcon color="#00CC88" size={40} />
            </TouchableOpacity>
        </View>
    </View>)}
  </>)
}