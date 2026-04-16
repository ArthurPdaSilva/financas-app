import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ButtonMenu, Container, Title } from "./styles";

type HeaderProps = {
	title: string;
};

export const Header = ({ title }: HeaderProps) => {
	const navigation = useNavigation();

	return (
		<Container>
			<ButtonMenu
				onPress={() => {
					// @ts-expect-error
					navigation.openDrawer();
				}}
			>
				<Feather name="menu" size={35} color="#121212" />
			</ButtonMenu>
			<Title>{title}</Title>
		</Container>
	);
};
