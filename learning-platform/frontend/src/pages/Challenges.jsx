import { Box, Heading, SimpleGrid, HStack, Input, Select, Button, VStack, Text, Icon, useColorModeValue } from '@chakra-ui/react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import ChallengeCard from '../components/ChallengeCard';

const Challenges = () => {
  // Dummy data
  const challenges = [
    {
      id: 1,
      title: 'Python Basics: Variables and Data Types',
      description: 'Learn the fundamentals of Python programming by mastering variables, data types, and basic operations.',
      difficulty: 'beginner',
      points: 100,
      language: 'Python',
      estimatedTime: 30,
      completionRate: 85
    },
    {
      id: 2,
      title: 'Data Structures: Implementing a Linked List',
      description: 'Deep dive into data structures by implementing a linked list from scratch with all basic operations.',
      difficulty: 'intermediate',
      points: 200,
      language: 'Python',
      estimatedTime: 45,
      completionRate: 65
    },
    {
      id: 3,
      title: 'Advanced Algorithms: Binary Search Trees',
      description: 'Master advanced algorithms by implementing a self-balancing binary search tree.',
      difficulty: 'advanced',
      points: 300,
      language: 'Python',
      estimatedTime: 60,
      completionRate: 40
    },
    {
      id: 4,
      title: 'Web Development: Building a REST API',
      description: 'Create a RESTful API using FastAPI framework with proper documentation and testing.',
      difficulty: 'intermediate',
      points: 250,
      language: 'Python',
      estimatedTime: 50,
      completionRate: 55
    },
    {
      id: 5,
      title: 'Machine Learning: Linear Regression',
      description: 'Implement linear regression from scratch and understand the mathematics behind it.',
      difficulty: 'advanced',
      points: 350,
      language: 'Python',
      estimatedTime: 75,
      completionRate: 35
    },
    {
      id: 6,
      title: 'Database Design: SQL Basics',
      description: 'Learn fundamental SQL operations and design a normalized database schema.',
      difficulty: 'beginner',
      points: 150,
      language: 'SQL',
      estimatedTime: 40,
      completionRate: 75
    }
  ];

  return (
    <Box maxW="container.xl" mx="auto" pt={8} px={4}>
      <VStack spacing={8} align="stretch">
        <Box>
          <Heading size="lg" mb={4}>Coding Challenges</Heading>
          <Text color="gray.600">
            Master your programming skills with our curated collection of challenges
          </Text>
        </Box>

        <HStack 
          spacing={4} 
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          borderRadius="lg"
          boxShadow="sm"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
        >
          <HStack flex={1} spacing={4}>
            <Icon as={FaSearch} color="gray.400" />
            <Input 
              placeholder="Search challenges..." 
              variant="unstyled"
            />
          </HStack>
          
          <HStack spacing={4}>
            <Select 
              placeholder="Difficulty" 
              w={{ base: 'full', md: '150px' }}
              bg={useColorModeValue('gray.50', 'gray.700')}
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </Select>
            
            <Select 
              placeholder="Language" 
              w={{ base: 'full', md: '150px' }}
              bg={useColorModeValue('gray.50', 'gray.700')}
            >
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
              <option value="sql">SQL</option>
            </Select>

            <Button 
              leftIcon={<FaFilter />}
              colorScheme="blue"
              variant="ghost"
            >
              Filters
            </Button>
          </HStack>
        </HStack>

        <SimpleGrid 
          columns={{ base: 1, md: 2, lg: 3 }} 
          spacing={6}
          pb={8}
        >
          {challenges.map((challenge) => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge} 
              isAuthenticated={false} // This would normally come from your auth state
            />
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Challenges;
