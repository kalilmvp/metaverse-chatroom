import Image from 'next/image';
import { useMoralis } from 'react-moralis';

interface AvatarType {
    username: string | undefined;
    logoutOnPress ?: boolean;
}

function Avatar({username, logoutOnPress}: AvatarType) {
    const {user, logout} = useMoralis();
    return (
        <Image 
            className="cursor-pointer rounded-full bg-black hover:opacity-75"
            alt="avatar"
            src={`https://avatars.dicebear.com/api/pixel-art/${username || user?.getUsername()}.svg`} 
            layout="fill"
            onClick={() => logoutOnPress && logout()}
        />
    )
}

export default Avatar;
