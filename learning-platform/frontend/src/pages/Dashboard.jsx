import { Box, Grid, Heading, SimpleGrid, Stat, StatLabel, StatNumber, StatGroup, VStack, HStack, Icon, Text, Progress, useColorModeValue } from '@chakra-ui/react';
import { FaCode, FaTrophy, FaUserFriends, FaChartLine } from 'react-icons/fa';
import Leaderboard from '../components/Leaderboard';

const Dashboard = () => {
  // Dummy data
  const stats = {
    completedChallenges: 15,
    totalPoints: 1250,
    rank: 42,
    streak: 7
  };

  const dummyUsers = [
    { id: 1, name: 'Sarah Chen', points: 15000, level: 25, avatarBg: 'purple.500' },
    { id: 2, name: 'John Smith', points: 12500, level: 20, avatarBg: 'blue.500' },
    { id: 3, name: 'Maria Garcia', points: 10000, level: 18, avatarBg: 'green.500' },
    { id: 4, name: 'Alex Kim', points: 8750, level: 15, avatarBg: 'red.500' },
    { id: 5, name: 'Lisa Wang', points: 7500, level: 12, avatarBg: 'orange.500' },
  ];

  const StatCard = ({ icon, label, value, color }) => (
    <Box
      p={5}
      bg={useColorModeValue('white', 'gray.800')}
      borderRadius="lg"
      boxShadow="sm"
      transition="all 0.2s"
      _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
    >
      <VStack spacing={2} align="start">
        <Icon as={icon} w={6} h={6} color={color} />
        <StatLabel fontSize="sm" color="gray.500">{label}</StatLabel>
        <StatNumber fontSize="2xl" fontWeight="bold">{value}</StatNumber>
      </VStack>
    </Box>
  );

  return (
    <Box maxW="container.xl" mx="auto" pt={8} px={4}>
      <VStack spacing={8} align="stretch">
        <Grid templateColumns={{ base: '1fr', md: '2fr 1fr' }} gap={8}>
          <VStack align="stretch" spacing={6}>
            <Heading size="lg">Welcome back!</Heading>
            
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
              <StatCard
                icon={FaCode}
                label="Completed Challenges"
                value={stats.completedChallenges}
                color="blue.500"
              />
              <StatCard
                icon={FaTrophy}
                label="Total Points"
                value={stats.totalPoints}
                color="yellow.500"
              />
              <StatCard
                icon={FaUserFriends}
                label="Global Rank"
                value={`#${stats.rank}`}
                color="purple.500"
              />
              <StatCard
                icon={FaChartLine}
                label="Day Streak"
                value={stats.streak}
                color="green.500"
              />
            </SimpleGrid>

            <Box
              bg="white"
              p={6}
              borderRadius="lg"
              boxShadow="sm"
            >
              <VStack align="stretch" spacing={4}>
                <Heading size="md">Your Progress</Heading>
                <HStack justify="space-between">
                  <Text>Level 15</Text>
                  <Text color="gray.500">3750/5000 XP</Text>
                </HStack>
                <Progress 
                  value={75} 
                  size="sm" 
                  colorScheme="blue" 
                  borderRadius="full"
                />
                <Text fontSize="sm" color="gray.500">
                  Complete 2 more challenges to reach Level 16
                </Text>
              </VStack>
            </Box>
          </VStack>

          <VStack align="stretch" spacing={6}>
            <Heading size="lg">Leaderboard</Heading>
            <Leaderboard users={dummyUsers} />
          </VStack>
        </Grid>
      </VStack>
    </Box>
  );
};

export default Dashboard;
