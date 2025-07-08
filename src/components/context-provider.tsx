import { useState , createContext , useMemo } from "react";
interface ContextProps {
    children: React.ReactNode,
   
}

interface UserContextType {
    theme:boolean;
    setTheme:React.Dispatch<React.SetStateAction<boolean>>;
}

const ShowContext =  createContext<UserContextType | undefined>(undefined);

const  ContextProvider:React.FC<ContextProps> = ({ children }) => {
   
    const [ theme , setTheme ] = useState<boolean>(false)  
    
    
    const contextValue = useMemo(() => (
        { theme , setTheme }
    ),[  theme])
    return(
        <ShowContext.Provider value={contextValue}>
            {children}
        </ShowContext.Provider>
    )
}

export { ShowContext ,   ContextProvider }  