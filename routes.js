import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from "./pages/home"
import Passwords from "./pages/passwords"

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator>
            <Tab.Screen
             name="Home" 
             component={Home}
             options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, size})=> (
                    <MaterialCommunityIcons name="home" color={"black"} size={size}/>
                ),
                headerShown: false
             }}
             />
             
            <Tab.Screen 
            name="Passwords" 
            component={Passwords}
             options={{
                tabBarShowLabel: false,
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name="note" color={"black"} size={size}/>
                    
                ),
                headerShown: false

             }}
            />
        </Tab.Navigator>
    )
}