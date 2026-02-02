'use client';

import React from "react"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FadeInSection } from '@/components/animated-elements';
import { useCart } from '@/lib/cart-context';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, total, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    orderType: 'delivery',
    tableNumber: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">No items in cart</h1>
            <p className="text-muted-foreground mb-6">Please add items before checking out.</p>
            <Link href="/menu">
              <Button>Back to Menu</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate order processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Clear cart and redirect to success page
    clearCart();
    const orderNumber = Math.floor(Math.random() * 10000) + 1000;
    router.push(`/order-success?orderId=${orderNumber}`);
  };

  const taxAmount = total * 0.08;
  const totalAmount = total + taxAmount;

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <FadeInSection className="mb-8">
            <Link
              href="/cart"
              className="text-primary font-semibold hover:underline flex items-center gap-1"
            >
              <ArrowLeft size={18} />
              Back to Cart
            </Link>
          </FadeInSection>

          <FadeInSection className="mb-12">
            <h1 className="text-4xl font-bold text-foreground">Checkout</h1>
          </FadeInSection>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {/* Form */}
            <motion.div
              className="lg:col-span-2"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    {/* Order Type */}
                    <div className="space-y-3 border-t border-border pt-6">
                      <Label>Order Type *</Label>
                      <RadioGroup value={formData.orderType}>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="delivery"
                            id="delivery"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                orderType: 'delivery',
                                tableNumber: '',
                              }))
                            }
                          />
                          <Label htmlFor="delivery" className="font-normal cursor-pointer">
                            Delivery
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="dine-in"
                            id="dine-in"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                orderType: 'dine-in',
                              }))
                            }
                          />
                          <Label htmlFor="dine-in" className="font-normal cursor-pointer">
                            Dine In
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="takeout"
                            id="takeout"
                            onClick={() =>
                              setFormData((prev) => ({
                                ...prev,
                                orderType: 'takeout',
                                tableNumber: '',
                              }))
                            }
                          />
                          <Label htmlFor="takeout" className="font-normal cursor-pointer">
                            Takeout
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Table Number (if dine-in) */}
                    {formData.orderType === 'dine-in' && (
                      <div className="space-y-2 bg-muted p-4 rounded-lg">
                        <Label htmlFor="tableNumber">Table Number</Label>
                        <Input
                          id="tableNumber"
                          name="tableNumber"
                          type="number"
                          value={formData.tableNumber}
                          onChange={handleChange}
                          placeholder="1"
                          min="1"
                        />
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-8"
                      size="lg"
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Order Summary */}
            <motion.div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>
                          {item.quantity}x {item.name}
                        </span>
                        <span className="font-semibold">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 py-4 border-t border-b border-border">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Tax (8%)</span>
                      <span>${taxAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Delivery</span>
                      <span>Free</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total</span>
                    <span className="text-primary">${totalAmount.toFixed(2)}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
