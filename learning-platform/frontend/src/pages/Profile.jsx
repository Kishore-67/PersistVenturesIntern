import { Box, Heading, VStack, Text, Avatar, SimpleGrid, Badge } from '@chakra-ui/react'

const Profile = () => {
  // Dummy data
  const user = {
    username: 'JohnDoe',
    bio: 'Passionate programmer learning new things every day!',
    points: 1250,
    achievements: [
      { id: 1, name: 'First Blood', description: 'Complete your first challenge' },
      { id: 2, name: 'Rising Star', description: 'Complete 10 challenges' },
      { id: 3, name: 'Code Warrior', description: 'Earn 1000 points' }
    ]
  }

  return (
    <Box maxW="container.xl" mx="auto" pt={8}>
      <VStack spacing={8} align="start">
        <Box textAlign="center" w="full">
          <Avatar size="2xl" name={user.username} mb={4} />
          <Heading size="lg">{user.username}</Heading>
          <Text mt={2} color="gray.600">{user.bio}</Text>
          <Text mt={2} fontWeight="bold" color="blue.500">
            {user.points} Points
          </Text>
        </Box>

        <Box w="full">
          <Heading size="md" mb={4}>Achievements</Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={4}>
            {user.achievements.map((achievement) => (
              <Box key={achievement.id} p={4} borderWidth="1px" borderRadius="md">
                <Badge colorScheme="green" mb={2}>Unlocked</Badge>
                <Heading size="sm">{achievement.name}</Heading>
                <Text fontSize="sm" color="gray.600">
                  {achievement.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  )
}

export default Profile
