import { createContext, useState } from "react";

export const CompanyContext = createContext()

export default function CompanyProvider({children}) {
    const [companyName, setCompanyName] = useState("TechCorp");
    const [count, setCount] = useState(0);
    return (
        <CompanyContext.Provider value={{companyName, setCompanyName, count, setCount}}>
            {children}
        </CompanyContext.Provider>
    )
}