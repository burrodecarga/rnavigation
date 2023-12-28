import { View, Text, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'



const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text>HomeScreen</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Stack')}
            ><Text>Ir a Stack</Text></TouchableOpacity>
        </View>
    )
}

export default HomeScreen