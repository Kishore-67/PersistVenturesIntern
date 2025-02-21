import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Text,
  VStack,
  HStack,
  Progress,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Badge,
} from '@chakra-ui/react';
import { FaTrophy, FaCode, FaFire, FaStar } from 'react-icons/fa';

const Dashboard = () => {
  // Dummy data
  const stats = {
    completedChallenges: 15,
    totalPoints: 1250,
    streak: 7,
    ranking: 42
  };

  const recentActivities = [
    { 
      challenge: "Array Manipulation",
      type: "Medium",
      points: 50,
      status: "Completed",
      date: "2 hours ago"
    },
    {
      challenge: "String Reversal",
      type: "Easy",
      points: 30,
      status: "In Progress",
      date: "5 hours ago"
    },
    {
      challenge: "Binary Search",
      type: "Medium",
      points: 50,
      status: "Completed",
      date: "1 day ago"
    }
  ];

  const leaderboard = [
    { name: "John Doe", points: 2500, rank: 1, avatar: "https://bit.ly/dan-abramov" },
    { name: "Jane Smith", points: 2350, rank: 2, avatar: "https://bit.ly/ryan-florence" },
    { name: "Bob Johnson", points: 2200, rank: 3, avatar: "https://bit.ly/kent-c-dodds" },
    { name: "Alice Brown", points: 2100, rank: 4, avatar: "https://bit.ly/prosper-baba" },
    { name: "Charlie Wilson", points: 2000, rank: 5, avatar: "https://bit.ly/code-beast" }
  ];

  const skillProgress = [
    { skill: "JavaScript", progress: 75 },
    { skill: "Python", progress: 60 },
    { skill: "Java", progress: 45 },
    { skill: "C++", progress: 30 }
  ];

  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading>Welcome back, Developer!</Heading>

        {/* Stats Grid */}
        <SimpleGrid columns={{ base: 2, md: 4 }} spacing={6}>
          <StatBox
            icon={<FaCode />}
            label="Challenges Completed"
            value={stats.completedChallenges}
            helpText="Keep coding!"
          />
          <StatBox
            icon={<FaTrophy />}
            label="Total Points"
            value={stats.totalPoints}
            helpText="Points earned"
          />
          <StatBox
            icon={<FaFire />}
            label="Current Streak"
            value={`${stats.streak} days`}
            helpText="Stay consistent!"
          />
          <StatBox
            icon={<FaStar />}
            label="Global Ranking"
            value={`#${stats.ranking}`}
            helpText="Top 100!"
          />
        </SimpleGrid>

        {/* Main Content Grid */}
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {/* Recent Activity */}
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={4}>Recent Activity</Heading>
            <VStack spacing={4} align="stretch">
              {recentActivities.map((activity, index) => (
                <Box key={index} p={4} borderWidth="1px" borderRadius="md">
                  <HStack justify="space-between">
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="bold">{activity.challenge}</Text>
                      <HStack>
                        <Badge colorScheme={activity.type === "Easy" ? "green" : "orange"}>
                          {activity.type}
                        </Badge>
                        <Text fontSize="sm" color="gray.500">{activity.points} points</Text>
                      </HStack>
                    </VStack>
                    <VStack align="end" spacing={1}>
                      <Badge colorScheme={activity.status === "Completed" ? "green" : "blue"}>
                        {activity.status}
                      </Badge>
                      <Text fontSize="sm" color="gray.500">{activity.date}</Text>
                    </VStack>
                  </HStack>
                </Box>
              ))}
            </VStack>
          </Box>

          {/* Leaderboard */}
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={4}>Top Performers</Heading>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Rank</Th>
                  <Th>User</Th>
                  <Th isNumeric>Points</Th>
                </Tr>
              </Thead>
              <Tbody>
                {leaderboard.map((user, index) => (
                  <Tr key={index}>
                    <Td>#{user.rank}</Td>
                    <Td>
                      <HStack>
                        <Avatar size="sm" src={user.avatar} />
                        <Text>{user.name}</Text>
                      </HStack>
                    </Td>
                    <Td isNumeric>{user.points}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </SimpleGrid>

        {/* Skills Progress */}
        <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
          <Heading size="md" mb={4}>Skills Progress</Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            {skillProgress.map((skill, index) => (
              <Box key={index}>
                <HStack justify="space-between" mb={2}>
                  <Text>{skill.skill}</Text>
                  <Text>{skill.progress}%</Text>
                </HStack>
                <Progress value={skill.progress} colorScheme="blue" borderRadius="full" />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

// Stat Box Component
const StatBox = ({ icon, label, value, helpText }) => (
  <Stat
    px={4}
    py={5}
    bg="white"
    borderRadius="lg"
    boxShadow="sm"
    position="relative"
    _hover={{ transform: 'translateY(-2px)', boxShadow: 'md' }}
    transition="all 0.2s"
  >
    <Box
      position="absolute"
      top={2}
      right={2}
      color="blue.500"
      fontSize="xl"
    >
      {icon}
    </Box>
    <StatLabel fontSize="sm" color="gray.500">{label}</StatLabel>
    <StatNumber fontSize="2xl" fontWeight="bold">{value}</StatNumber>
    <StatHelpText fontSize="xs">{helpText}</StatHelpText>
  </Stat>
);

export default Dashboard;
