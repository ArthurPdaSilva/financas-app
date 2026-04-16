import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import type { User, UserLogin, UserRegister } from "../types";

type AuthContextType = {
	user: User | null;
	loading: boolean;
	loadingUser: boolean;
	signed: boolean;
	handleRegister: (user: UserRegister) => void;
	handleLogin: (user: UserLogin) => void;
	handleLogout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
	user: null,
	signed: false,
	loadingUser: true,
	loading: false,
	handleRegister: () => {},
	handleLogin: () => {},
	handleLogout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(false);
	const [loadingUser, setLoadingUser] = useState(true);

	useEffect(() => {
		const loadUser = async () => {
			try {
				setLoadingUser(true);
				const token = await AsyncStorage.getItem("@token");
				if (token) {
					api.defaults.headers.common.Authorization = `Bearer ${token}`;
					const response = await api.get("/me");
					setUser(response.data);
				}
			} catch (error) {
				console.error("Erro ao carregar usuário:", error);
				setUser(null);
			} finally {
				setLoadingUser(false);
			}
		};

		loadUser();
	}, []);

	const handleRegister = async (user: UserRegister) => {
		if (!user.name || !user.email || !user.password) {
			alert("Preencha todos os campos!");
			return;
		}

		try {
			setLoading(true);
			await api.post("/users", {
				name: user.name,
				email: user.email,
				password: user.password,
			});
		} catch (error) {
			console.error("Erro ao registrar usuário:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleLogin = async (user: UserLogin) => {
		if (!user.email || !user.password) {
			alert("Preencha todos os campos!");
			return;
		}

		try {
			setLoading(true);
			const response = await api.post("/login", {
				email: user.email,
				password: user.password,
			});
			const data = response.data;
			setUser(data);
			api.defaults.headers.common.Authorization = `Bearer ${data.token}`;
			await AsyncStorage.setItem("@token", data.token);
		} catch (error) {
			console.error("Erro ao fazer login:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleLogout = async () => {
		await AsyncStorage.clear()
			.then(() => {
				setUser(null);
				delete api.defaults.headers.common.Authorization;
			})
			.catch((error) => {
				console.error("Erro ao fazer handleLogout:", error);
			});
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				signed: !!user,
				handleRegister,
				handleLogin,
				loading,
				loadingUser,
				handleLogout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const {
		handleRegister,
		handleLogin,
		handleLogout,
		loading,
		signed,
		loadingUser,
		user,
	} = useContext(AuthContext);
	return {
		handleRegister,
		handleLogin,
		handleLogout,
		loading,
		signed,
		loadingUser,
		user,
	};
};
