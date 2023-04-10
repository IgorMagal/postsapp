"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export default function QueryWrapper({ children }: { children: ReactNode }) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <Toaster
        toastOptions={{
          style: {
            fontWeight: 500,
          },
        }}
        position="bottom-center"
      />
    </QueryClientProvider>
  );
}
