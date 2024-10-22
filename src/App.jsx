import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchForm from './Components/SearchForm';
import Results from './Components/Results';
import './App.css'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <h2 style={{ textAlign: 'center' }}>Dictionary App</h2>

        <SearchForm/>
        <Results/>
      </div>
    </QueryClientProvider>
  );
}

export default App;