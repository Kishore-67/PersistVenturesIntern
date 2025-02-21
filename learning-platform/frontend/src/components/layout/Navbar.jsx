import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Text,
  Avatar
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

const NavLink = ({ children, to }) => (
  <RouterLink to={to}>
    <Text
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
    >
      {children}
    </Text>
  </RouterLink>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue('white', 'gray.900')} px={4} shadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        
        <HStack spacing={8} alignItems="center">
          <RouterLink to="/">
            <HStack>
              <Image
                boxSize="32px"
                src="/logo.png"
                fallbackSrc="https://via.placeholder.com/32"
                alt="Logo"
              />
              <Text
                fontSize="lg"
                fontWeight="bold"
                display={{ base: 'none', md: 'block' }}
              >
                CodeMaster
              </Text>
            </HStack>
          </RouterLink>
          
          <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/challenges">Challenges</NavLink>
            <NavLink to="/about">About</NavLink>
          </HStack>
        </HStack>

        <HStack spacing={4}>
          <Button
            as={RouterLink}
            to="/login"
            variant="ghost"
            size="sm"
          >
            Sign In
          </Button>
          <Button
            as={RouterLink}
            to="/register"
            colorScheme="blue"
            size="sm"
          >
            Sign Up
          </Button>
        </HStack>
      </Flex>

      {/* Mobile menu */}
      {isOpen && (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as="nav" spacing={4}>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/challenges">Challenges</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/login">Sign In</NavLink>
            <NavLink to="/register">Sign Up</NavLink>
          </Stack>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
