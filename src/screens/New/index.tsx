import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { useState } from "react";
import { Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { RegisterTypes } from "../../components/RegisterTypes";
import { api } from "../../services/api";
import type { Register } from "../../types";
import { Background, Input, SubmitButton, SubmitText } from "./styles";

export const New = () => {
	const navigation = useNavigation();

	const [form, setForm] = useState<Register>({
		label: "",
		value: "",
		type: "receita",
	});

	const handleSubmit = () => {
		Keyboard.dismiss();

		if (form.label === "" || form.value === "") {
			return alert("Preencha todos os campos");
		}

		if (Number.isNaN(Number.parseFloat(form.value))) {
			return alert("O valor deve ser um número válido");
		}
		if (form.type !== "receita" && form.type !== "despesa") {
			return alert("O tipo deve ser receita ou despesa");
		}

		Alert.alert(
			"Confirmando dados",
			`Tipo: ${form.type}\nValor: ${form.value}\nDescrição: ${form.label}`,
			[
				{ text: "Cancelar", style: "cancel" },
				{
					text: "Confirmar",
					onPress: handleAdd,
				},
			],
		);
	};

	const handleAdd = async () => {
		try {
			Keyboard.dismiss();
			await api.post("/receive", {
				description: form.label,
				value: Number.parseFloat(form.value),
				type: form.type,
				date: format(new Date(), "dd/MM/yyyy"),
			});

			alert("Registro adicionado com sucesso!");
			setForm({
				label: "",
				value: "",
				type: "receita",
			});

			navigation.navigate("Home" as never);
		} catch (error) {
			alert("Ocorreu um erro ao adicionar o registro. Tente novamente.");
			console.error("Erro ao adicionar registro:", error);
		}
	};

	return (
		// Esse carinha, quando clicado, vai fechar o teclado
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Background>
				<Header title="Registrando" />

				<SafeAreaView style={{ alignItems: "center" }}>
					<Input
						placeholder="Descrição desse registro"
						value={form.label}
						onChangeText={(text) => setForm({ ...form, label: text })}
					/>
					<Input
						placeholder="Valor desejado"
						keyboardType="numeric"
						value={form.value}
						onChangeText={(text) => setForm({ ...form, value: text })}
					/>

					<RegisterTypes
						value={form.type}
						onChange={(type) => setForm({ ...form, type })}
					/>

					<SubmitButton onPress={handleSubmit}>
						<SubmitText>Registrar</SubmitText>
					</SubmitButton>
				</SafeAreaView>
			</Background>
		</TouchableWithoutFeedback>
	);
};
