import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p className="text-white/80">
              Connecting skilled professionals with customers in need of quality services.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">Find Services</Button></li>
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">Become a Provider</Button></li>
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">How It Works</Button></li>
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">Support</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">Home Services</Button></li>
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">Professional</Button></li>
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">Education</Button></li>
              <li><Button variant="link" className="text-white/80 hover:text-white p-0">Health & Wellness</Button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-white hover:bg-white/20">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Service Marketplace. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};