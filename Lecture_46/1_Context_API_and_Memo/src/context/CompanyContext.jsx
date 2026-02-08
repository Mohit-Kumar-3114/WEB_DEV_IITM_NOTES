import { createContext, useState } from "react";

export const CompanyContext = createContext()

export default function CompanyProvider({children}) {
    const [companyName, setCompanyName] = useState("TechCorp");
    return (
        <CompanyContext.Provider value={{companyName, setCompanyName}}>
            {children}
        </CompanyContext.Provider>
    )
}