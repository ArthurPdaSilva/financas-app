import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const AuthStack = createNativeStackNavigator();

export function AuthRoutes() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>
			<AuthStack.Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerStyle: {
						backgroundColor: "#3B3DBF",
					},
					headerTintColor: "#FFF",
					headerTitle: "Voltar",
				}}
			/>
		</AuthStack.Navigator>
	);
}
