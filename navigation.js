import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import SettingScreen from './screens/SettingScreen'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import StackScreen from './screens/StackScreen'



const Tab = createBottomTabNavigator()

const Tabs = () => {
    return (

        <Tab.Navigator initialRouteName='Home' screenOptions={
            {
                tabBarInactiveTintColor: 'purple',
            }
        }>
            <Tab.Screen name='Home' component={Stacks}

                options={{
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" size={24} color="black" />),
                    tabBarBadge: 13,
                    headerShown: false
                }} />
            <Tab.Screen name='Setting' component={SettingScreen}

                options={{
                    tabBarBadge: 4,
                    tabBarIcon: ({ color, size }) => <Ionicons name="md-settings" size={24} color="black" />
                }} />
        </Tab.Navigator>

    )
}

const HomeStack = createStackNavigator()

const Stacks = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='HomeStack' component={HomeScreen} />
            <HomeStack.Screen name='Stack' component={StackScreen} />
        </HomeStack.Navigator>
    )
}


const Navigation = () => {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    )
}

export default Navigation