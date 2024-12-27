import ChatBubbleContainer from 'components/bubble/ChatBubbleContainer';
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
  const [botTyping, setBotTyping] = useState(false);

  const handleSend = async () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        timestamp: new Date(),
      };
      setBotTyping(true);
      setMessages([...messages, newMessage]);
      await handleBotResponse(inputText)
      setInputText('');
    }
  };

  const handleBotResponse = async (message: string) => {
    // TODO: Add bot response logic here
    const newMessage: Message = {
      id: Date.now(),
      text: `Bot: ${message}`,
      timestamp: new Date(),
    }
    setMessages(prev => ([...prev, newMessage]));
    setBotTyping(false);
  }

  return (
    <Box className='flex flex-1 w-full h-full bg-white py-4 px-4'>
      <VStack  space="md" className='flex flex-1'>
        <ScrollView >
          <Box className='flex gap-2 w-full h-full flex-col'>
          {messages.map((message, index) => (
            <ChatBubbleContainer
              key={index}
              from={index % 2 === 0 ? 'user' : 'bot'}
              message={message.text}
              time={message.timestamp.toLocaleTimeString()}
            />
          ))}
          {
            botTyping 
            &&
          <Text>Bot is typing...</Text>
          }
          </Box>
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
          <Button disabled={botTyping} onPress={handleSend} size="md" className='align-center h-full'>
            <ButtonText>Send</ButtonText>
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Chat;