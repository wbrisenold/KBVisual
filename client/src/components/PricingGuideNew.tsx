import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const PricingGuideNew = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size for clean, readable design  
    canvas.width = 1200;
    canvas.height = 4000;

    // Premium background with sophisticated gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#fdfcfb');
    gradient.addColorStop(0.3, '#fbfaf8');
    gradient.addColorStop(0.7, '#f7f6f4');
    gradient.addColorStop(1, '#f3f2f0');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle premium texture
    ctx.globalAlpha = 0.02;
    ctx.fillStyle = '#d4af37';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillRect(x, y, 2, 1);
    }
    ctx.globalAlpha = 1;

    let yPosition = 80;
    const centerCol = canvas.width / 2;

    // Elegant masthead
    const headerGradient = ctx.createLinearGradient(0, 0, 0, 220);
    headerGradient.addColorStop(0, '#1c1917');
    headerGradient.addColorStop(1, '#2a2622');
    ctx.fillStyle = headerGradient;
    ctx.fillRect(0, 0, canvas.width, 220);

    // Gold accent border
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(0, 215, canvas.width, 5);

    // KB Visualz branding
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 54px serif';
    ctx.textAlign = 'center';
    ctx.fillText('KB VISUALZ', centerCol, 110);

    ctx.fillStyle = '#f5f5f4';
    ctx.font = '14px sans-serif';
    ctx.letterSpacing = '6px';
    ctx.fillText('ORLANDO • PHOTOGRAPHY & VIDEOGRAPHY', centerCol, 145);

    ctx.fillStyle = '#b8b5b0';
    ctx.font = '12px serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('CAPTURING LIFE\'S PRECIOUS MOMENTS', centerCol, 170);

    yPosition = 300;

    // Main title
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 42px serif';
    ctx.fillText('PRICING GUIDE', centerCol, yPosition);
    yPosition += 30;

    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('2025 EDITION', centerCol, yPosition);
    yPosition += 60;

    // Elegant decorative line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(200, yPosition);
    ctx.lineTo(880, yPosition);
    ctx.stroke();
    
    // Decorative diamonds
    ctx.fillStyle = '#d4af37';
    ctx.save();
    ctx.translate(350, yPosition);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-8, -8, 16, 16);
    ctx.restore();
    
    ctx.save();
    ctx.translate(730, yPosition);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-8, -8, 16, 16);
    ctx.restore();

    yPosition += 120;

    // Services Section with improved layout
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 28px serif';
    ctx.fillText('PHOTOGRAPHY SERVICES', centerCol, yPosition);
    yPosition += 50;

    // Portrait Sessions in clean box layout
    ctx.fillStyle = '#f8f7f5';
    ctx.fillRect(120, yPosition - 25, canvas.width - 240, 220);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, yPosition - 25, canvas.width - 240, 220);

    yPosition += 15;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 24px serif';
    ctx.fillText('PORTRAIT SESSIONS', centerCol, yPosition);
    yPosition += 35;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 28px serif';
    ctx.fillText('$250 FIRST HOUR', centerCol, yPosition);
    yPosition += 30;

    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.fillText('Additional Hours: $150', centerCol, yPosition);
    yPosition += 35;

    ctx.fillStyle = '#1c1917';
    ctx.font = '16px serif';
    ctx.fillText('Outdoor Sessions • 15 Photos Included • Additional Photos $15 Each', centerCol, yPosition);
    yPosition += 22;
    ctx.fillText('Graduation • Prom • Fashion • Family • Branding • Engagement', centerCol, yPosition);
    yPosition += 22;
    ctx.fillText('Unlimited Outfit Changes • 25% Deposit Required', centerCol, yPosition);
    yPosition += 80;

    // Studio Headshots in highlighted box
    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(120, yPosition - 25, canvas.width - 240, 140);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, yPosition - 25, canvas.width - 240, 140);

    yPosition += 15;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 22px serif';
    ctx.fillText('STUDIO HEADSHOTS AVAILABLE', centerCol, yPosition);
    yPosition += 35;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 24px serif';
    ctx.fillText('$150/HR • 5 PROFESSIONAL PHOTOS', centerCol, yPosition);
    yPosition += 30;

    ctx.fillStyle = '#57534e';
    ctx.font = '16px serif';
    ctx.fillText('Studio Rental Separate (~$85/hr) • Book Your Own Studio', centerCol, yPosition);
    yPosition += 100;

    // Elopement Photography in elegant box
    ctx.fillStyle = '#f8f7f5';
    ctx.fillRect(120, yPosition - 30, canvas.width - 240, 220);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, yPosition - 30, canvas.width - 240, 220);

    yPosition += 20;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 36px serif';
    ctx.fillText('ELOPEMENT PHOTOGRAPHY', centerCol, yPosition);
    yPosition += 50;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 44px serif';
    ctx.fillText('$1,200 PACKAGE', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#1c1917';
    ctx.font = '20px serif';
    ctx.fillText('3-4 Hour Coverage • 100+ Photos • Courthouse/Small Venue Specialist', centerCol, yPosition);
    yPosition += 30;
    ctx.fillText('Intimate Celebration Documentation • Professional Editing', centerCol, yPosition);
    yPosition += 120;

    // Event Photography in clean box
    ctx.fillStyle = '#f8f7f5';
    ctx.fillRect(120, yPosition - 30, canvas.width - 240, 180);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, yPosition - 30, canvas.width - 240, 180);

    yPosition += 20;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 36px serif';
    ctx.fillText('EVENT PHOTOGRAPHY', centerCol, yPosition);
    yPosition += 50;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 44px serif';
    ctx.fillText('$350/HR', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#1c1917';
    ctx.font = '20px serif';
    ctx.fillText('Corporate Events • Professional Documentation • Same-Day Preview', centerCol, yPosition);
    yPosition += 120;

    // Videography Services Section
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 42px serif';
    ctx.fillText('VIDEOGRAPHY SERVICES', centerCol, yPosition);
    yPosition += 60;

    // Elopement Videography in highlighted box
    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(120, yPosition - 30, canvas.width - 240, 200);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.strokeRect(120, yPosition - 30, canvas.width - 240, 200);

    yPosition += 20;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 32px serif';
    ctx.fillText('ELOPEMENT VIDEOGRAPHY', centerCol, yPosition);
    yPosition += 50;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 38px serif';
    ctx.fillText('$1,800 PACKAGE', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#1c1917';
    ctx.font = '18px serif';
    ctx.fillText('3-4 Hour Coverage • 3-5 Min Highlight Reel • Courthouse Specialist', centerCol, yPosition);
    yPosition += 25;
    ctx.fillText('Professional Audio • Color Grading • Social Media Versions', centerCol, yPosition);
    yPosition += 100;

    // Individual Video Sessions
    ctx.fillStyle = '#f8f7f5';
    ctx.fillRect(120, yPosition - 30, canvas.width - 240, 180);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, yPosition - 30, canvas.width - 240, 180);

    yPosition += 20;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 32px serif';
    ctx.fillText('INDIVIDUAL VIDEO SESSIONS', centerCol, yPosition);
    yPosition += 50;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 38px serif';
    ctx.fillText('$400 • 2 HOURS', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#1c1917';
    ctx.font = '18px serif';
    ctx.fillText('Additional Hours: +$250 • 1-3 Min Final Video • Personal Branding', centerCol, yPosition);
    yPosition += 100;

    // Event Videography
    ctx.fillStyle = '#f8f7f5';
    ctx.fillRect(120, yPosition - 30, canvas.width - 240, 180);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, yPosition - 30, canvas.width - 240, 180);

    yPosition += 20;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 32px serif';
    ctx.fillText('EVENT VIDEOGRAPHY', centerCol, yPosition);
    yPosition += 50;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 38px serif';
    ctx.fillText('$600 BASE • $300/HR', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#1c1917';
    ctx.font = '18px serif';
    ctx.fillText('3-Hour Minimum • Professional Event Coverage • 3-5 Min Highlight Reel', centerCol, yPosition);
    yPosition += 120;

    // Travel Pricing in clean box
    ctx.fillStyle = '#f8f7f5';
    ctx.fillRect(120, yPosition - 30, canvas.width - 240, 180);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(120, yPosition - 30, canvas.width - 240, 180);

    yPosition += 20;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 36px serif';
    ctx.fillText('TRAVEL PRICING', centerCol, yPosition);
    yPosition += 50;

    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 44px serif';
    ctx.fillText('$1/MILE', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#1c1917';
    ctx.font = '20px serif';
    ctx.fillText('Both Ways Calculated from Orlando • Distance-Based Pricing', centerCol, yPosition);
    yPosition += 120;

    // Premium Enhancements Section
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 42px serif';
    ctx.fillText('PREMIUM ENHANCEMENTS', centerCol, yPosition);
    yPosition += 60;

    // Enhancement grid layout
    const enhancementBox = {
      width: (canvas.width - 300) / 2,
      height: 120
    };

    const enhancements = [
      { name: 'Additional Photos', price: '+$15 Each', desc: 'Extra Edited Photos' },
      { name: 'Additional Hour', price: '+$150', desc: 'Extended Session Time' },
      { name: 'Second Location', price: '+$100', desc: 'Diverse Backdrops' },
      { name: 'Rush Processing', price: '+$100', desc: '48-Hour Delivery' },
      { name: 'Drone Footage', price: '+$250', desc: 'Aerial Perspectives' },
      { name: 'Studio Coordination', price: '+$85/hr', desc: 'Studio Rental Help' }
    ];

    enhancements.forEach((addon, index) => {
      const col = index % 2;
      const row = Math.floor(index / 2);
      const x = 150 + col * (enhancementBox.width + 40);
      const y = yPosition + row * (enhancementBox.height + 20);

      // Enhancement box
      ctx.fillStyle = '#f8f7f5';
      ctx.fillRect(x, y - 20, enhancementBox.width, enhancementBox.height);
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y - 20, enhancementBox.width, enhancementBox.height);

      // Enhancement content
      ctx.fillStyle = '#1c1917';
      ctx.font = 'bold 20px serif';
      ctx.textAlign = 'center';
      ctx.fillText(addon.name, x + enhancementBox.width / 2, y + 10);

      ctx.fillStyle = '#d4af37';
      ctx.font = 'bold 24px serif';
      ctx.fillText(addon.price, x + enhancementBox.width / 2, y + 40);

      ctx.fillStyle = '#57534e';
      ctx.font = '16px serif';
      ctx.fillText(addon.desc, x + enhancementBox.width / 2, y + 65);
    });

    // Reset text alignment
    ctx.textAlign = 'center';
    yPosition += Math.ceil(enhancements.length / 2) * (enhancementBox.height + 20) + 80;

    // Booking Process in organized section
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 38px serif';
    ctx.fillText('BOOKING PROCESS', centerCol, yPosition);
    yPosition += 60;

    const bookingSteps = [
      '1. Contact & 25% Deposit (Non-Refundable)',
      '2. Session Planning & Location Coordination', 
      '3. Professional Photo/Video Session',
      '4. Final Delivery Within 3-5 Business Days'
    ];

    bookingSteps.forEach(step => {
      ctx.fillStyle = '#1c1917';
      ctx.font = '22px serif';
      ctx.fillText(step, centerCol, yPosition);
      yPosition += 45;
    });

    yPosition += 60;

    // Important Policies in clean layout
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 32px serif';
    ctx.fillText('IMPORTANT POLICIES', centerCol, yPosition);
    yPosition += 50;

    const policies = [
      'Session Types: Graduation • Prom • Fashion • Family • Branding • Engagement',
      'Families/Groups: 2-Hour Recommended',
      'No Deposit Refunds • All Sales Final',
      'Full Hour Billing Only • No Half Sessions',
      'Cancellations Require Rebooking with New Deposit'
    ];

    policies.forEach(policy => {
      ctx.fillStyle = '#57534e';
      ctx.font = '18px serif';
      ctx.fillText(policy, centerCol, yPosition);
      yPosition += 35;
    });

    // Professional Footer
    yPosition = canvas.height - 140;
    
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(0, yPosition - 15, canvas.width, 3);
    yPosition += 35;

    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 32px serif';
    ctx.fillText('READY TO BOOK?', centerCol, yPosition);
    yPosition += 45;

    ctx.fillStyle = '#57534e';
    ctx.font = '20px serif';
    ctx.fillText('Contact KB Visualz to Discuss Your Vision', centerCol, yPosition);
    yPosition += 25;
    ctx.fillText('Orlando, Florida • Professional Photography & Videography', centerCol, yPosition);

  }, []);

  const downloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement('a');
    link.download = 'KB-Visualz-Pricing-Guide-2025.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="editorial-title text-3xl text-stone-900 mb-4">
          Pricing Guide
        </h2>
        <p className="text-stone-600 mb-6">
          Download our comprehensive pricing guide for easy reference and sharing
        </p>
        <Button
          onClick={downloadImage}
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 mx-auto"
        >
          <Download className="w-5 h-5" />
          Download HD Pricing Guide
        </Button>
      </div>
      
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg max-w-md mx-auto">
        <canvas
          ref={canvasRef}
          className="w-full h-auto"
          style={{ maxHeight: '600px' }}
        />
      </div>
    </div>
  );
};

export default PricingGuideNew;