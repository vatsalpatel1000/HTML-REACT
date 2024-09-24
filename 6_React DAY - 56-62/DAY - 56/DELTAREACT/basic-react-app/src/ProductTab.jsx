import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display : "flex",
        flexwrap : "wrap",
        justifyContent : "center",
        alignItems : "center",
    }
    return (
        <div style = {styles}>
        <Product title="logitech mx master" idx={0}/>
        <Product title="Apple" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2}/>
        <Product title="Petronics" idx={3}/>

            {/* <Product title="phone" price={30000}/>
            <Product title="leptop" price={40000}/>
            <Product title="pen" price={10}/> */}
        </div> 
    );
}

export default ProductTab;