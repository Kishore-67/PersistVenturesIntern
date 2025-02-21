import { Box, Badge, Text, Button } from '@chakra-ui/react';
import { FaTrophy } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ChallengeCard = ({ challenge }) => {
  const navigate = useNavigate();

  const getDifficultyColor = (difficulty) => {
    const colors = {
      beginner: 'green',
      intermediate: 'yellow',
      advanced: 'red'
    };
    return colors[difficulty] || 'gray';
  };

  const handleStartChallenge = () => {
    // Directly navigate to the challenge
    navigate(`/challenges/${challenge.id}`);
  };

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
    >
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme={getDifficultyColor(challenge.difficulty)}>
            {challenge.difficulty}
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {challenge.points} points
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {challenge.title}
        </Box>

        <Text mt={2} color="gray.600" fontSize="sm" noOfLines={2}>
          {challenge.description}
        </Text>

        <Button
          mt={4}
          colorScheme="blue"
          width="full"
          onClick={handleStartChallenge}
        >
          Start Challenge
        </Button>
      </Box>
    </Box>
  );
};

export default ChallengeCard;
