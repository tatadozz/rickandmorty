import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Navigators from './src/navigation/Navigator';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigators/>
    </QueryClientProvider>
  );
}