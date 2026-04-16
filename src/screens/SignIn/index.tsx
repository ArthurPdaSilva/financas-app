import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../../contexts/Auth";
import type { UserLogin } from "../../types";
import {
	AreaInput,
	Background,
	Container,
	Input,
	Link,
	LinkText,
	Logo,
	SubmitButton,
	SubmitText,
} from "./styles";

export const SignIn = () => {
	const { handleLogin, loading } = useAuth();
	const navigation = useNavigation();
	const [form, setForm] = useState<UserLogin>({
		email: "",
		password: "",
	});

	return (
		<Background>
			<Container behavior={"padding"} enabled>
				<Logo source={require("../../../assets/Logo.png")} />
				<AreaInput>
					<Input
						placeholder="E-mail"
						value={form.email}
						onChangeText={(text) => setForm({ ...form, email: text })}
					/>
				</AreaInput>

				<AreaInput>
					<Input
						placeholder="Senha"
						secureTextEntry
						value={form.password}
						onChangeText={(text) => setForm({ ...form, password: text })}
					/>
				</AreaInput>

				<SubmitButton activeOpacity={0.7} onPress={() => handleLogin(form)}>
					{loading ? (
						<ActivityIndicator size={20} color="#FFF" />
					) : (
						<SubmitText>Acessar</SubmitText>
					)}
				</SubmitButton>

				<Link onPress={() => navigation.navigate("SignUp" as never)}>
					<LinkText>Criar conta</LinkText>
				</Link>
			</Container>
		</Background>
	);
};
