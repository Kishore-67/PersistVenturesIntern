import { Box, Badge, Text, Heading, VStack, HStack, Progress, Icon, Button, useToast } from '@chakra-ui/react';
import { FaCode, FaClock, FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChallengeCard = ({ challenge, isAuthenticated = false }) => {
  const navigate = useNavigate();
  const toast = useToast();

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'green',
      intermediate: 'yellow',
      advanced: 'red'
    };
    return colors[difficulty] || 'gray';
  };

  const handleStartChallenge = () => {
    if (!isAuthenticated) {
      toast({
        title: "Login Required",
        description: "Please login to attempt this challenge",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      navigate('/login');
      return;
    }
    // Handle starting the challenge
    console.log('Starting challenge:', challenge.id);
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={6}
      bg="white"
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: 'lg',
        transition: 'all 0.2s'
      }}
    >
      <VStack align="stretch" spacing={4}>
        <HStack justify="space-between">
          <Badge 
            colorScheme={getDifficultyColor(challenge.difficulty)}
            px={2}
            py={1}
            borderRadius="full"
          >
            {challenge.difficulty}
          </Badge>
          <HStack>
            <Icon as={FaTrophy} color="yellow.400" />
            <Text fontWeight="bold">{challenge.points} pts</Text>
          </HStack>
        </HStack>

        <Heading size="md" noOfLines={2}>
          {challenge.title}
        </Heading>

        <Text color="gray.600" noOfLines={3}>
          {challenge.description}
        </Text>

        <HStack spacing={4} color="gray.500">
          <HStack>
            <Icon as={FaCode} />
            <Text fontSize="sm">{challenge.language}</Text>
          </HStack>
          <HStack>
            <Icon as={FaClock} />
            <Text fontSize="sm">{challenge.estimatedTime} min</Text>
          </HStack>
        </HStack>

        <Box>
          <Text fontSize="sm" mb={1}>Completion Rate</Text>
          <Progress 
            value={challenge.completionRate} 
            size="sm" 
            colorScheme={getDifficultyColor(challenge.difficulty)}
            borderRadius="full"
          />
        </Box>

        <Button
          colorScheme="blue"
          size="md"
          width="full"
          onClick={handleStartChallenge}
          _hover={{
            transform: 'translateY(-1px)',
            boxShadow: 'sm',
          }}
        >
          {isAuthenticated ? 'Start Challenge' : 'Login to Attempt'}
        </Button>
      </VStack>
    </Box>
  );
};

export default ChallengeCard;
