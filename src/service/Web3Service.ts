import { ethers} from "ethers";
import ABI from '../service/abi.json';
const Address = "0xcdBeB1A1321b7B97063123dc3a7c387bDa07E680";

export type Donate = {
    price: bigint | string;
}

export function getProfile() {
    const profile: any = localStorage.getItem('profile') || 0;
    return parseInt(profile);
}


export function getProvider(): any {
    if (!window.ethereum) throw new Error('wallet not found')
    return new ethers.BrowserProvider(window.ethereum);
}


export async function connect(): Promise<void> {
    try {
        const provider: any = getProvider();
        const accounts = await provider.send('eth_requestAccounts', []);
        if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');
        localStorage.setItem('wallet', JSON.stringify(accounts[0]));
        await provider.send("wallet_switchEthereumChain", [{ chainId: "0x61" }])
        return accounts[0]
    }
    catch (err) {
        const provider: any = getProvider();
        const accounts = await provider.send("eth_requestAccounts", []);
        if (!accounts || !accounts.length) throw new Error('Wallet not found/allowed');

        const chainData = {
            chainId: "0x38",
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency: {
                name: "BNB",
                symbol: "BNB",
                decimals: 18
            },
            rpcUrls: ["https://bsc-dataseed1.binance.org"],
            blockExplorerUrls: ["https://bscscan.com/"]
        };
        await provider.send("wallet_addEthereumChain", [chainData]);
    }
}



export async function desconnect(): Promise<void> {
    localStorage.removeItem('wallet');
    localStorage.removeItem('type');
}


function getContract(provider?: ethers.BrowserProvider): ethers.Contract {
    if (!provider) provider = getProvider();
    return new ethers.Contract(Address, ABI as ethers.InterfaceAbi, provider);
}

async function getContractSigner(provider?: any): Promise<ethers.Contract> {
    if (!provider) provider = getProvider();
    const signer = await provider.getSigner(localStorage.getItem("account") || undefined);
    const contract = new ethers.Contract(Address, ABI as ethers.InterfaceAbi, provider);
    return contract.connect(signer) as ethers.Contract;
}


export async function donate(amount: any): Promise<void> {
    try {
        const contract = await getContractSigner();
        const price = ethers.parseEther(amount);
        const transaction = await contract.donate({
            value: price,
        });
        await transaction.wait();
        console.log("Donation successful");
    } catch (error) {
        console.error("Failed to donate:", error);
        throw error;
    }
}

export async function getLeaderBoard(): Promise<{ addresses: any, amounts: any }> {
    try {
        const contract = await getContract();
        const [addresses, amounts] = await contract.getCurrentLeader();
        return { addresses, amounts };
    } catch (error) {
        console.error("Failed to fetch leaderboard:", error);
        throw error;
    }
}






