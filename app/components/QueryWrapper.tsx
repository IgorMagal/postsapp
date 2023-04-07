"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

const queryClient: QueryClient = new QueryClient();

export default function QueryWrapper({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        toastOptions={{
          style: {
            fontWeight: 700,
          },
        }}
        position="bottom-center"
      />
    </QueryClientProvider>
  );
}
