'use client';

import { MenuItem } from '@/lib/menu-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

interface MenuCardProps {
  item: MenuItem;
  isGridLayout?: boolean;
}

export function MenuCard({ item, isGridLayout = true }: MenuCardProps) {
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

  if (isGridLayout) {
    return (
      <Link href={`/menu/${item.id}`}>
        <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
          <Card className="h-full overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300 group">
            <div className="relative h-48 overflow-hidden bg-muted">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
              </div>
              <Badge className={`w-fit text-xs ${categoryColor[item.category]}`}>
                {categoryLabel[item.category]}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{item.description}</p>
              <div className="text-xl font-bold text-primary">${item.price.toFixed(2)}</div>
            </CardContent>
          </Card>
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <div className="flex gap-4 p-4">
          <div className="relative w-24 h-24 flex-shrink-0">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover rounded"
              sizes="96px"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold">{item.name}</h3>
                <Badge className={`text-xs flex-shrink-0 ${categoryColor[item.category]}`}>
                  {categoryLabel[item.category]}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div className="text-lg font-bold text-primary">${item.price.toFixed(2)}</div>
              <Link href={`/menu/${item.id}`}>
                <Button size="sm" className="gap-2">
                  <ShoppingCart size={16} />
                  View
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
