import Image from "next/image";
import { useMoralis } from 'react-moralis';

function Login() {
    const {authenticate} = useMoralis();
    return (
        <div className="bg-black relative">
            <div className="flex flex-col absolute z-50 items-center justify-center w-full h-4/6 space-y-4">
                <Image alt="Papafam" className="object-cover rounded-full" src="https://links.papareact.com/3pi" width={200} height={200} objectFit="cover"/>
                <button onClick={() => authenticate()} className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse">Login to the METAVERSE</button>
            </div>

            <div className="w-full h-screen">
                <Image alt="Background" src="https://links.papareact.com/55n" layout="fill" objectFit="cover"/>
            </div>
        </div>
    )
}

export default Login;
