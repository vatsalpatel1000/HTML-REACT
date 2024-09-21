import Product from "./Product.jsx";

function ProductTab(){
    return (
        <>
            <Product title="phone" price={30000}/>
            <Product title="leptop" price={40000}/>
            <Product title="pen" price={10}/>
        </> 
    );
}

export default ProductTab;