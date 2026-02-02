import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Sakura Restaurant</h3>
            <p className="text-muted-foreground text-sm">
              Experience authentic Japanese cuisine with modern elegance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Mon - Thu: 11am - 10pm</p>
              <p>Fri - Sat: 11am - 11pm</p>
              <p>Sun: 12pm - 9pm</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>info@sakura.com</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>123 Main St, City, State</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Sakura Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
