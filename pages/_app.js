import '@/styles/globals.css';
import { darkTheme } from '@rainbow-me/rainbowkit';
import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { gnosisChiado } from '@wagmi/core/chains';
import { publicProvider } from 'wagmi/providers/public';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import merge from 'lodash.merge';
// import { DomainContextProvider } from "@/context/context";

const { provider, chains } = configureChains(
  [gnosisChiado],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://rpc.eu-central-2.gateway.fm/v4/gnosis/archival/chiado`,
      }),
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
