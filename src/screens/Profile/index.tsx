import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { useAuth } from "../../contexts/Auth";
import {
	Container,
	LogoutButton,
	LogoutText,
	Message,
	Name,
	NewLink,
	NewText,
} from "./styles";

export const Profile = () => {
	const { handleLogout, user } = useAuth();
	const navigation = useNavigation();

	return (
		<Container>
			<Header title="Meu Perfil" />
			<Message>Hey, Bem vindo de volta!</Message>

			{/* Adiciona aquelas ... */}
			<Name numberOfLines={1}>{user?.name}</Name>

			<NewLink onPress={() => navigation.navigate("Registrar" as never)}>
				<NewText>Fazer registro</NewText>
			</NewLink>

			<LogoutButton onPress={handleLogout}>
				<LogoutText>Sair</LogoutText>
			</LogoutButton>
		</Container>
	);
};
