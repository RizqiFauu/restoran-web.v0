'use client';

import { Suspense } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, Clock, Phone } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background flex items-center">
        <div className="max-w-2xl mx-auto px-4 w-full py-12">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 p-4 bg-green-100 rounded-full">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-3">ありがとうございます!</h1>
            <p className="text-2xl text-primary mb-2">Thank You for Your Order</p>
            <p className="text-lg text-muted-foreground">
              Your delicious meal is being prepared with care
            </p>
          </div>

          <Card className="p-8 mb-8 bg-muted/50">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Order Number</p>
                  <p className="text-3xl font-bold text-primary">{orderId || '0000'}</p>
                </div>
                <div className="text-center p-6 bg-background rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">Estimated Wait Time</p>
                  <p className="text-3xl font-bold">25-30 min</p>
                </div>
              </div>

              <div className="border-t border-border pt-6 space-y-4">
                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">What's Next?</h3>
                    <p className="text-muted-foreground">
                      We'll prepare your order with the finest ingredients. Our team is dedicated to quality!
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Questions?</h3>
                    <p className="text-muted-foreground">
                      Call us at <span className="font-semibold">(555) 123-4567</span> for any inquiries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="space-y-3">
            <Link href="/" className="block">
              <Button className="w-full" size="lg">
                Back to Home
              </Button>
            </Link>
            <Link href="/menu" className="block">
              <Button variant="outline" className="w-full bg-transparent" size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <OrderSuccessContent />
    </Suspense>
  );
}
