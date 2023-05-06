
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './context/UserContext';
import { Layout } from './components/Layout/Layout';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {

  const queryClient = new QueryClient();

  const development = import.meta.env.VITE_NODE_ENV === "development" ? true : false

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <UserProvider userId={"12"} development={development}>
          <Dashboard />
        </UserProvider>
      </Layout>
    </QueryClientProvider>
  )
}

export default App
