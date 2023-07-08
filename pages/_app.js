import '@/styles/globals.css';
import { darkTheme } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import {
  RainbowKitProvider,
  connectorsForWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import merge from 'lodash.merge';

// import { DomainContextProvider } from "@/context/context";

const patexSepolia = {
  id: 471100,
  name: 'Patex Sepolia',
  network: 'patex',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Patex Sepolia Ether',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://test-rpc.patex.io/'],
    },
  },
  blockExplorers: {
    default: { name: 'PatexScan', url: 'https://testnet.patexscan.io/' },
  },
  testnet: true,
};

const { provider, chains } = configureChains(
  [patexSepolia],
  [
    jsonRpcProvider({
      rpc: (chain) => ({ http: chain.rpcUrls.default.http[0] }),
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'LeXar',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors: connectors(chains),
  provider,
});

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: '#A020F0',
  },
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme} coolMode>
        {/* <DomainContextProvider> */}
        <Component {...pageProps} />
        {/* </DomainContextProvider> */}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
