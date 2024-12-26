import React from 'react'

import { Box } from 'components/ui/box'
import { Text } from 'react-native';

interface  ChatBubbleContainerPropTypes {
    from: "user" | "bot",
    message: string,
    time: string,
}

const ChatBubbleContainer = (props: ChatBubbleContainerPropTypes) => {
    const {from, message} = props;
  return (
    <Box className={`flex flex-1 h-ful w-full ${from === 'user' ? 'items-end' : 'items-start'}`}>
        <Box className={`w-2/3 p-2 pr-4 border border-solid border-gray-500 rounded align-center justify-center ${from === 'user' ? 'bg-primary' : 'bg-gray-100'}`}>
        <Text className='text-typography-500 text-sm'>
            {message}
        </Text>
        </Box>
    </Box>
  )
}

export default ChatBubbleContainer