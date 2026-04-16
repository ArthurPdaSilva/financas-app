import { Feather } from "@expo/vector-icons";
import { Container, RegisterButton, RegisterLabel } from "./styles";

type RegisterTypesProps = {
	value: "receita" | "despesa";
	onChange: (type: "receita" | "despesa") => void;
};

export const RegisterTypes = ({ value, onChange }: RegisterTypesProps) => {
	return (
		<Container>
			<RegisterButton
				checked={value === "receita"}
				onPress={() => onChange("receita")}
			>
				<Feather name="arrow-up" size={25} color={"#121212"} />
				<RegisterLabel>Receita</RegisterLabel>
			</RegisterButton>

			<RegisterButton
				checked={value === "despesa"}
				onPress={() => onChange("despesa")}
			>
				<Feather name="arrow-down" size={25} color={"#121212"} />
				<RegisterLabel>Despesa</RegisterLabel>
			</RegisterButton>
		</Container>
	);
};
