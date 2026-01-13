import { createContext } from 'react'

export const ShopContext = createContext()
import { products } from '../assets/assets';
import { useNavigate } from 'react-router-dom';


export default function ShopContextProvider({ children }) {
    const currency = "₹";
    const delivery_fee = 10;
    const navigate = useNavigate();
    const [ search, setSearch ] = useState("");
    const [ showSearch, setShowSearch ] = useState(false);
    const value = { currency, delivery_fee, products, navigate, search, showSearch };

    return(
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    )
}