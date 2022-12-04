import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
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
    element: <Index/>,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.goerli, chain.arbitrum],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My Git NFT App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

function App() {

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider  chains={chains} coolMode={chains} theme={darkTheme({
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
