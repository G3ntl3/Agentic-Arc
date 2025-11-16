import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

import { registerSW } from "virtual:pwa-register";

// Import the PrivyProvider
import { PrivyProvider } from "@privy-io/react-auth";

registerSW({
  immediate: true,
  onNeedRefresh() {
    console.log("New content available, refresh the page.");
  },
  onOfflineReady() {
    console.log("App ready to work offline.");
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PrivyProvider
      appId="cmhtx5pjo00iala0dfd65ytzp"
      clientId="client-WY6SWg4k6LHpigcQMRkgrzQurU9EsKgnkCG2P1ktAaGmF"
      config={{
        embeddedWallets: {
          ethereum: {
            createOnLogin: "users-without-wallets"
          }
        }
      }}
    >
      <App />
    </PrivyProvider>
  </StrictMode>
);
