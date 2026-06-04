import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeCart}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.4)',
            zIndex: 9998,
            transition: 'opacity 0.3s ease',
          }}
        />
      )}

      {/* Drawer */}
      <div
        id="cart-drawer"
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-420px',
          width: '400px',
          maxWidth: '90vw',
          height: '100vh',
          background: 'white',
          zIndex: 9999,
          transition: 'right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: isOpen ? '-10px 0 40px rgba(0,0,0,0.15)' : 'none',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.5rem',
          borderBottom: '1px solid #eee',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 900,
            fontSize: '1.5rem',
            color: 'var(--text-dark)',
          }}>
            Your Cart
          </h3>
          <button
            onClick={closeCart}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'var(--text-medium)',
              padding: '0.5rem',
            }}
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflow: 'auto', padding: '1rem 1.5rem' }}>
          {items.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '3rem 1rem',
              color: 'var(--text-medium)',
            }}>
              <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</p>
              <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>Your cart is empty</p>
              <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>Add some delicious snacks!</p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  gap: '1rem',
                  padding: '1rem 0',
                  borderBottom: '1px solid #f0f0f0',
                  alignItems: 'center',
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '10px',
                    objectFit: 'cover',
                  }}
                />
                <div style={{ flex: 1 }}>
                  <h4 style={{
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    color: 'var(--text-dark)',
                    marginBottom: '0.3rem',
                  }}>
                    {item.name}
                  </h4>
                  <p style={{ color: 'var(--brand-green)', fontWeight: 700, fontSize: '0.9rem' }}>
                    ₹{item.price}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    style={{
                      width: '28px', height: '28px',
                      borderRadius: '50%',
                      border: '1px solid #ddd',
                      background: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                    }}
                  >
                    −
                  </button>
                  <span style={{ fontWeight: 600, minWidth: '20px', textAlign: 'center' }}>
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    style={{
                      width: '28px', height: '28px',
                      borderRadius: '50%',
                      border: '1px solid #ddd',
                      background: 'white',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9rem',
                    }}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#ccc',
                    cursor: 'pointer',
                    fontSize: '1.1rem',
                    padding: '0.3rem',
                  }}
                  onMouseEnter={e => e.target.style.color = 'var(--brand-red-light)'}
                  onMouseLeave={e => e.target.style.color = '#ccc'}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div style={{
            padding: '1.5rem',
            borderTop: '1px solid #eee',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '1rem',
              fontSize: '1.1rem',
              fontWeight: 700,
            }}>
              <span>Total</span>
              <span style={{ color: 'var(--brand-green)' }}>₹{totalPrice}</span>
            </div>
            <button className="btn-primary" style={{ width: '100%', padding: '1rem' }}>
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
