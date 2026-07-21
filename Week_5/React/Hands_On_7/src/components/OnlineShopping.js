import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {

    items = [
        { itemname: "Laptop", price: 60000 },
        { itemname: "Mobile", price: 25000 },
        { itemname: "Headphones", price: 3000 },
        { itemname: "Keyboard", price: 1500 },
        { itemname: "Mouse", price: 800 }
    ];

    render() {
        return (
            <div>
                <h1>Online Shopping</h1>

                {
                    this.items.map((item, index) => (
                        <Cart
                            key={index}
                            itemname={item.itemname}
                            price={item.price}
                        />
                    ))
                }

            </div>
        );
    }
}

export default OnlineShopping;