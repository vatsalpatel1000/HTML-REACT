import "./Product.css"

function Product({ title, price , features }) {
    isDiscount = price > 30000;
    let styles = { backgroundColor : isDiscount ? "pink" : "" };
    // style is static keyword in Jsx for css
    return (
        <div className ="Product" style = {styles}>     
            <h3>{ title }</h3>
            <h5> price : { price }</h5>
            {isDiscount && <p> "Discount of 5%"</p>}
        </div>
    );
}

export default Product;