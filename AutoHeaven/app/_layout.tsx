import { Stack } from "expo-router"
import "../global.css";

const BrandLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerShown:false,

                headerTintColor: '#6200ee',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}
        >
            <Stack.Screen
                name="brands/[id]"
            />
        </Stack>
    )
}
export default BrandLayout;