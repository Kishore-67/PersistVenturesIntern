import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Always navigate to dashboard
    navigate('/dashboard');
    toast({
      title: "Account created successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderRadius="lg" boxShadow="lg" bg="white">
      <VStack spacing={4}>
        <Heading size="lg">Create Account</Heading>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Enter your name" />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Enter your email" />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" placeholder="Enter your password" />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Sign Up
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export default Register;
