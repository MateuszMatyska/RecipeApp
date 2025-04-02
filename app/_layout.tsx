import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/src/lib';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot /> 
    </QueryClientProvider>
  );
}