import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import "../global.css";


const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#6200ee',
        tabBarInactiveTintColor: '#828282',
        tabBarStyle: {
          backgroundColor: '#ffffff',
          borderTopWidth: 0,

          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 8,
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="brands/[id]"
        options={{
          title: 'Modelen voor dit merk',
          href: null
        }}
      />
    </Tabs>
  );
}

export default HomeLayout;