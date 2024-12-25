import { Box } from 'components/ui/box';
import { Button, ButtonText } from 'components/ui/button';
import { HStack } from 'components/ui/hstack';
import { Input, InputField } from 'components/ui/input';
import { VStack } from 'components/ui/vstack';
import React, { useState } from 'react';
import { ScrollView, Text } from 'react-native';

interface Message {
  id: number;
  text: string;
  timestamp: Date;
}

export const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <Box className='flex flex-1 w-full h-full bg-white py-4 px-4'>
      <VStack  space="md" className='flex flex-1'>
        <ScrollView >
          {messages.map((message) => (
            <Box
              key={message.id}
            >
              <Text >{message.text}</Text>
              <Text >
                {message.timestamp.toLocaleTimeString()}
              </Text>
            </Box>
          ))}
        </ScrollView>
        
        <HStack space="sm" className='flex w-full justify-items-center align-center'>
          <Input
            size="md"
            variant="outline"
            className='flex flex-1 h-full'
          >
            <InputField
              placeholder="Enter your doubt here..."
              value={inputText}
              onChangeText={setInputText}
            />
          </Input>
          <Button onPress={handleSend} size="md" className='align-center h-full'>
            <ButtonText>Send</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Chat;