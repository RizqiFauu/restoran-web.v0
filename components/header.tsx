'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';
import { usePathname } from 'next/navigation';

export function Header() {
  const { items } = useCart();
  const pathname = usePathname();
  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              桜
            </div>
            <h1 className="text-2xl font-bold text-foreground hidden sm:block">Sakura</h1>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                pathname === '/' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={`font-medium transition-colors ${
                pathname === '/menu' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Menu
            </Link>
          </nav>

          <Link href="/cart">
            <Button variant="outline" className="relative gap-2 bg-transparent">
              <ShoppingCart size={20} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
