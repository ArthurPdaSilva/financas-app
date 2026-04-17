import { Feather } from "@expo/vector-icons";
import { Alert, TouchableWithoutFeedback } from "react-native";
import { api } from "../../services/api";
import type { Receives } from "../../types";
import { Container, IconView, TypeText, TypeView, ValueText } from "./styles";

type HistoricListProps = {
	item: Receives;
	setNewDateMovements: (date: Date) => void;
};

export const HistoricList = ({
	item,
	setNewDateMovements,
}: HistoricListProps) => {
	const handleDelete = async () => {
		try {
			await api.delete(`/receives/delete?item_id=${item.id}`);
			alert("Item excluído com sucesso!");
			setNewDateMovements(new Date());
		} catch (error) {
			alert("Erro ao excluir item");
			console.error("Erro ao excluir item:", error);
		}
	};

	const handleDeleteItem = () => {
		Alert.alert(
			"Confirmar exclusão",
			"Tem certeza que deseja excluir este item?",
			[
				{ text: "Cancelar", style: "cancel" },
				{
					text: "Excluir",
					onPress: handleDelete,
				},
			],
		);
	};

	return (
		// on long press é o toque demorado
		<TouchableWithoutFeedback onLongPress={handleDeleteItem}>
			<Container>
				<TypeView>
					<IconView type={item.type}>
						<Feather
							name={item.type === "receita" ? "arrow-up" : "arrow-down"}
							size={20}
							color="#fff"
						/>
						<TypeText>{item.type}</TypeText>
					</IconView>
				</TypeView>
				<ValueText>R$ {item.value.toFixed(2)}</ValueText>
			</Container>
		</TouchableWithoutFeedback>
	);
};
