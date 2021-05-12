import React from 'react'

const Cart = ({ count = 0 }) => {
    return (
        <div style={{ position: 'relative' }}>
            <i className="bi bi-cart3"></i>
            <span style={{
                position: 'absolute',
                top: '-10px',
                right: '-10px',
                backgroundColor: 'red',
                fontSize: '20px',
                width: '30px',
                height: '30px',
                textAlign: 'center',
                borderRadius: '50%',
                color: '#fff',
                lineHeight: '28px'
            }}>{count}</span>
        </div>
    )
}

export default Cart
