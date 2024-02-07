import React from 'react';
import './products.css';
import { IoIcons } from '../../icon';


const productData = [
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Margherita",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "15.25",
        prod_price_2: "6.30",
        prod_img:"https://i.ibb.co/qDsh6p2/4-600x600.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Tandoori Pizza",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "12.60",
        prod_price_2: "8.60",
        prod_img:"https://i.ibb.co/44Sf74P/7-600x600.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Veggie Supreme",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "10.25",
        prod_price_2: "6.25",
        prod_img:"https://i.ibb.co/VQHpR4c/h1-pizza.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Masala Pizza",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "11.35",
        prod_price_2: "6.25",
        prod_img:"https://i.ibb.co/PC883zj/6-600x600.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Kebab Surprise",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "13.45",
        prod_price_2: "5.30",
        prod_img:"https://i.ibb.co/jb1Y3Yg/8-600x600.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Pepperoni Pizza",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "10.55",
        prod_price_2: "4.50",
        prod_img:"https://i.ibb.co/SxdLLpR/11.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Chicken Pizza",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "10.55",
        prod_price_2: "8.50",
        prod_img:"https://i.ibb.co/qDp9RZb/product1.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Skillet Pizza",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "12.25",
        prod_price_2: "5.35",
        prod_img:"https://i.ibb.co/6X4F1fW/product2.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Spaghetti Veggie",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "12.25",
        prod_price_2: "3.75",
        prod_img:"https://i.ibb.co/fCsPf0k/product3.png",
    },
    {
        IconFilled: <IoIcons.FilledStar />,
        IconOutline: <IoIcons.OutlineStar />,
        prod_title: "Veggie Pizza",
        prod_desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio ipsa illum sequi vero ratione nam voluptates, modi nobis nihil velit deleniti consectetur libero dolorem ab ea, placeat iste consequuntur sint? Omnis aliquam vel ab.",
        prod_price_1: "10.25",
        prod_price_2: "4.25",
        prod_img:"https://i.ibb.co/pKhTRrd/loader.png",
    },
]


function Products() {

    const truncate = (text, n) => {
        if(text.length > n){
            const trunc = text.substring(0, n).concat("...");
            return trunc;
        }
        return text;
    }
  return (
    <div className="products__container">
        <div className="product__text">
            <h3>All product</h3>
            <div className="product__list">
                <button>All Product</button>
                <button>Pizza</button>
                <button>Sushi</button>
                <button>Salad</button>
                <button>Burger</button>
                <button>Dersest</button>
                <button>First Food</button>
            </div>
        </div>
        <div className="products__items__cont__wrapper">
            {productData.map((prod, index)=> (
            <div className="product__items__container" key={index}>
                <div className="product__items__bg">
                    <img src={prod.prod_img} alt="" />
                </div>
                <div className="products__ratings">
                    <span className="rating">{prod.IconFilled}</span>
                    <span className="rating">{prod.IconFilled}</span>
                    <span className="rating">{prod.IconFilled}</span>
                    <span className="rating">{prod.IconFilled}</span>
                    <span className="n_rating">{prod.IconOutline}</span>
                </div>
                <div className="products__list__text">
                    <h3>{prod.prod_title}</h3>
                    <p>{truncate(prod.prod_desc, 50)}</p>
                    <span>{`$${prod.prod_price_1}`}</span>
                    <span>{`$${prod.prod_price_2}`}</span>
                </div>
            </div>
            ))}
        </div>

    </div>
  )
}

export default Products