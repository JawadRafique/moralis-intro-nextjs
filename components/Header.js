import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({
    isAuthenticated,
    isAuthenticating,
    user,
    authenticate,
    logout,
    isLoggingOut,
}) {
    return (
        <header>
            <Flex justifyContent="space-between" px={10} py={6}>
                <Center>
                    <Text fontSize="xl" fontWeight="bold">
                        Dashboard3
                    </Text>
                </Center>
                <Center>
                    {isAuthenticated ? (
                        <>
                            <Text>{user.getUsername()}</Text>
                            <Button
                                ml={4}
                                onClick={logout}
                                disabled={isLoggingOut}
                            >
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button
                            onClick={() =>
                                authenticate({
                                    signingMessage:
                                        "Sign to auth on Dashboard3",
                                })
                            }
                            disabled={isAuthenticating}
                        >
                            Login
                        </Button>
                    )}
                </Center>
            </Flex>
        </header>
    );
}
