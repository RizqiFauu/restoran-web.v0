'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MenuCard } from '@/components/menu-card';
import { FadeInSection } from '@/components/animated-elements';
import { menuItems } from '@/lib/menu-data';
import Link from 'next/link';
import Image from 'next/image';
import { ChefHat, Sparkles, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredItems = menuItems.slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative h-96 md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
            <motion.div
              className="max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div
                className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-sm font-semibold text-primary">Welcome to</p>
              </motion.div>
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Sakura
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Experience the essence of authentic Japanese cuisine with modern elegance
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Link href="/menu">
                  <Button size="lg" className="rounded-full px-8">
                    View Menu
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Featured Menu Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <FadeInSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">Featured Dishes</h2>
            <p className="text-muted-foreground text-lg">
              Discover our most popular selections
            </p>
          </FadeInSection>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
          >
            {featuredItems.map((item) => (
              <motion.div
                key={item.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link href="/menu">
              <Button variant="outline" className="rounded-full px-8 bg-transparent">
                Browse Full Menu
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="bg-muted/50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <FadeInSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    About Sakura
                  </h2>
                  <p className="text-muted-foreground text-lg mb-4">
                    Sakura has been serving authentic Japanese cuisine for over a decade. Our chefs
                    trained in Tokyo bring traditional recipes and modern innovation to every dish.
                  </p>
                  <p className="text-muted-foreground text-lg">
                    We source the finest ingredients and prepare each meal with care, respecting
                    Japanese culinary traditions while embracing contemporary techniques.
                  </p>
                </div>
                <motion.div
                  className="grid grid-cols-3 gap-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <ChefHat className="mx-auto mb-3 text-primary" size={32} />
                      <h3 className="font-semibold mb-2">Expert Chefs</h3>
                      <p className="text-sm text-muted-foreground">
                        Trained in Tokyo
                      </p>
                    </Card>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <Sparkles className="mx-auto mb-3 text-primary" size={32} />
                      <h3 className="font-semibold mb-2">Premium Quality</h3>
                      <p className="text-sm text-muted-foreground">
                        Fresh ingredients
                      </p>
                    </Card>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                      <Clock className="mx-auto mb-3 text-primary" size={32} />
                      <h3 className="font-semibold mb-2">Fast Service</h3>
                      <p className="text-sm text-muted-foreground">
                        Quick delivery
                      </p>
                    </Card>
                  </motion.div>
                </motion.div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <Card className="bg-primary text-primary-foreground overflow-hidden">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Order?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Browse our full menu and place your order today
              </p>
              <Link href="/menu">
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-primary-foreground text-primary hover:bg-muted"
                >
                  Order Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
      <Footer />
    </>
  );
}
