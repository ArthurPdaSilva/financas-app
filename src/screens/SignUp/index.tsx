import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import { useAuth } from "../../contexts/Auth";
import type { UserRegister } from "../../types";
import {
	AreaInput,
	Background,
	Container,
	Input,
	SubmitButton,
	SubmitText,
} from "../SignIn/styles";

export const SignUp = () => {
	const navigate = useNavigation();
	const { handleRegister, loading } = useAuth();
	const [form, setForm] = useState<UserRegister>({
		name: "",
		email: "",
		password: "",
	});

	const handleSignUp = () => {
		handleRegister(form);
		navigate.goBack();
	};

	return (
		<Background>
			<Container behavior={"padding"} enabled>
				<AreaInput>
					<Input
						placeholder="Nome"
						value={form.name}
						onChangeText={(text) => setForm({ ...form, name: text })}
					/>
				</AreaInput>

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

				<SubmitButton activeOpacity={0.7} onPress={handleSignUp}>
					{loading ? (
						<ActivityIndicator size={20} color="#FFF" />
					) : (
						<SubmitText>Cadastrar</SubmitText>
					)}
				</SubmitButton>
			</Container>
		</Background>
	);
};
