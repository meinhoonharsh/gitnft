import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  AvatarComponent
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { infuraRpcUrls } from 'wagmi'
import { infuraProvider } from 'wagmi/providers/infura';
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { publicProvider } from 'wagmi/providers/public';
import "./App.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./pages/Home";
import {useEffect, React} from "react";
import Index from "./pages/Index";
const{ethers} = require("ethers");


const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.goerli, chain.arbitrum],
  jsonRpcProvider({
	rpc: chain => ({
	  http: `https://${chain.id}.example.com`,
	}),
  }),
  [
	[infuraProvider({ infuraId: process.env.INFURA_ID })],
	publicProvider()
]
);

const CustomAvatar: AvatarComponent = ({ address, ensImage, size }) => {
  const color = generateColorFromAddress(address);
  return ensImage ? (
    <img
      src={ensImage}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  ) : (
    <div
      style={{
        backgroundColor: color,
        borderRadius: 999,
        height: size,
        width: size,
      }}
    >
      :^)
    </div>
  );
};

const { connectors } = getDefaultWallets({
  appName: 'My Git NFT App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const client = createClient({
	provider,
	webSocketProvider,
  })

function App() {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider  chains={chains} coolMode={chains} avatar={CustomAvatar} theme={darkTheme({
      accentColor: '#7b3fe4',
      accentColorForeground: 'white',
      borderRadius: 'small',
      fontStack: 'system',
      overlayBlur: 'small',
    })}>
    <>
      <RouterProvider  router={router} />
      
    </>
      </RainbowKitProvider>
    </WagmiConfig>                    
  );
}

export default App;
