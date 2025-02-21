import { 
  Box, 
  Button, 
  Container, 
  Heading, 
  Text, 
  Stack, 
  SimpleGrid, 
  Icon, 
  Flex, 
  VStack,
  HStack,
  useColorModeValue,
  Image,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaGraduationCap, FaCode, FaTrophy, FaChartLine, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Feature = ({ icon, title, text }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={8}
      rounded="lg"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.100', 'gray.700')}
      align="start"
      spacing={4}
      height="full"
      _hover={{
        transform: 'translateY(-4px)',
        shadow: 'lg',
        transition: 'all 0.3s ease'
      }}
    >
      <Flex
        w={16}
        h={16}
        align="center"
        justify="center"
        rounded="full"
        bg={useColorModeValue('blue.50', 'blue.900')}
        color={useColorModeValue('blue.600', 'blue.200')}
      >
        <Icon as={icon} w={8} h={8} />
      </Flex>
      <Heading size="md">{title}</Heading>
      <Text color={useColorModeValue('gray.600', 'gray.300')}>{text}</Text>
    </Stack>
  );
};

const Landing = () => {
  const features = [
    {
      icon: FaCode,
      title: 'Interactive Coding',
      text: 'Practice with real-world coding challenges and get instant feedback on your solutions.'
    },
    {
      icon: FaGraduationCap,
      title: 'Structured Learning',
      text: 'Follow a carefully designed curriculum that takes you from basics to advanced concepts.'
    },
    {
      icon: FaTrophy,
      title: 'Earn Rewards',
      text: 'Gain points, unlock achievements, and compete with others on the global leaderboard.'
    },
    {
      icon: FaChartLine,
      title: 'Track Progress',
      text: 'Monitor your learning journey with detailed statistics and performance analytics.'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        bg={useColorModeValue('blue.50', 'gray.900')}
        pt={{ base: 20, md: 28 }}
        pb={{ base: 16, md: 24 }}
      >
        <Container maxW="container.xl">
          <Stack 
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: 8, md: 16 }}
            align="center"
          >
            <VStack 
              spacing={6} 
              align="start"
              maxW="xl"
            >
              <Heading
                as="h1"
                size="2xl"
                fontWeight="bold"
                lineHeight="shorter"
              >
                Master Programming Through
                <Text 
                  as="span" 
                  color="blue.500"
                  display="block"
                >
                  Interactive Challenges
                </Text>
              </Heading>
              <Text 
                fontSize="xl"
                color={useColorModeValue('gray.600', 'gray.300')}
              >
                Join thousands of developers who are improving their coding skills 
                through our interactive platform. Start coding, earn rewards, and 
                build your portfolio today.
              </Text>
              <Stack 
                direction={{ base: 'column', sm: 'row' }}
                spacing={4}
                w={{ base: 'full', sm: 'auto' }}
              >
                <Button
                  as={RouterLink}
                  to="/register"
                  size="lg"
                  colorScheme="blue"
                  rightIcon={<FaArrowRight />}
                  px={8}
                >
                  Get Started Free
                </Button>
                <Button
                  as={RouterLink}
                  to="/challenges"
                  size="lg"
                  variant="outline"
                  px={8}
                >
                  Browse Challenges
                </Button>
              </Stack>
            </VStack>
            
            <Box 
              flex={1}
              maxW={{ base: 'full', md: '500px' }}
              display={{ base: 'none', md: 'block' }}
            >
              <Image 
                src="/hero-image.png" 
                alt="Coding illustration"
                fallbackSrc="https://via.placeholder.com/500x400?text=Coding+Illustration"
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={12}>
          <VStack spacing={4} textAlign="center">
            <Heading size="xl">Why Choose Our Platform?</Heading>
            <Text 
              fontSize="lg" 
              color={useColorModeValue('gray.600', 'gray.300')}
              maxW="2xl"
            >
              We provide a comprehensive learning experience that helps you master 
              programming concepts through practice and real-world applications.
            </Text>
          </VStack>

          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }} 
            spacing={8}
            w="full"
          >
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Stats Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.800')} py={20}>
        <Container maxW="container.xl">
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 4 }} 
            spacing={8}
          >
            {[
              { label: 'Active Users', value: '10,000+' },
              { label: 'Challenges', value: '500+' },
              { label: 'Solutions Submitted', value: '1M+' },
              { label: 'Learning Hours', value: '500K+' }
            ].map((stat, index) => (
              <VStack key={index} spacing={2}>
                <Text 
                  fontSize="4xl" 
                  fontWeight="bold"
                  color="blue.500"
                >
                  {stat.value}
                </Text>
                <Text 
                  fontSize="lg"
                  color={useColorModeValue('gray.600', 'gray.300')}
                >
                  {stat.label}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container maxW="container.xl" py={20}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={8}
          align="center"
          justify="space-between"
          bg={useColorModeValue('blue.50', 'blue.900')}
          p={8}
          rounded="xl"
        >
          <VStack align="start" spacing={4} maxW="2xl">
            <Heading size="lg">Ready to Start Your Journey?</Heading>
            <List spacing={3}>
              {[
                'Access to all basic challenges',
                'Join the developer community',
                'Track your progress',
                'Earn certificates'
              ].map((item, index) => (
                <ListItem key={index}>
                  <HStack>
                    <ListIcon as={FaCheckCircle} color="green.500" />
                    <Text>{item}</Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </VStack>
          <Button
            as={RouterLink}
            to="/register"
            size="lg"
            colorScheme="blue"
            px={8}
            rightIcon={<FaArrowRight />}
          >
            Start Learning Now
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Landing;
