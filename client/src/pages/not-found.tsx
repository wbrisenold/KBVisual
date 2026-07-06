import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-yellow-700" />
            <h1 className="text-2xl font-bold text-gray-900">Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            This page is no longer available. Head back home or open the
            portrait portfolio.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="site-button site-button--dark w-full sm:w-auto">
              Home
            </Link>
            <Link href="/portfolio" className="site-button site-button--outline w-full sm:w-auto">
              Portfolio
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
