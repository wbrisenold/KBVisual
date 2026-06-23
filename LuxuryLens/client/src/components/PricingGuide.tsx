import { useEffect, useRef, useState } from "react";
import { Camera, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingGuide = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string>("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size for spacious professional design (1080x2800)
    canvas.width = 1080;
    canvas.height = 2800;

    // Professional editorial background with sophisticated gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#fdfcfb');
    gradient.addColorStop(0.2, '#fbfaf8');
    gradient.addColorStop(0.5, '#f9f8f6');
    gradient.addColorStop(0.8, '#f7f6f4');
    gradient.addColorStop(1, '#f5f4f2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add premium paper texture with golden highlights
    ctx.globalAlpha = 0.02;
    ctx.fillStyle = '#d4af37';
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillRect(x, y, 2, 1);
    }
    
    ctx.fillStyle = '#8b7355';
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillRect(x, y, 1, 1);
    }
    ctx.globalAlpha = 1;

    // Professional masthead with gradient overlay
    const headerGradient = ctx.createLinearGradient(0, 0, 0, 200);
    headerGradient.addColorStop(0, '#1c1917');
    headerGradient.addColorStop(0.8, '#2a2622');
    headerGradient.addColorStop(1, '#1c1917');
    ctx.fillStyle = headerGradient;
    ctx.fillRect(0, 0, canvas.width, 200);

    // Subtle border accent
    ctx.fillStyle = '#d4af37';
    ctx.fillRect(0, 195, canvas.width, 5);

    // KB Visualz with elegant serif styling
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 78px serif';
    ctx.textAlign = 'center';
    ctx.fillText('KB VISUALZ', canvas.width / 2, 110);

    // Premium subtitle with refined spacing
    ctx.fillStyle = '#f5f5f4';
    ctx.font = '16px sans-serif';
    ctx.letterSpacing = '8px';
    ctx.fillText('ORLANDO • PHOTOGRAPHY & VIDEOGRAPHY', canvas.width / 2, 145);

    // Elegant tagline
    ctx.fillStyle = '#b8b5b0';
    ctx.font = '12px serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('CAPTURING LIFE\'S PRECIOUS MOMENTS', canvas.width / 2, 170);

    // Sophisticated title treatment
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 64px serif';
    ctx.fillText('PRICING GUIDE', canvas.width / 2, 290);

    // Premium edition styling
    ctx.fillStyle = '#57534e';
    ctx.font = '22px serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('2025 EDITION', canvas.width / 2, 325);

    // Elegant decorative flourish with refined elements
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(180, 350);
    ctx.lineTo(900, 350);
    ctx.stroke();

    // Sophisticated decorative diamonds
    ctx.fillStyle = '#d4af37';
    ctx.save();
    ctx.translate(320, 350);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-6, -6, 12, 12);
    ctx.restore();
    
    ctx.save();
    ctx.translate(760, 350);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-6, -6, 12, 12);
    ctx.restore();

    let yPosition = 420;

    // Photography Services Section with magazine styling
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(80, yPosition - 10, canvas.width - 160, 4);
    yPosition += 30;
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('PHOTOGRAPHY SERVICES', canvas.width / 2, yPosition);
    yPosition += 30;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Professional photography with artistic vision and technical excellence', canvas.width / 2, yPosition);
    yPosition += 60;

    // Two-column layout for services
    const leftCol = 120;
    const rightCol = canvas.width - 120;

    // Portrait Sessions with luxury design
    // Elegant border line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftCol - 30, yPosition - 15);
    ctx.lineTo(leftCol - 10, yPosition - 15);
    ctx.stroke();
    
    // Decorative diamond - centered with text
    ctx.fillStyle = '#d4af37';
    ctx.save();
    ctx.translate(leftCol - 40, yPosition - 5);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 28px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Portrait Sessions', leftCol, yPosition + 5);
    ctx.textAlign = 'right';
    ctx.font = 'bold 32px serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('$250', rightCol, yPosition + 5);
    yPosition += 40;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Outdoor sessions • 15 photos included • Additional photos $15 each', leftCol, yPosition);
    yPosition += 25;
    ctx.fillText('Graduation/prom/fashion/family/branding/engagement sessions included', leftCol, yPosition);
    yPosition += 25;
    ctx.fillText('25% deposit required • No refunds • Full hour billing only', leftCol, yPosition);
    yPosition += 50;

    // Event Photography with premium design
    // Elegant border line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftCol - 30, yPosition - 15);
    ctx.lineTo(leftCol - 10, yPosition - 15);
    ctx.stroke();
    
    // Decorative diamond - centered with text
    ctx.fillStyle = '#d4af37';
    ctx.save();
    ctx.translate(leftCol - 40, yPosition - 5);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 28px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Event Photography', leftCol, yPosition + 5);
    ctx.textAlign = 'right';
    ctx.font = 'bold 32px serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('$350/hr', rightCol, yPosition + 5);
    yPosition += 40;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Corporate events • Professional documentation • Same-day preview', leftCol, yPosition);
    yPosition += 60;

    // Video Services Section with magazine styling
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(80, yPosition - 10, canvas.width - 160, 4);
    yPosition += 30;
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('VIDEOGRAPHY SERVICES', canvas.width / 2, yPosition);
    yPosition += 30;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Cinematic storytelling with professional-grade equipment and editing', canvas.width / 2, yPosition);
    yPosition += 60;

    // Individual Video Sessions with premium design
    // Elegant border line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftCol - 30, yPosition - 15);
    ctx.lineTo(leftCol - 10, yPosition - 15);
    ctx.stroke();
    
    // Decorative diamond - centered with text
    ctx.fillStyle = '#d4af37';
    ctx.save();
    ctx.translate(leftCol - 40, yPosition - 5);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 28px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Individual Sessions', leftCol, yPosition + 5);
    ctx.textAlign = 'right';
    ctx.font = 'bold 32px serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('$400', rightCol, yPosition + 5);
    yPosition += 40;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.textAlign = 'left';
    ctx.fillText('2 hours • Additional hours +$250 • 1-3 min final video', leftCol, yPosition);
    yPosition += 50;

    // Event Videography with luxury design
    // Elegant border line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftCol - 30, yPosition - 15);
    ctx.lineTo(leftCol - 10, yPosition - 15);
    ctx.stroke();
    
    // Decorative diamond - centered with text
    ctx.fillStyle = '#d4af37';
    ctx.save();
    ctx.translate(leftCol - 40, yPosition - 5);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 28px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Event Videography', leftCol, yPosition + 5);
    ctx.textAlign = 'right';
    ctx.font = 'bold 32px serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('$450/hr', rightCol, yPosition + 5);
    yPosition += 40;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.textAlign = 'left';
    ctx.fillText('$450/hr • Professional event coverage • 3-5 min highlight reel', leftCol, yPosition);
    yPosition += 60;

    // Travel Pricing Section with magazine styling
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(80, yPosition - 10, canvas.width - 160, 4);
    yPosition += 30;
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('TRAVEL & LOGISTICS', canvas.width / 2, yPosition);
    yPosition += 30;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Comprehensive coverage throughout Central Florida and beyond', canvas.width / 2, yPosition);
    yPosition += 60;

    // Travel Pricing with luxury design
    // Elegant border line
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(leftCol - 30, yPosition - 15);
    ctx.lineTo(leftCol - 10, yPosition - 15);
    ctx.stroke();
    
    // Decorative diamond
    ctx.fillStyle = '#d4af37';
    ctx.save();
    ctx.translate(leftCol - 40, yPosition + 5);
    ctx.rotate(Math.PI / 4);
    ctx.fillRect(-4, -4, 8, 8);
    ctx.restore();
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 28px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Outside Orlando Area', leftCol, yPosition + 5);
    ctx.textAlign = 'right';
    ctx.font = 'bold 32px serif';
    ctx.fillStyle = '#d4af37';
    ctx.fillText('$1/mile', rightCol, yPosition + 5);
    yPosition += 40;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.textAlign = 'left';
    ctx.fillText('Both ways calculated from Orlando • Distance-based pricing', leftCol, yPosition);
    yPosition += 60;

    // Enhancement Add-ons Section with magazine styling
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(80, yPosition - 10, canvas.width - 160, 4);
    yPosition += 30;
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 36px serif';
    ctx.textAlign = 'center';
    ctx.fillText('PREMIUM ENHANCEMENTS', canvas.width / 2, yPosition);
    yPosition += 30;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('Elevate your session with professional add-on services', canvas.width / 2, yPosition);
    yPosition += 50;

    const addons = [
      { name: 'Additional Photos', price: '+$15 each', desc: 'Extra edited photos (non-Photoshop/FX)' },
      { name: 'Studio Headshots', price: '$150/hr', desc: '5 photos included (studio separate ~$85/hr)' },
      { name: 'Additional Hour', price: '+$150', desc: 'Extended session time' },
      { name: 'Second Location', price: '+$100', desc: 'Diverse backdrops' },
      { name: 'Rush Processing', price: '+$100', desc: '48-hour delivery guarantee' },
      { name: 'Raw Footage', price: '$150/hr', desc: 'Unedited video material' },
      { name: 'Drone Footage', price: '+$250', desc: 'Aerial perspectives' }
    ];

    addons.forEach(addon => {
      // Elegant border line
      ctx.strokeStyle = '#d4af37';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(leftCol - 30, yPosition - 12);
      ctx.lineTo(leftCol - 10, yPosition - 12);
      ctx.stroke();
      
      // Decorative diamond - centered with text
      ctx.fillStyle = '#d4af37';
      ctx.save();
      ctx.translate(leftCol - 40, yPosition - 7);
      ctx.rotate(Math.PI / 4);
      ctx.fillRect(-3, -3, 6, 6);
      ctx.restore();
      
      ctx.fillStyle = '#1c1917';
      ctx.font = 'bold 22px serif';
      ctx.textAlign = 'left';
      ctx.fillText(addon.name, leftCol, yPosition + 3);
      ctx.textAlign = 'right';
      ctx.font = 'bold 26px serif';
      ctx.fillStyle = '#d4af37';
      ctx.fillText(addon.price, rightCol, yPosition + 3);
      yPosition += 28;
      
      ctx.fillStyle = '#57534e';
      ctx.font = '16px serif';
      ctx.textAlign = 'left';
      ctx.fillText(addon.desc, leftCol, yPosition);
      yPosition += 30;
    });

    // Booking Timeline & Policies Section
    yPosition += 40;
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(80, yPosition - 10, canvas.width - 160, 3);
    yPosition += 30;
    
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 32px serif';
    ctx.textAlign = 'center';
    ctx.fillText('BOOKING PROCESS', canvas.width / 2, yPosition);
    yPosition += 40;

    const timeline = [
      '1. Contact & 25% Deposit (Non-refundable)',
      '2. Session Planning & Location Coordination', 
      '3. Professional Photo Session (Full hour billing)',
      '4. Photo Selection & Final Delivery (3-5 days)'
    ];

    timeline.forEach(step => {
      ctx.fillStyle = '#57534e';
      ctx.font = '18px serif';
      ctx.textAlign = 'center';
      ctx.fillText(step, canvas.width / 2, yPosition);
      yPosition += 28;
    });
    
    yPosition += 20;
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 24px serif';
    ctx.textAlign = 'center';
    ctx.fillText('IMPORTANT POLICIES', canvas.width / 2, yPosition);
    yPosition += 30;
    
    ctx.fillStyle = '#57534e';
    ctx.font = '16px serif';
    ctx.fillText('Session Types: Graduation • Prom • Fashion • Family • Branding • Engagement', canvas.width / 2, yPosition);
    yPosition += 25;
    ctx.fillText('Families/Groups: 2-hour recommended • No refunds • Full hour billing', canvas.width / 2, yPosition);
    yPosition += 25;
    ctx.fillText('Studio Headshots: $150/hr (5 photos) + studio rental ~$85/hr', canvas.width / 2, yPosition);
    
    // Editorial Footer
    yPosition = canvas.height - 180;
    
    // Editorial rule
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(120, yPosition);
    ctx.lineTo(960, yPosition);
    ctx.stroke();
    yPosition += 40;

    // Call to action in editorial style
    ctx.fillStyle = '#1c1917';
    ctx.font = 'bold 32px serif';
    ctx.textAlign = 'center';
    ctx.fillText('BOOK TODAY', canvas.width / 2, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#57534e';
    ctx.font = '20px serif';
    ctx.fillText('Custom packages available for destination work', canvas.width / 2, yPosition);
    yPosition += 50;

    // Social media handle in editorial style
    ctx.fillStyle = '#d4af37';
    ctx.font = 'bold 28px serif';
    ctx.fillText('@KbVisualz_', canvas.width / 2, yPosition);
    yPosition += 40;

    // Location tagline
    ctx.fillStyle = '#57534e';
    ctx.font = '18px serif';
    ctx.fillText('ORLANDO • FLORIDA', canvas.width / 2, yPosition);
    
    // Convert canvas to data URL for mobile saving
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    setImageDataUrl(dataUrl);
  }, []);

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Camera className="w-6 h-6 text-yellow-600" />
          <h3 className="text-xl font-semibold text-stone-900">Pricing Guide</h3>
        </div>
        
        <p className="text-stone-600 mb-6 text-sm">
          Professional pricing guide for easy reference and sharing
        </p>
        
        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 inline-block">
          {imageDataUrl ? (
            <img 
              src={imageDataUrl}
              alt="KB Visualz Pricing Guide"
              className="max-w-full h-auto rounded border border-gray-100"
              style={{ 
                width: '270px', 
                height: '480px',
                userSelect: 'none',
                WebkitUserSelect: 'none',
                WebkitTouchCallout: 'default'
              }}
              draggable={false}
            />
          ) : (
            <canvas 
              ref={canvasRef}
              className="max-w-full h-auto rounded border border-gray-100"
              style={{ 
                width: '270px', 
                height: '480px'
              }}
            />
          )}
        </div>
        
        <div className="flex flex-col items-center gap-2 mt-4">
          <p className="text-xs text-stone-500">
            Touch and hold image to save • Right-click to save on desktop
          </p>
          <Button
            onClick={() => {
              if (imageDataUrl) {
                const link = document.createElement('a');
                link.download = 'kb-visualz-pricing-guide.png';
                link.href = imageDataUrl;
                link.click();
              }
            }}
            variant="outline"
            size="sm"
            className="text-stone-700 border-stone-300 hover:bg-stone-50"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Guide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingGuide;