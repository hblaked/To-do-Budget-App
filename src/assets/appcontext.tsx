'use client';
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface AppState {
    openAddWindowObject: {
        openAddWindow: boolean;
        setOpenAddWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };

    openIconWindowObject: {
        openIconWindow: boolean;
        setOpenIconWindow: React.Dispatch<React.SetStateAction<boolean>>;
    };
}

const defaultState: AppState = {
    openAddWindowObject: {
        openAddWindow: false,
        setOpenAddWindow: () => {},
    },
    openIconWindowObject: {
        openIconWindow: true,
        setOpenIconWindow: () => {},
    },
};

const AppContext = createContext<AppState>(defaultState);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [openAddWindow, setOpenAddWindow] = useState(false);
    const [openIconWindow, setOpenIconWindow] = useState(true);

    return (
        <AppContext.Provider
            value={{
                openAddWindowObject: { openAddWindow, setOpenAddWindow },
                openIconWindowObject: { openIconWindow, setOpenIconWindow },
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => useContext(AppContext);