import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";
import { FileText } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group rounded-xl border border-border bg-card shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 overflow-hidden">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.featured && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
            Featured
          </Badge>
        )}
        {!product.inStock && (
          <Badge variant="secondary" className="absolute top-3 right-3">
            Out of Stock
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium uppercase tracking-wider text-primary">
            {product.category}
          </span>
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold line-clamp-2">
          <Link to={`/products/${product.id}`} className="hover:text-primary transition-colors">
            {product.name}
          </Link>
        </h3>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        {/* Specs preview */}
        <div className="mb-4 flex flex-wrap gap-2">
          {product.specs.size && (
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs">
              {product.specs.size}
            </span>
          )}
          {product.specs.material && (
            <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs">
              {product.specs.material}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button asChild className="flex-1" size="sm">
            <Link to={`/products/${product.id}`}>View Details</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link to={`/contact?product=${product.id}`}>
              <FileText className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
