'use client';
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AppState {
    openAddWindowObject: {
        openAddWindow: boolean;
        setOpenAddWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

const defaultState: AppState = {
    openAddWindowObject: {
        openAddWindow: false,
        setOpenAddWindow: () => {},
    },
};

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [openAddWindow, setOpenAddWindow] = useState(false);

    return (
        <AppContext.Provider
            value={{
                openAddWindowObject: { openAddWindow, setOpenAddWindow },
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);