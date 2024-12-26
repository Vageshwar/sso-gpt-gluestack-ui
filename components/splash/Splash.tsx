import { Box } from 'components/ui/box'
import { Icon, MessageCircleIcon } from 'components/ui/icon'
import React, { useEffect } from 'react'
import { Text } from 'react-native'

const Splash = ({ navigation } : {navigation: any}) => {
    
    useEffect(() => {
        if(navigation){
            setTimeout(() => {
                navigation.replace('Chat')
            }, 3000)
        }
    }, [navigation?.navigate])

  return (
    <Box className='flex flex-1 w-full h-full'>
        <Box className='flex flex-1 justify-center items-center'>
            <Box className='text-center flex items-center'>
            <Icon as={MessageCircleIcon} className="text-typography-500 m-2 w-16 h-16" />
            <Text className='text-2xl font-bold'>SOS GPT</Text>
            <Text className='text-xl font-normal'>An Emergency Offline Chatbot</Text>
            </Box>
        </Box>
    </Box>
  )
}

export default Splash