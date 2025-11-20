 "use client";

 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
 import type { PropsWithChildren } from "react";
 import { useState } from "react";

 const DEFAULT_STALE_TIME = 1000 * 30;

 export function QueryProvider({ children }: PropsWithChildren) {
   const [client] = useState(
     () =>
       new QueryClient({
         defaultOptions: {
           queries: {
             staleTime: DEFAULT_STALE_TIME,
             refetchOnWindowFocus: false,
             refetchOnReconnect: true,
             retry: 1,
           },
         },
       }),
   );

   return (
     <QueryClientProvider client={client}>
       {children}
       <ReactQueryDevtools initialIsOpen={false} />
     </QueryClientProvider>
   );
 }

