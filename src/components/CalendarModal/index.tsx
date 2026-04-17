import { useState } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { Calendar, type DateData } from "react-native-calendars";
import "./LocaleCalendar";
import {
	ButtonFilter,
	ButtonFilterText,
	Container,
	ModalContent,
} from "./styles";

type CalendarModalProps = {
	open: boolean;
	onClose: () => void;
	setDateMovements: (date: Date) => void;
};

export const CalendarModal = ({
	open,
	onClose,
	setDateMovements,
}: CalendarModalProps) => {
	const [dateNow, setDateNow] = useState(new Date());
	const [markedDates, setMarkedDates] = useState({});

	const handleFilter = () => {
		setDateMovements(dateNow);
		onClose();
	};

	const handleDayPress = (date: DateData) => {
		setDateNow(new Date(date.dateString));
		setMarkedDates({
			[date.dateString]: {
				selected: true,
				selectedColor: "#3B3DBF",
				textColor: "#FFF",
			},
		});
	};

	return (
		<Modal visible={open} transparent animationType="fade">
			<Container>
				<TouchableWithoutFeedback onPress={onClose}>
					<View style={{ flex: 1 }}></View>
				</TouchableWithoutFeedback>

				<ModalContent>
					<Calendar
						enableSwipeMonths={true}
						onDayPress={handleDayPress}
						markedDates={markedDates}
					/>

					<ButtonFilter onPress={handleFilter}>
						<ButtonFilterText>Filtrar</ButtonFilterText>
					</ButtonFilter>
				</ModalContent>
			</Container>
		</Modal>
	);
};
