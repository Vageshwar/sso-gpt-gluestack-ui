import { StatusBar } from 'expo-status-bar';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Chat from 'components/chat/chat';
import { Box } from 'components/ui/box';
import { Center } from 'components/ui/center';
import { VStack } from 'components/ui/vstack';
import { Button, ButtonText } from 'components/ui/button';
import { Icon, PlayIcon } from 'components/ui/icon';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation } : {navigation: any}) {
  return (
    <Box className='flex flex-1 w-full h-full' >
      <StatusBar style="dark" />
      <Center className='flex flex-1'>
        <VStack space="md" className='align-center'>
          <Button
            className='background-color-primary' 
            size="xl" 
            variant="solid"
            onPress={() => navigation.replace('Chat')}
          >
            <Icon as={PlayIcon} size="xl" className='color-white' />
            <ButtonText className='text-xl'>
              Start Chat
            </ButtonText>
          </Button>
        </VStack>
      </Center>
    </Box>
  );
}

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f5f5f5',
            },
            headerTintColor: '#333',
            headerTitleStyle: {
              fontWeight: '400',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Chat" 
            component={Chat}
            options={{ title: 'Chat' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}