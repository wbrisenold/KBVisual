import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Admin() {
  return (
    <div className="min-h-screen bg-white p-8 page-content">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Admin Disabled on GitHub Pages</CardTitle>
            <CardDescription>
              GitHub Pages only hosts static websites, so database-backed photo management is not available here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-stone-700">
            <p>
              To update portfolio images on this static version, edit the image imports and arrays in the React source, then rebuild and redeploy.
            </p>
            <p>
              The original Express/database admin functionality was removed from the GitHub Pages export so the public site can build and load without backend API errors.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
