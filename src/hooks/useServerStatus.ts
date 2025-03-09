
import { useState, useEffect } from 'react';

interface ServerStatus {
  online: boolean;
  players?: {
    online?: number;
    max?: number;
  };
  isLoading: boolean;
  error: string | null;
}

const useServerStatus = (serverDomain: string, interval = 30000) => {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: {
      online: 0,
      max: 0
    },
    isLoading: true,
    error: null
  });

  const fetchServerStatus = async () => {
    try {
      const response = await fetch(`https://api.ismcserver.online/${serverDomain}`, {
        headers: { "Authorization": "28a9b4ff-b266-4902-924f-3cedf52f4d66" }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch server status');
      }
      
      const data = await response.json();
      setStatus({
        online: data.online,
        players: data.players,
        isLoading: false,
        error: null
      });
    } catch (error) {
      console.error('Error fetching server status:', error);
      setStatus(prev => ({
        ...prev,
        isLoading: false,
        error: 'Failed to fetch server status'
      }));
    }
  };

  useEffect(() => {
    fetchServerStatus();
    
    const intervalId = setInterval(() => {
      fetchServerStatus();
    }, interval);
    
    return () => clearInterval(intervalId);
  }, [serverDomain, interval]);

  return status;
};

export default useServerStatus;
