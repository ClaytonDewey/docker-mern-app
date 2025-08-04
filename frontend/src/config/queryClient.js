import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    querieis: {
      retry: false,
    },
  },
});

export default queryClient;
