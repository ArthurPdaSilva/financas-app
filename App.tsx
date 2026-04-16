import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { AuthProvider } from "./src/contexts/Auth";
import { Routes } from "./src/routes";

export default function App() {
	return (
		<AuthProvider>
			<NavigationContainer>
				<StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
				<Routes />
			</NavigationContainer>
		</AuthProvider>
	);
}
