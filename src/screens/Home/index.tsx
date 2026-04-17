import { MaterialIcons } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { BalanceCard } from "../../components/BalanceCard";
import { CalendarModal } from "../../components/CalendarModal";
import { Header } from "../../components/Header";
import { HistoricList } from "../../components/HistoricList";
import { api } from "../../services/api";
import type { BalanceItem, Receives } from "../../types";
import { Area, Background, ListBalance, ListReceives, Title } from "./styles";

export const Home = () => {
	const isFocused = useIsFocused();
	const [balances, setBalances] = useState<BalanceItem[]>([]);
	const [receives, setReceives] = useState<Receives[]>([]);
	const [dateMovements, setDateMovements] = useState(new Date());
	const [open, setOpen] = useState(false);

	// biome-ignore lint/correctness/useExhaustiveDependencies: We want to trigger this effect only when the date or the screen focus changes, not on every render.
	useEffect(() => {
		let isActive = true;

		const loadMovements = async () => {
			const onlyDate = dateMovements.toISOString().split("T")[0];
			const dateFormatted = format(onlyDate, "dd/MM/yyyy");
			const receives = await api.get(`/receives?date=${dateFormatted}`);
			const balance = await api.get(`/balance?date=${dateFormatted}`);

			if (isActive) {
				setBalances(balance.data);
				setReceives(receives.data);
			}
		};

		loadMovements();

		return () => {
			isActive = false;
		};
	}, [dateMovements, isFocused]);

	return (
		<Background>
			<Header title="Minhas Movimentações" />
			<ListBalance
				data={balances}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item.tag}
				renderItem={({ item }) => <BalanceCard item={item} />}
			/>

			<Area>
				<TouchableOpacity onPress={() => setOpen((prev) => !prev)}>
					<MaterialIcons name="event" color="#121212" size={30} />
				</TouchableOpacity>
				<Title>Últimas movimentações</Title>
			</Area>

			<ListReceives
				data={receives}
				contentContainerStyle={{ paddingBottom: 20 }}
				showsVerticalScrollIndicator={false}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<HistoricList item={item} setNewDateMovements={setDateMovements} />
				)}
			/>

			<CalendarModal
				setDateMovements={setDateMovements}
				open={open}
				onClose={() => setOpen(false)}
			/>
		</Background>
	);
};
