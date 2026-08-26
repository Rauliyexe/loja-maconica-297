import React, { createContext, useContext, useState, useEffect, useMemo, ReactNode } from 'react';
import {
  calculateGuaranesiaSky,
  GuaranesiaSkyState,
  GUARANESIA_COORDINATES,
} from '../lib/astronomyGuaranesia';

interface GuaranesiaSkyContextType {
  skyState: GuaranesiaSkyState;
  isLive: boolean;
  setIsLive: (live: boolean) => void;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
  setHourOffset: (hours: number) => void;
  hourOffset: number;
  resetToNow: () => void;
  setFoundationSky: () => void;
  isObservatoryModalOpen: boolean;
  setIsObservatoryModalOpen: (open: boolean) => void;
}

const GuaranesiaSkyContext = createContext<GuaranesiaSkyContextType | undefined>(undefined);

export const GuaranesiaSkyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLive, setIsLive] = useState(true);
  const [currentRealTime, setCurrentRealTime] = useState<Date>(new Date());
  const [hourOffset, setHourOffset] = useState<number>(0);
  const [customDate, setCustomDate] = useState<Date | null>(null);
  const [isObservatoryModalOpen, setIsObservatoryModalOpen] = useState(false);

  // Relógio em tempo real que atualiza a cada segundo se isLive estiver ativo
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      setCurrentRealTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [isLive]);

  // Data efetiva para o cálculo astronômico
  const effectiveDate = useMemo(() => {
    if (customDate) {
      return new Date(customDate.getTime() + hourOffset * 3600000);
    }
    return new Date(currentRealTime.getTime() + hourOffset * 3600000);
  }, [customDate, currentRealTime, hourOffset]);

  // Estado celeste computado
  const skyState = useMemo(() => {
    return calculateGuaranesiaSky(effectiveDate);
  }, [effectiveDate]);

  const resetToNow = () => {
    setIsLive(true);
    setCustomDate(null);
    setHourOffset(0);
    setCurrentRealTime(new Date());
  };

  const setFoundationSky = () => {
    setIsLive(false);
    setHourOffset(0);
    setCustomDate(new Date(GUARANESIA_COORDINATES.foundationDate));
  };

  const handleSetSelectedDate = (date: Date) => {
    setIsLive(false);
    setCustomDate(date);
  };

  return (
    <GuaranesiaSkyContext.Provider
      value={{
        skyState,
        isLive,
        setIsLive,
        selectedDate: effectiveDate,
        setSelectedDate: handleSetSelectedDate,
        hourOffset,
        setHourOffset,
        resetToNow,
        setFoundationSky,
        isObservatoryModalOpen,
        setIsObservatoryModalOpen,
      }}
    >
      {children}
    </GuaranesiaSkyContext.Provider>
  );
};

export const useGuaranesiaSky = (): GuaranesiaSkyContextType => {
  const context = useContext(GuaranesiaSkyContext);
  if (!context) {
    throw new Error('useGuaranesiaSky must be used within a GuaranesiaSkyProvider');
  }
  return context;
};
