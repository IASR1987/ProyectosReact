import React from 'react';
import { View, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 18 }}>Nombre de Usuario</Text>
            </View>
        <DrawerItemList {...props} />
        <DrawerItem
            label="Volver al Menú Principal"
            onPress={() => props.navigation.navigate('Menu Principal')}
        />
        </DrawerContentScrollView>
    );
};

export default CustomDrawerContent;
