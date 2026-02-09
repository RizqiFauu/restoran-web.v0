'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FadeInSection } from '@/components/animated-elements';
import Link from 'next/link';
import { 
  ChefHat, 
  Sparkles, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Users,
  Award,
  Heart
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section for About */}
        <section className="relative h-64 md:h-80 overflow-hidden bg-gradient-to-r from-primary/10 to-accent/10">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-center">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                About Sakura
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Where Tradition Meets Innovation in Japanese Cuisine
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <FadeInSection>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground text-lg">
                  <p>
                    Founded in 2013, Sakura Restaurant has been a beacon of authentic 
                    Japanese cuisine for over a decade. Our journey began with a simple 
                    yet profound vision: to bring the authentic taste of Japan to our 
                    community while maintaining the highest standards of quality and tradition.
                  </p>
                  <p>
                    Master Chef Hiroshi Tanaka, trained for 15 years in Tokyo's most 
                    prestigious restaurants, brought his expertise and passion to create 
                    Sakura. His dedication to traditional techniques combined with 
                    innovative culinary approaches forms the heart of our kitchen.
                  </p>
                  <p>
                    Every dish at Sakura tells a story - from the carefully selected 
                    ingredients to the meticulous preparation methods that have been 
                    passed down through generations of Japanese chefs.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className="relative w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <ChefHat className="text-primary" size={64} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Master Chef Hiroshi Tanaka
                  </h3>
                  <p className="text-muted-foreground">Executive Chef & Founder</p>
                  <div className="mt-4 flex items-center gap-2 text-sm">
                    <Award size={16} className="text-amber-500" />
                    <span>15+ Years Culinary Experience</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>

          {/* Our Values Section */}
          <FadeInSection className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-3">Our Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The core principles that guide every aspect of our restaurant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow border-primary/10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <ChefHat className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Expert Craftsmanship</h3>
                  <p className="text-muted-foreground">
                    Our chefs are rigorously trained in traditional Japanese culinary arts, 
                    ensuring every dish meets authentic standards.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow border-primary/10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    We source only the finest ingredients, partnering with local farmers 
                    and authentic Japanese suppliers.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow border-primary/10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Heart className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Passion & Dedication</h3>
                  <p className="text-muted-foreground">
                    Every dish is prepared with love and attention to detail, 
                    honoring Japanese culinary traditions.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow border-primary/10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Community Focus</h3>
                  <p className="text-muted-foreground">
                    We believe in building relationships with our guests and 
                    contributing positively to our community.
                  </p>
                </Card>
              </motion.div>
            </div>
          </FadeInSection>

          {/* Restaurant Info Section */}
          <FadeInSection className="mb-16">
            <div className="bg-muted/30 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <MapPin className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Location</h3>
                  </div>
                  <p className="text-muted-foreground">
                    123 Sakura Street<br />
                    Tokyo District<br />
                    Jakarta, Indonesia 12345
                  </p>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Clock className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Opening Hours</h3>
                  </div>
                  <div className="text-muted-foreground space-y-1">
                    <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
                    <p>Saturday - Sunday: 11:00 AM - 11:00 PM</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Last orders 30 minutes before closing
                    </p>
                  </div>
                </div>

                <div className="text-center md:text-right">
                  <div className="flex items-center justify-center md:justify-end gap-3 mb-4">
                    <Phone className="text-primary" size={24} />
                    <h3 className="text-xl font-semibold">Contact Us</h3>
                  </div>
                  <div className="text-muted-foreground">
                    <p className="mb-1">Phone: (021) 1234-5678</p>
                    <p className="mb-1">Email: info@sakura-restaurant.com</p>
                    <p className="text-sm text-muted-foreground/70 mt-2">
                      Reservations recommended
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Achievement Stats */}
          <FadeInSection className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years of Excellence</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Menu Items</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">15K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="bg-muted/30 rounded-xl p-6">
                <div className="text-3xl font-bold text-primary mb-2">5⭐</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </FadeInSection>
        </section>
      </main>
      <Footer />
    </>
  );
}