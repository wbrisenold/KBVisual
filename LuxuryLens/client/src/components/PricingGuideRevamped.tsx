import { useEffect, useRef } from "react";
import { Camera, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingGuideRevamped = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size for 9x16 mobile format
    canvas.width = 1080;
    canvas.height = 1920;

    // Sophisticated cream background with subtle gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#fefdfb');
    gradient.addColorStop(0.4, '#faf9f7');
    gradient.addColorStop(0.8, '#f7f6f4');
    gradient.addColorStop(1, '#f5f4f2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Add subtle paper texture
    ctx.globalAlpha = 0.02;
    for (let i = 0; i < 150; i++) {
      ctx.fillStyle = '#8b7355';
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 1, 1);
    }
    ctx.globalAlpha = 1;

    let yPosition = 140;
    const centerCol = canvas.width / 2;
    const leftMargin = 120;

    // Elegant header matching website typography
    ctx.fillStyle = '#1a1612';
    ctx.font = '700 56px "Playfair Display", serif';
    ctx.textAlign = 'center';
    ctx.fillText('KB VISUALZ', centerCol, yPosition);
    yPosition += 40;

    // Decorative flourish with website colors
    ctx.fillStyle = '#9c8123';
    ctx.fillRect(centerCol - 80, yPosition, 160, 3);
    yPosition += 15;
    ctx.fillRect(centerCol - 40, yPosition, 80, 1);
    yPosition += 8;
    ctx.fillRect(centerCol - 20, yPosition, 40, 1);
    yPosition += 50;

    ctx.fillStyle = '#563a17';
    ctx.font = '400 18px "Cormorant Garamond", serif';
    ctx.letterSpacing = '3px';
    ctx.fillText('ELOPEMENT & PORTRAIT SPECIALIST', centerCol, yPosition);
    yPosition += 30;
    
    ctx.font = '300 16px "Montserrat", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('ORLANDO, FLORIDA', centerCol, yPosition);
    yPosition += 25;
    
    ctx.font = '300 14px "Montserrat", sans-serif';
    ctx.fillStyle = '#9c8123';
    ctx.fillText('2025 PRICING COLLECTION', centerCol, yPosition);

    yPosition = 280;

    // Featured Elopement Package with luxury styling
    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(leftMargin - 40, yPosition - 30, canvas.width - 160, 170);
    
    // Elegant border with website colors
    ctx.strokeStyle = '#9c8123';
    ctx.lineWidth = 2;
    ctx.strokeRect(leftMargin - 40, yPosition - 30, canvas.width - 160, 170);
    
    // Corner decorations
    const cornerSize = 20;
    ctx.fillStyle = '#9c8123';
    ctx.fillRect(leftMargin - 40, yPosition - 30, cornerSize, 2);
    ctx.fillRect(leftMargin - 40, yPosition - 30, 2, cornerSize);
    ctx.fillRect(canvas.width - leftMargin - cornerSize, yPosition - 30, cornerSize, 2);
    ctx.fillRect(canvas.width - leftMargin, yPosition - 30, 2, cornerSize);

    yPosition += 5;
    ctx.fillStyle = '#563a17';
    ctx.font = '300 14px "Montserrat", sans-serif';
    ctx.letterSpacing = '4px';
    ctx.fillText('SIGNATURE COLLECTION', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#1a1612';
    ctx.font = '600 32px "Playfair Display", serif';
    ctx.fillText('ELOPEMENT PHOTOGRAPHY', centerCol, yPosition);
    yPosition += 45;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 28px "Cormorant Garamond", serif';
    ctx.fillText('$800', centerCol, yPosition);
    yPosition += 35;

    ctx.fillStyle = '#563a17';
    ctx.font = '300 14px "Montserrat", sans-serif';
    ctx.fillText('3-4 Hour Coverage • Same-Day Preview • Courthouse Specialist', centerCol, yPosition);
    yPosition += 18;
    ctx.fillText('Unlimited Outfit Changes • Professional Editing', centerCol, yPosition);
    yPosition += 40;

    // Photography Services Section with website styling
    ctx.fillStyle = '#1a1612';
    ctx.font = '600 24px "Playfair Display", serif';
    ctx.fillText('PORTRAIT SESSIONS', centerCol, yPosition);
    yPosition += 35;

    // Portrait Sessions with refined styling
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(leftMargin, yPosition - 25, canvas.width - 240, 140);
    ctx.strokeStyle = '#9c8123';
    ctx.lineWidth = 1;
    ctx.strokeRect(leftMargin, yPosition - 25, canvas.width - 240, 140);

    yPosition += 10;
    ctx.fillStyle = '#1a1612';
    ctx.font = '500 20px "Cormorant Garamond", serif';
    ctx.fillText('STARTING AT $250', centerCol, yPosition);
    yPosition += 30;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 16px "Montserrat", sans-serif';
    ctx.fillText('First Hour • Additional Hours: $150', centerCol, yPosition);
    yPosition += 20;

    ctx.fillStyle = '#563a17';
    ctx.font = '300 13px "Montserrat", sans-serif';
    ctx.fillText('Graduation • Prom • Fashion • Family • Branding • Engagement', centerCol, yPosition);
    yPosition += 16;
    ctx.fillText('15 Photos Included • Unlimited Outfit Changes', centerCol, yPosition);
    yPosition += 45;

    // Event Photography with refined styling
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(leftMargin, yPosition - 20, canvas.width - 240, 100);
    ctx.strokeStyle = '#9c8123';
    ctx.lineWidth = 1;
    ctx.strokeRect(leftMargin, yPosition - 20, canvas.width - 240, 100);

    yPosition += 10;
    ctx.fillStyle = '#1a1612';
    ctx.font = '500 18px "Cormorant Garamond", serif';
    ctx.fillText('EVENT PHOTOGRAPHY', centerCol, yPosition);
    yPosition += 25;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 20px "Montserrat", sans-serif';
    ctx.fillText('$350/HR', centerCol, yPosition);
    yPosition += 20;

    ctx.fillStyle = '#563a17';
    ctx.font = '300 13px "Montserrat", sans-serif';
    ctx.fillText('Corporate Events • Documentation • Same-Day Preview', centerCol, yPosition);
    yPosition += 40;

    // Videography Services Section with website styling
    ctx.fillStyle = '#1a1612';
    ctx.font = '600 24px "Playfair Display", serif';
    ctx.fillText('VIDEOGRAPHY SERVICES', centerCol, yPosition);
    yPosition += 35;

    // Elopement Videography with luxury styling
    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(leftMargin - 20, yPosition - 25, canvas.width - 200, 130);
    ctx.strokeStyle = '#9c8123';
    ctx.lineWidth = 2;
    ctx.strokeRect(leftMargin - 20, yPosition - 25, canvas.width - 200, 130);

    yPosition += 10;
    ctx.fillStyle = '#1a1612';
    ctx.font = '500 20px "Cormorant Garamond", serif';
    ctx.fillText('ELOPEMENT VIDEOGRAPHY', centerCol, yPosition);
    yPosition += 30;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 24px "Montserrat", sans-serif';
    ctx.fillText('$1,200 PACKAGE', centerCol, yPosition);
    yPosition += 25;

    ctx.fillStyle = '#563a17';
    ctx.font = '300 12px "Montserrat", sans-serif';
    ctx.fillText('3-4 Hour Coverage • 3-5 Min Highlight Reel • Courthouse Specialist', centerCol, yPosition);
    yPosition += 15;
    ctx.fillText('Audio Recording • Color Grading • Professional Editing', centerCol, yPosition);
    yPosition += 50;

    // Individual Video Sessions with refined styling
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(leftMargin, yPosition - 20, canvas.width - 240, 75);
    ctx.strokeStyle = '#9c8123';
    ctx.lineWidth = 1;
    ctx.strokeRect(leftMargin, yPosition - 20, canvas.width - 240, 75);

    yPosition += 10;
    ctx.fillStyle = '#1a1612';
    ctx.font = '500 16px "Cormorant Garamond", serif';
    ctx.fillText('INDIVIDUAL VIDEO SESSIONS', centerCol, yPosition);
    yPosition += 22;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 18px "Montserrat", sans-serif';
    ctx.fillText('$400 • 2 HOURS', centerCol, yPosition);
    yPosition += 18;

    ctx.fillStyle = '#563a17';
    ctx.font = '300 12px "Montserrat", sans-serif';
    ctx.fillText('Additional Hours: +$250 • 1-3 Min Final Video', centerCol, yPosition);
    yPosition += 35;

    // Event Videography with refined styling
    ctx.fillStyle = '#fafafa';
    ctx.fillRect(leftMargin, yPosition - 20, canvas.width - 240, 75);
    ctx.strokeStyle = '#9c8123';
    ctx.lineWidth = 1;
    ctx.strokeRect(leftMargin, yPosition - 20, canvas.width - 240, 75);

    yPosition += 10;
    ctx.fillStyle = '#1a1612';
    ctx.font = '500 16px "Cormorant Garamond", serif';
    ctx.fillText('EVENT VIDEOGRAPHY', centerCol, yPosition);
    yPosition += 22;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 18px "Montserrat", sans-serif';
    ctx.fillText('$600 BASE • $300/HR', centerCol, yPosition);
    yPosition += 18;

    ctx.fillStyle = '#563a17';
    ctx.font = '300 12px "Montserrat", sans-serif';
    ctx.fillText('3-Hour Minimum • Event Coverage • Highlight Reel', centerCol, yPosition);
    yPosition += 35;

    // Travel & Studio with luxury styling
    ctx.fillStyle = '#f8f6f0';
    ctx.fillRect(leftMargin - 20, yPosition - 25, canvas.width - 200, 110);
    ctx.strokeStyle = '#9c8123';
    ctx.lineWidth = 2;
    ctx.strokeRect(leftMargin - 20, yPosition - 25, canvas.width - 200, 110);

    yPosition += 10;
    ctx.fillStyle = '#1a1612';
    ctx.font = '500 18px "Cormorant Garamond", serif';
    ctx.fillText('TRAVEL & STUDIO OPTIONS', centerCol, yPosition);
    yPosition += 25;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 16px "Montserrat", sans-serif';
    ctx.fillText('TRAVEL: $1/MILE BOTH WAYS', centerCol, yPosition);
    yPosition += 20;

    ctx.fillStyle = '#9c8123';
    ctx.font = '400 16px "Montserrat", sans-serif';
    ctx.fillText('STUDIO HEADSHOTS: $150/HR • 5 PHOTOS', centerCol, yPosition);
    yPosition += 20;

    ctx.fillStyle = '#563a17';
    ctx.font = '300 12px "Montserrat", sans-serif';
    ctx.fillText('From Orlando • Studio Rental Separate (~$85/hr)', centerCol, yPosition);
    yPosition += 35;

    // Elegant Booking & Policies Section
    ctx.fillStyle = '#1a1612';
    ctx.font = '500 20px "Cormorant Garamond", serif';
    ctx.fillText('BOOKING & POLICIES', centerCol, yPosition);
    yPosition += 40;

    const compactInfo = [
      '• 25% Deposit Required (Non-Refundable)',
      '• No Deposit Refunds • All Sales Final',
      '• Full Hour Billing Only • No Half Sessions',
      '• Cancellation Requires Rebooking with New Deposit'
    ];

    compactInfo.forEach(info => {
      ctx.fillStyle = '#563a17';
      ctx.font = '300 14px "Montserrat", sans-serif';
      ctx.fillText(info, centerCol, yPosition);
      yPosition += 20;
    });

    yPosition += 25;

    // Sophisticated Footer with website styling
    ctx.fillStyle = '#9c8123';
    ctx.fillRect(centerCol - 100, yPosition - 10, 200, 2);
    yPosition += 10;
    ctx.fillRect(centerCol - 60, yPosition - 10, 120, 1);
    yPosition += 10;
    ctx.fillRect(centerCol - 30, yPosition - 10, 60, 1);
    yPosition += 40;

    ctx.fillStyle = '#1a1612';
    ctx.font = '600 28px "Playfair Display", serif';
    ctx.fillText('READY TO BOOK?', centerCol, yPosition);
    yPosition += 40;

    ctx.fillStyle = '#563a17';
    ctx.font = '400 16px "Cormorant Garamond", serif';
    ctx.fillText('Contact KB Visualz to Discuss Your Vision', centerCol, yPosition);
    yPosition += 25;
    
    ctx.font = '300 14px "Montserrat", sans-serif';
    ctx.letterSpacing = '2px';
    ctx.fillText('ORLANDO, FLORIDA • PHOTOGRAPHY & VIDEOGRAPHY', centerCol, yPosition);

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
      </div>

      <div className="mb-8 max-w-4xl mx-auto">
        <canvas 
          ref={canvasRef} 
          className="w-full h-auto border border-gray-200 rounded-lg shadow-lg"
          style={{ maxHeight: '800px' }}
        />
      </div>

      <Button
        onClick={downloadImage}
        size="lg"
        className="gold-gradient text-stone-900 font-semibold px-8 py-4"
      >
        <Download className="w-5 h-5 mr-2" />
        Download Pricing Guide
      </Button>
    </div>
  );
};

export default PricingGuideRevamped;