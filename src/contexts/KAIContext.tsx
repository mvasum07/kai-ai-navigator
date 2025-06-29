
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface KAIContextType {
  balance: number;
  totalEarned: number;
  isEarning: boolean;
  connectWallet: () => void;
  isWalletConnected: boolean;
  walletAddress: string | null;
  dailyEarnings: number;
  timeSpent: number;
}

const KAIContext = createContext<KAIContextType | undefined>(undefined);

export const useKAI = () => {
  const context = useContext(KAIContext);
  if (!context) {
    throw new Error('useKAI must be used within a KAIProvider');
  }
  return context;
};

export const KAIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem('kai-balance');
    return saved ? parseFloat(saved) : 0;
  });
  
  const [totalEarned, setTotalEarned] = useState(() => {
    const saved = localStorage.getItem('kai-total-earned');
    return saved ? parseFloat(saved) : 0;
  });
  
  const [dailyEarnings, setDailyEarnings] = useState(() => {
    const today = new Date().toDateString();
    const savedDate = localStorage.getItem('kai-daily-date');
    const savedEarnings = localStorage.getItem('kai-daily-earnings');
    
    if (savedDate === today && savedEarnings) {
      return parseFloat(savedEarnings);
    }
    return 0;
  });
  
  const [timeSpent, setTimeSpent] = useState(0);
  const [isEarning, setIsEarning] = useState(true);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  // Time-based earning system
  useEffect(() => {
    if (!isEarning) return;

    const interval = setInterval(() => {
      setTimeSpent(prev => prev + 1);
      
      // Earn 0.1 KAI every 30 seconds of active usage
      if (timeSpent > 0 && timeSpent % 30 === 0) {
        const earnedAmount = 0.1;
        const newBalance = balance + earnedAmount;
        const newTotalEarned = totalEarned + earnedAmount;
        const newDailyEarnings = dailyEarnings + earnedAmount;
        
        setBalance(newBalance);
        setTotalEarned(newTotalEarned);
        setDailyEarnings(newDailyEarnings);
        
        // Save to localStorage
        localStorage.setItem('kai-balance', newBalance.toString());
        localStorage.setItem('kai-total-earned', newTotalEarned.toString());
        localStorage.setItem('kai-daily-earnings', newDailyEarnings.toString());
        localStorage.setItem('kai-daily-date', new Date().toDateString());
        
        // Show earning notification
        toast({
          title: "KAI Earned! 🎉",
          description: `+${earnedAmount} KAI tokens earned for active usage!`,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isEarning, timeSpent, balance, totalEarned, dailyEarnings]);

  // Simulate wallet connection (will be replaced with actual MetaMask/Solana integration)
  const connectWallet = () => {
    // Placeholder for wallet connection
    setIsWalletConnected(true);
    setWalletAddress('Sol...demo123'); // Demo address
    toast({
      title: "Wallet Connected! 🔗",
      description: "Ready to receive KAI tokens",
    });
  };

  const value = {
    balance,
    totalEarned,
    isEarning,
    connectWallet,
    isWalletConnected,
    walletAddress,
    dailyEarnings,
    timeSpent
  };

  return <KAIContext.Provider value={value}>{children}</KAIContext.Provider>;
};
