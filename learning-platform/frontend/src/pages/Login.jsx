import { Box, Button, FormControl, FormLabel, Input, VStack, Heading, Text, Link } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const Login = () => {
  return (
    <Box maxW="container.sm" mx="auto" pt={8}>
      <VStack spacing={8} align="stretch">
        <Heading textAlign="center">Welcome Back</Heading>
        
        <form>
          <VStack spacing={4}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input type="text" />
            </FormControl>
            
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            
            <Button type="submit" colorScheme="blue" width="full">
              Login
            </Button>
          </VStack>
        </form>
        
        <Text textAlign="center">
          Don't have an account?{' '}
          <Link as={RouterLink} to="/register" color="blue.500">
            Register here
          </Link>
        </Text>
      </VStack>
    </Box>
  )
}

export default Login
