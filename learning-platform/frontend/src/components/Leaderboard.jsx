import { Box, Table, Thead, Tbody, Tr, Th, Td, Avatar, Text, HStack, Icon, Badge } from '@chakra-ui/react';
import { FaCrown } from 'react-icons/fa';

const Leaderboard = ({ users }) => {
  const getRankColor = (rank) => {
    switch(rank) {
      case 1: return 'yellow.400';
      case 2: return 'gray.400';
      case 3: return 'orange.400';
      default: return 'gray.600';
    }
  };

  const getTopBadge = (rank) => {
    if (rank > 3) return null;
    return (
      <Icon 
        as={FaCrown} 
        color={getRankColor(rank)} 
        w={6} 
        h={6} 
        mr={2}
      />
    );
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      shadow="sm"
    >
      <Table variant="simple">
        <Thead bg="gray.50">
          <Tr>
            <Th>Rank</Th>
            <Th>User</Th>
            <Th isNumeric>Points</Th>
            <Th>Level</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={user.id} 
              _hover={{ bg: 'gray.50' }}
              transition="all 0.2s"
            >
              <Td>
                <HStack>
                  {getTopBadge(index + 1)}
                  <Text fontWeight="bold" color={getRankColor(index + 1)}>
                    #{index + 1}
                  </Text>
                </HStack>
              </Td>
              <Td>
                <HStack>
                  <Avatar 
                    size="sm" 
                    name={user.name} 
                    src={user.avatar}
                    bg={user.avatarBg || 'blue.500'}
                  />
                  <Text fontWeight="medium">{user.name}</Text>
                </HStack>
              </Td>
              <Td isNumeric fontWeight="bold" color="blue.500">
                {user.points.toLocaleString()}
              </Td>
              <Td>
                <Badge 
                  colorScheme={user.level >= 20 ? 'purple' : 'green'}
                  variant="subtle"
                  px={2}
                  py={1}
                  borderRadius="full"
                >
                  Level {user.level}
                </Badge>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Leaderboard;
