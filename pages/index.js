import {
    Button,
    Flex,
    Text,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useMoralis } from "react-moralis";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nft from "../components/Nft";
import Profile from "../components/Profile";
import Send from "../components/Send";
import Transactions from "../components/Transaction";

export default function Home() {
    const {
        isAuthenticated,
        user,
        isAuthenticating,
        authenticate,
        logout,
        isLoggingOut,
    } = useMoralis();

    if (!isAuthenticated) {
        return (
            <>
                <Head>
                    <title>Login | Dashboard</title>
                </Head>
                <Flex
                    width="100vw"
                    height="100vh"
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Text fontSize="5xl" fontWeight="bold">
                        Dashboard3
                    </Text>
                    <Button
                        size="lg"
                        mt="6"
                        onClick={() =>
                            authenticate({
                                signingMessage: "Sign in to Dashboard3",
                            })
                        }
                    >
                        Login with MetaMask
                    </Button>
                </Flex>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>Dashboard3</title>
            </Head>
            <Flex direction="column" width="100vw" height="100vh">
                <Header
                    isAuthenticated={isAuthenticated}
                    isAuthenticating={isAuthenticating}
                    user={user}
                    authenticate={authenticate}
                    logout={logout}
                    isLoggingOut={isLoggingOut}
                />
                <Box
                    flex="1"
                    // bg="purple.100"
                    px="52"
                    py="20"
                >
                    <Tabs
                        size="lg"
                        colorScheme="purple"
                        align="center"
                        variant="enclosed"
                    >
                        <TabList>
                            <Tab fontWeight="bold">Profile</Tab>
                            <Tab fontWeight="bold">Balance</Tab>
                            <Tab fontWeight="bold">Transactions</Tab>
                            <Tab fontWeight="bold">NFTs</Tab>
                            <Tab fontWeight="bold">Send ETH</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Profile user={user} />
                            </TabPanel>
                            <TabPanel>
                                <Balance user={user} />
                            </TabPanel>
                            <TabPanel>
                                <Transactions user={user} />
                            </TabPanel>
                            <TabPanel>
                                <Nft user={user} />
                            </TabPanel>
                            <TabPanel>
                                <Send />
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Flex>
        </>
    );
}
