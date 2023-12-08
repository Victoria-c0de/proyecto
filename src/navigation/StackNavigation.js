import React from 'react';
import { IconButton } from 'react-native-paper';
import {createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Ejercicio from '../screens/Ejercicio';
import News from '../screens/News';
import Popular from '../screens/Popular';
import Search from '../screens/Search';

const Stack = createStackNavigator();

export default function StackNavigation(props) {
    const {navigation} = props;
    
    const buttonLeft = () => {
        return  <IconButton icon='menu' onPress={() => navigation.openDrawer} />;
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
            name='ejercicio'  
            component={Ejercicio} 
            options={{title: 'Trigonometria', headerLeft: () => buttonLeft()}}
            />
            <Stack.Screen
            name='home' 
            component={Home} 
            options={{title: 'MartsNavigation' ,headerLeft: () => buttonLeft()}}
            />
            <Stack.Screen
            name='news'  
            component={News}  
            options={{title: 'Nuevo Ejecicio', headerLeft: () => buttonLeft()}}
            />
            <Stack.Screen
            name='popular'  
            component={Popular} 
            options={{title: 'Imagen del dia', headerLeft: () => buttonLeft()}}
            />
            <Stack.Screen
            name='search' 
            component={Search} 
            options={{title: 'chau', headerLeft: () => buttonLeft()}}
            />
        </Stack.Navigator>
    );
}
