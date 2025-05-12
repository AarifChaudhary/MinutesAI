"use client";

import { createContext, useContext } from "react";

type SupabaseContext = {
  user: any | null;
  isLoading: boolean;
};

const Context = createContext<SupabaseContext>({
  user: null,
  isLoading: false
});

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  // Mock implementation without Supabase
  return (
    <Context.Provider value={{ user: null, isLoading: false }}>
      {children}
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }
  return {
    ...context,
    supabase: null // Mock supabase client
  };
};