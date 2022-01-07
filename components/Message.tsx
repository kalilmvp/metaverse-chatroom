import { useMoralis } from 'react-moralis';
import TimeAgo from 'timeago-react';
import Avatar from './Avatar';

interface MessageType {
    message: any;
}

const ETH_ADDRESS = 'ethAddress';

function Message({message}: MessageType) {
    const {user} = useMoralis();
    
    const isUserMessage = message.get(ETH_ADDRESS) === user?.get(ETH_ADDRESS);

    return (
        <div className={`flex items-end space-x-2 relative ${
            isUserMessage && 'justify-end'
        }`}>
            <div className={`relative h-8 w-8 ${
                isUserMessage && "order-last ml-2"
            }`}>
                <Avatar username={message.get('user')} />
            </div>

            <div className={`flex space-x-4 p-3 rounded-lg ${
                isUserMessage ? "rounded-br-none bg-pink-400" : "rounded-bl-none bg-blue-400"
            }`}>
                <p>{message.get('message')}</p>
            </div>

            <TimeAgo 
                className={`text-[10px] italic text-gray-400 ${
                    isUserMessage && 'order-first pr-1'
                }`}
                datetime={message.createdAt}
            />        

            <p className={`absolute -bottom-5 text-xs ${
                isUserMessage ? "text-pink-300" : "text-blue-400"
            }`}>{message.get('user')}</p>
        </div>
    )
}

export default Message;
