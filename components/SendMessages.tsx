import { FormEvent, Ref, RefObject, useState } from 'react';
import { useMoralis, useMoralisQuery } from 'react-moralis';

interface SendMessagesType {
    endOfMessagesRef: RefObject<HTMLDivElement>;
}

function SendMessages({endOfMessagesRef} : SendMessagesType) {
    const {user, Moralis} = useMoralis();
    const [message, setMessage] = useState('');
    
    const sendMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend('Messages');
        const messages = new Messages();

        messages.save({
            message,
            user: user?.getUsername(),
            ethAddress: user?.get('ethAddress')
        }).then((message: any) => {
            // nothing here
        }, (error: Error) => {
            console.log(error.message);
            
        });

        endOfMessagesRef?.current?.scrollIntoView({behavior: 'smooth'})

        setMessage('');
    }   
    return (
        <form onSubmit={sendMessage} className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl shadow-xl rounded-full
                        border-4 border-blue-400">
            <input 
                className="flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5" 
                placeholder={`Enter a Message ${user?.getUsername()}`}
                value={message}
                onChange={e => setMessage(e.target.value)}
                type="text" />
            <button type="submit" className="font-bold text-pink-500">Send</button>
        </form>
    )
}

export default SendMessages;
