import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Register = () => {
  return (
    <Box maxW="container.sm" mx="auto" pt={8}>
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center">Create Account</Heading>
        
        <form>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type="email" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" />
            </FormControl>
            
            <Button type="submit" colorScheme="blue" width="full">
              Register
            </Button>
          </VStack>
        </form>
        
        <Text textAlign="center">
          Already have an account?{' '}
          <Link as={RouterLink} to="/login" color="blue.500">
            Login here
          </Link>
        </Text>
      </VStack>
    </Box>
  )
}

export default Register
