
import {useParams} from "react-router-dom"
export default function ProductDetails(){
    const {id} = useParams()
    console.log(id)
    return <h3> This is a product details page</h3>
}