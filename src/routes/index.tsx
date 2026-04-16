// Configuration Stack Router

import { ActivityIndicator, View } from "react-native";
import { useAuth } from "../contexts/Auth";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
	const { signed, loadingUser } = useAuth();

	if (loadingUser) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "#f0f4ff",
				}}
			>
				<ActivityIndicator size="large" color="#131313" />
			</View>
		);
	}

	return signed ? <AppRoutes /> : <AuthRoutes />;
}
