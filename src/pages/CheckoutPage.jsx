import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { ProgressSteps } from '../components/common/ProgressSteps';
import { ShippingStep } from '../components/checkout/ShippingStep';
import { PaymentStep } from '../components/checkout/PaymentStep';
import { ReviewStep } from '../components/checkout/ReviewStep';

export const CheckoutPage = () => {
  const { cartItems, clearCart, cartTotal } = useContext(CartContext);
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingData, setShippingData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  if (cartItems.length === 0) {
    navigate('/cart');
    return null;
  }

  const steps = [
    { number: 1, title: 'Shipping' },
    { number: 2, title: 'Payment' },
    { number: 3, title: 'Review' }
  ];

  const handleShippingSubmit = (data) => {
    setShippingData(data);
    setCurrentStep(2);
  };

  const handlePaymentSubmit = (data) => {
    setPaymentData(data);
    setCurrentStep(3);
  };

  const handlePlaceOrder = () => {
    const orderId = 'ORD-' + Date.now();
    const shipping = cartTotal > 100 ? 0 : 9.99;
    const tax = cartTotal * 0.08;
    const total = cartTotal + shipping + tax;
    clearCart();
    navigate('/order-success', { state: { orderId, shippingData, total } });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <ProgressSteps steps={steps} currentStep={currentStep} />

      <div className="mt-8">
        {currentStep === 1 && (
          <ShippingStep onSubmit={handleShippingSubmit} initialData={shippingData} />
        )}
        {currentStep === 2 && (
          <PaymentStep
            onSubmit={handlePaymentSubmit}
            onBack={() => setCurrentStep(1)}
            initialData={paymentData}
          />
        )}
        {currentStep === 3 && (
          <ReviewStep
            shippingData={shippingData}
            paymentData={paymentData}
            onBack={() => setCurrentStep(2)}
            onPlaceOrder={handlePlaceOrder}
          />
        )}
      </div>
    </div>
  );
};
