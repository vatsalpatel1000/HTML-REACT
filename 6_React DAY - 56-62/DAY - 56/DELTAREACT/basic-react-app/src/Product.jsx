import "./Product.css"
import Price from "./Price";

function Product({ title, idx }) {
    // isDiscount = price > 30000;
    // let styles = { backgroundColor : isDiscount ? "pink" : "" };
    // style is static keyword in Jsx for css
    let oldPrices = ["12,495","11,900","1,599","599"];
    let newPrices = ["8,999","9199","899","278"];
    let description = ["8,000DPI","intutuive surface","designed for ipad pro","wireless"]
    return (
        //<div className ="Product" style = {styles}>     
            // <h3>{ title }</h3>
            // <h5> price : { price }</h5>
            // {isDiscount && <p> "Discount of 5%"</p>}
        //</div>
        <div className = "Product">
            <h4>{ title }</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p>{description[idx][2]}</p>
            <Price oldPrice ={oldPrices[idx ]} newPrice = {newPrices[idx]} />
        </div>
    );
}

export default Product;