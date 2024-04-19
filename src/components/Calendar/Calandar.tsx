import React, { useState } from "react";
import { Box, Button, Flex, Grid, GridItem, IconButton, Select, Text, useDisclosure } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const startDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasAppointment, setHasAppointment] = useState<boolean>(false);
  const [selectedDayAppointments, setSelectedDayAppointments] = useState<Appointment[]>([]);

  const appointments: Appointment[] = [
    { date: "2024-04-10", time: "09:00", client: "João", professional: 'carlos', status: 'CANCELADO' },
    { date: "2024-04-18", time: "10:00", client: "Maria", professional: 'carlos', status: 'MARCADO' },
    { date: "2023-05-12", time: "11:00", client: "Pedro", professional: 'carlos', status: 'CANCELADO' },
  ];

  const Agenda = [
    { id: 1, professional: "João Silva", date: '2023-04-12' },
    { id: 1, professional: "João Silva", date: '2024-04-10' },
    { id: 1, professional: "João Silva", date: '2024-04-18' },
    { id: 1, professional: "João Silva", date: '2024-04-19' },
    { id: 1, professional: "João Silva", date: '2024-04-20' },
  ];

  const isOpenBook = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const appointmentsForDay = Agenda.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointmentDate.getFullYear() === selectedDate.getFullYear() &&
        appointmentDate.getMonth() === selectedDate.getMonth() &&
        appointmentDate.getDate() + 1 === selectedDate.getDate()
      );
    });
    setHasAppointment(appointmentsForDay.length > 0);
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < startDayOfMonth; i++) {
      days.push("");
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    while (days.length % 7 !== 0) {
      days.push("");
    }
    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDayClick = (day: number): void => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const appointmentsForDay = appointments.filter((appointment) => {
      const appointmentDate = new Date(appointment.date);
      return (
        appointmentDate.getFullYear() === selectedDate.getFullYear() &&
        appointmentDate.getMonth() === selectedDate.getMonth() &&
        appointmentDate.getDate() + 1 === selectedDate.getDate()
      );
    });
    setSelectedDayAppointments(appointmentsForDay);
    onOpen();
  };

  type Appointment = {
    date: string;
    time: string;
    client: string;
    professional?: string;
    status: 'MARCADO' | 'CANCELADO' | 'CONCLUIDO';
  };

  const professionals = [
    { id: 1, name: "João Silva" },
    { id: 2, name: "Maria Santos" },
    { id: 3, name: "Pedro Oliveira" }
  ];

  const locations = [
    { id: 1, name: "Coronel Fab" },
    { id: 2, name: "Ipatinga" },
  ];

  return (
    <Box p={4}>
      <Flex w={'100%'} gap={8} justifyContent={'center'} maxW={'960px'}>
        <Box>
          <Text>Profissional:</Text>
          <Select w={'md'} placeholder="Selecione">
            {professionals.map((professional) => (
              <option key={professional.id} value={professional.id}>
                {professional.name}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Text>Local:</Text>
          <Select w={'md'} placeholder="Selecione">
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </Select>
        </Box>
      </Flex>

      <Flex ml={12} justifyContent={'center'} alignItems={'baseline'} maxW={'640px'} my={10}>
        <IconButton icon={<ChevronLeftIcon />} h={'28px'} onClick={goToPreviousMonth} mr={'80px'} bg={'gray.200'} aria-label="Previous Month" />
        <Text fontSize="xx-large" display={'flex'} justifyContent={'center'} textAlign={'center'} fontWeight="bold" mx={4}>
          {currentDate.toLocaleDateString("default", { month: "long", year: "numeric" })}
        </Text>
        <IconButton icon={<ChevronRightIcon />} h={'28px'} display={'flex'} backgroundColor={'gray.200'} ml={'80px'} onClick={goToNextMonth} aria-label="Next Month" />
      </Flex>

      <Flex justifyContent={'space-between'} gap={'16px'}>
        <Grid maxWidth={1024} justifyContent="center" templateColumns="repeat(7, 1fr)" gap={2}>
          {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"].map((day, index) => (
            <GridItem key={index} textAlign="center" color="gray.700" fontSize={'16px'} fontWeight="bold">{day}</GridItem>
          ))}
          {renderDays().map((day, index) => (
            <GridItem
              key={index}
              textAlign="center"
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              borderRadius="md"
              border="2px solid"
              borderColor="gray.300"
              width="104px"
              height="80px"
              _hover={{ bg: "gray.300", color: "gray.800" }}
              onClick={() => {
                isOpenBook(Number(day));
                handleDayClick(Number(day));
              }}
            >
              {Number(day) > 0 ? day : ""}
            </GridItem>
          ))}
        </Grid>
        <Box border='1px solid' mt={8} borderColor={'gray.300'} w={'400px'} p={4} borderRadius={'md'}>
          <Text fontSize={'lg'} fontWeight={'bold'} textAlign={'center'} mb={4}>Agendamentos do Dia</Text>
          {hasAppointment ? (
            <Box mb={16} mt={4}>
              <Flex mb={4} gap={2}>
                <Button w={64} background={'green.400'} size="md">Relatórios</Button>
                <Button w={64} background={'blue.400'} size="md">Agendar</Button>
              </Flex>
              <Flex gap={2}>
                <Button w={64} background={'orange.400'} size="md">Gerenciar Horários</Button>
                <Button w={64} background={'red.400'} size="md">Bloquear dia</Button>
              </Flex>
            </Box>
          ) : (
            <Box>
                <Flex justifyContent={'center'} my={4} gap={2}>
              <Text fontWeight={'bold'} mt={10}>Nenhuma Agenda Disponível Para esse dia</Text>
              </Flex>
              <Flex  justifyContent={'center'} alignItems={'center'}  gap={2}>
                <Button w={64} background={'blue.400'} size="md">Abrir Agenda</Button>
              </Flex>
           
              
            </Box>
          )}
          {selectedDayAppointments.length > 0 ? (
            selectedDayAppointments.map((appointment, index) => (
              <Box
                key={index}
                mb={2}
                borderRadius={8}
                p={4}
                bg={'gray.100'}
                border={'4px solid'}
                borderColor={'gray.200'}
                position="relative"
              >
                {appointment.status === 'MARCADO' && (
                  <Box
                    position="absolute"
                    top={2}
                    right={2}
                    bg="orange.500"
                    color="white"
                    borderRadius="md"
                    px={2}
                    py={1}
                    fontWeight={'bold'}
                    fontSize="xs"
                  >
                    Marcado
                  </Box>
                )}
                {appointment.status === 'CONCLUIDO' && (
                  <Box
                    position="absolute"
                    top={2}
                    right={2}
                    bg="green.500"
                    color="white"
                    borderRadius="md"
                    px={2}
                    py={1}
                    fontWeight={'bold'}
                    fontSize="xs"
                  >
                    Marcado
                  </Box>
                )}
                {appointment.status === 'CANCELADO' && (
                  <Box
                    position="absolute"
                    top={2}
                    right={2}
                    bg="red.500"
                    color="white"
                    borderRadius="md"
                    px={2}
                    py={1}
                    fontSize="xs"
                    fontWeight={'bold'}
                  >
                    Cancelado
                  </Box>
                )}
                <Text><strong>Data:</strong> {appointment.date}</Text>
                <Text><strong>Hora:</strong> {appointment.time}</Text>
                <Text><strong>Cliente:</strong> {appointment.client}</Text>
              </Box>
            ))
          ) : (selectedDayAppointments.length == 0 &&hasAppointment)&&(
            <Text>Nenhum agendamento para este dia.</Text>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

export default Calendar;
