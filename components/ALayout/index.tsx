import React from "react";
import Header from "./Header";
import {
  MetaMask,
  OkxWallet,
  TokenPocket,
  WagmiWeb3ConfigProvider,
  WalletConnect,
  Hardhat,
  Mainnet,
} from "@ant-design/web3-wagmi";
import { QueryClient } from "@tanstack/react-query";
import { createConfig, http } from "wagmi";
import { mainnet, hardhat } from "wagmi/chains";
import { walletConnect } from "wagmi/connectors";

const queryClient = new QueryClient();

const config = createConfig({
  chains: [mainnet, hardhat],
  transports: {
    [mainnet.id]: http(),
    [hardhat.id]: http("http://127.0.0.1:8545/"),
  },
  connectors: [
    walletConnect({
      showQrModal: false,
      projectId: "c07c0051c2055890eade3556618e38a6",
    }),
  ],
});

interface ALayoutProps {
  children: React.ReactNode;
}

const ALayout: React.FC<ALayoutProps> = ({ children }) => {
  return (
    <WagmiWeb3ConfigProvider
      eip6963={{
        autoAddInjectedWallets: true,
      }}
      chains={[Mainnet, Hardhat]}
      ens
      wallets={[
        MetaMask(),
        WalletConnect(),
        TokenPocket({
          group: "Popular",
        }),
        OkxWallet(),
      ]}
      config={config}
      queryClient={queryClient}
    >
      <Header />
      {children}
    </WagmiWeb3ConfigProvider>
  );
};

export default ALayout;
