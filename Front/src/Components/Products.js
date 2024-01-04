import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";

export function Products(props) {
    return (
        <div className='productList'>
            <div key={props.id} className='productCard'>
                <img src={props.image} alt='product-img' className='productImage'></img>

                <FaEdit className={"productCard__cart"} />
                <RiDeleteBin6Line className={"productCard__wishlist"} />
                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                </div>
            </div>
        </div>
    )
}