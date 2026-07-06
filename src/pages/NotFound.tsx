import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <div className="font-display text-8xl font-bold text-gradient-brand">404</div>
        <h2 className="mt-4 font-display text-2xl font-semibold">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-primary"
        >
          <ArrowLeft className="h-4 w-4" /> Go home
        </Link>
      </div>
    </div>
  );
}
