import { createDrawerNavigator } from "@react-navigation/drawer";
import { CustomDrawer } from "../components/CustomDrawer";
import { Home } from "../screens/Home";
import { New } from "../screens/New";
import { Profile } from "../screens/Profile";

const AppDrawer = createDrawerNavigator();

export function AppRoutes() {
	return (
		<AppDrawer.Navigator
			drawerContent={(props) => <CustomDrawer {...props} />}
			screenOptions={{
				headerShown: false,
				drawerStyle: {
					backgroundColor: "#FFF",
					paddingTop: 20,
				},
				drawerItemStyle: {
					borderRadius: 0,
					marginBottom: 15,
				},

				drawerActiveBackgroundColor: "#3b3dbf",
				drawerActiveTintColor: "#FFF",

				drawerInactiveBackgroundColor: "#F0F2FF",
				drawerInactiveTintColor: "#121212",
			}}
		>
			<AppDrawer.Screen name="Home" component={Home} />
			<AppDrawer.Screen name="Registrar" component={New} />
			<AppDrawer.Screen name="Perfil" component={Profile} />
		</AppDrawer.Navigator>
	);
}
