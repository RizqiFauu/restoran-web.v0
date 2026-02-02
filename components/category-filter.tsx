'use client';

import { Button } from '@/components/ui/button';
import { categories } from '@/lib/menu-data';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === null ? 'default' : 'outline'}
        onClick={() => onCategoryChange(null)}
        className="rounded-full"
      >
        All Items
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category.id)}
          className="rounded-full"
        >
          {category.label}
        </Button>
      ))}
    </div>
  );
}
