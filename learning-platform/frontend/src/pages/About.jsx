import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Avatar,
  Divider,
  useColorModeValue,
  Button,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaLightbulb, 
  FaCode,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaArrowRight
} from 'react-icons/fa';

const About = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  const features = [
    {
      icon: FaCode,
      title: 'Real-World Challenges',
      description: 'Practice with challenges inspired by actual industry scenarios and problems.'
    },
    {
      icon: FaGraduationCap,
      title: 'Structured Learning',
      description: 'Follow a carefully designed curriculum that builds your skills progressively.'
    },
    {
      icon: FaUsers,
      title: 'Community Driven',
      description: 'Learn alongside a community of developers and share knowledge.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation Focus',
      description: 'Stay updated with modern programming practices and technologies.'
    }
  ];

  const teamMembers = [
    {
      name: 'Kishore',
      role: 'Founder & Lead Developer',
      image: 'https://via.placeholder.com/150',
      bio: 'Full-stack developer passionate about creating innovative learning platforms. Expertise in modern web technologies and educational tech.'
    }
  ];

  return (
    <Box>
      {/* Mission Section */}
      <Box bg={useColorModeValue('blue.50', 'blue.900')} py={20}>
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">Our Mission</Heading>
            <Text fontSize="xl" maxW="3xl" color={useColorModeValue('gray.600', 'gray.300')}>
              To empower developers worldwide by providing a platform that combines practical coding challenges,
              structured learning paths, and a supportive community to help you master programming skills and
              advance your career.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature, index) => (
            <VStack
              key={index}
              align="start"
              p={6}
              bg={bgColor}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="lg"
              transition="all 0.3s"
              _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            >
              <Icon as={feature.icon} w={10} h={10} color="blue.500" />
              <Heading size="md">{feature.title}</Heading>
              <Text color={useColorModeValue('gray.600', 'gray.300')}>
                {feature.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>
      </Container>

      {/* Impact Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={16}>
        <Container maxW="container.xl">
          <VStack spacing={10}>
            <Heading size="xl">Our Impact</Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
              {[
                { number: '50,000+', label: 'Active Learners' },
                { number: '1,000+', label: 'Coding Challenges' },
                { number: '95%', label: 'Success Rate' }
              ].map((stat, index) => (
                <VStack key={index} p={6} bg={bgColor} borderRadius="lg" shadow="md">
                  <Text fontSize="4xl" fontWeight="bold" color="blue.500">
                    {stat.number}
                  </Text>
                  <Text fontSize="lg">{stat.label}</Text>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12}>
          <Heading size="xl">Meet Our Team</Heading>
          <Box maxW="md" w="full">
            {teamMembers.map((member, index) => (
              <VStack
                key={index}
                p={8}
                bg={bgColor}
                borderWidth="1px"
                borderColor={borderColor}
                borderRadius="lg"
                spacing={4}
                align="center"
                shadow="md"
                _hover={{
                  transform: 'translateY(-4px)',
                  shadow: 'lg',
                  transition: 'all 0.3s ease'
                }}
              >
                <Avatar size="2xl" src={member.image} name={member.name} />
                <VStack spacing={2}>
                  <Heading size="lg">{member.name}</Heading>
                  <Text color="blue.500" fontSize="lg" fontWeight="medium">{member.role}</Text>
                </VStack>
                <Text textAlign="center" fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                  {member.bio}
                </Text>
                <HStack spacing={6}>
                  <Icon as={FaGithub} w={7} h={7} cursor="pointer" _hover={{ color: 'blue.500' }} />
                  <Icon as={FaLinkedin} w={7} h={7} cursor="pointer" _hover={{ color: 'blue.500' }} />
                </HStack>
              </VStack>
            ))}
          </Box>
        </VStack>
      </Container>

      {/* Values Section */}
      <Box bg={useColorModeValue('gray.50', 'gray.900')} py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="start" spacing={6}>
              <Heading size="xl">Our Values</Heading>
              <List spacing={4}>
                {[
                  'Excellence in Education',
                  'Community-First Approach',
                  'Continuous Innovation',
                  'Inclusive Learning Environment',
                  'Practical Skill Development'
                ].map((value, index) => (
                  <ListItem key={index}>
                    <HStack>
                      <ListIcon as={FaCheckCircle} color="green.500" />
                      <Text fontSize="lg">{value}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </VStack>
            <VStack align="start" spacing={6}>
              <Heading size="xl">Join Our Community</Heading>
              <Text fontSize="lg" color={useColorModeValue('gray.600', 'gray.300')}>
                Be part of a growing community of developers who are passionate about learning
                and helping others succeed. Share knowledge, collaborate on projects, and grow
                together.
              </Text>
              <Button
                as={RouterLink}
                to="/register"
                size="lg"
                colorScheme="blue"
                rightIcon={<FaArrowRight />}
              >
                Get Started Today
              </Button>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
