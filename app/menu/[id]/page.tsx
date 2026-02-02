'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeInSection } from '@/components/animated-elements';
import { menuItems } from '@/lib/menu-data';
import { useCart } from '@/lib/cart-context';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { ChevronLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function MenuDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const item = menuItems.find((i) => i.id === params.id);

  if (!item) {
    return (
      <div>
        <Header />
        <main className="min-h-screen bg-background">
          <div className="max-w-3xl mx-auto px-4 py-12 text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Item not found</h1>
            <p className="text-muted-foreground mb-6">The item you are looking for does not exist.</p>
            <Link href="/menu">
              <Button>Back to Menu</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryLabel = {
    ramen: 'Ramen',
    sushi: 'Sushi',
    donburi: 'Donburi',
    appetizers: 'Appetizer',
    drinks: 'Drink',
  };

  const categoryColor = {
    ramen: 'bg-amber-100 text-amber-900',
    sushi: 'bg-blue-100 text-blue-900',
    donburi: 'bg-orange-100 text-orange-900',
    appetizers: 'bg-green-100 text-green-900',
    drinks: 'bg-purple-100 text-purple-900',
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    toast({
      title: 'Added to cart',
      description: `${quantity}x ${item.name} added to your cart`,
    });
    setQuantity(1);
  };

  return (
    <div>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary font-semibold mb-8 hover:underline"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
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
            {/* Image */}
            <motion.div
              className="flex items-center justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <Card className="w-full aspect-square overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </Card>
            </motion.div>

            {/* Details */}
            <motion.div
              className="flex flex-col justify-between"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                  <Badge className={`mb-4 text-sm ${categoryColor[item.category]}`}>
                    {categoryLabel[item.category]}
                  </Badge>
                </motion.div>
                <motion.h1
                  className="text-4xl font-bold text-foreground mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.name}
                </motion.h1>
                <motion.p
                  className="text-xl text-muted-foreground mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.description}
                </motion.p>

                {/* Info Cards */}
                <motion.div
                  className="bg-muted rounded-lg p-6 mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Price</p>
                      <p className="text-2xl font-bold text-primary">${item.price.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Category</p>
                      <p className="text-lg font-semibold">{categoryLabel[item.category]}</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Quantity & Add to Cart */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-4 bg-muted rounded-lg p-4">
                  <span className="text-sm font-semibold">Quantity:</span>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:bg-background rounded transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={20} />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 text-center bg-background border border-border rounded py-1"
                    min="1"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:bg-background rounded transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button size="lg" className="w-full gap-2" onClick={handleAddToCart}>
                    <ShoppingCart size={20} />
                    Add to Cart - ${(item.price * quantity).toFixed(2)}
                  </Button>
                </motion.div>

                <Link href="/menu" className="block">
                  <Button size="lg" variant="outline" className="w-full bg-transparent">
                    Continue Shopping
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
