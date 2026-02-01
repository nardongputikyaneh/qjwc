import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, FileText, ShoppingCart, CheckCircle2, Phone } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="mb-4 text-2xl font-bold">Product Not Found</h1>
          <p className="mb-8 text-muted-foreground">
            The product you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/products">Back to Products</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const relatedProducts = products
    .filter((p) => p.categorySlug === product.categorySlug && p.id !== product.id)
    .slice(0, 4);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-muted/50">
        <div className="container py-3">
          <nav className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <Link
              to={`/products?category=${product.categorySlug}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            <span className="font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container py-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover"
              />
              {product.featured && (
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Featured
                </Badge>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-2">
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                {product.category}
              </span>
            </div>
            <h1 className="mb-4 font-heading text-3xl font-bold lg:text-4xl">
              {product.name}
            </h1>

            {/* Stock status */}
            <div className="mb-6 flex items-center gap-2">
              {product.inStock ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  <span className="font-medium text-success">In Stock</span>
                </>
              ) : (
                <>
                  <span className="h-5 w-5 rounded-full bg-muted-foreground" />
                  <span className="font-medium text-muted-foreground">Out of Stock</span>
                </>
              )}
            </div>

            <p className="mb-8 text-lg text-muted-foreground">{product.description}</p>

            {/* Specifications */}
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold">Technical Specifications</h2>
              <div className="rounded-lg border border-border bg-muted/50 overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 font-medium capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Use cases */}
            <div className="mb-8">
              <h2 className="mb-4 text-lg font-semibold">Common Applications</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Residential construction
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Commercial buildings
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Industrial facilities
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Renovation projects
                </li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="flex-1" disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to={`/contact?product=${product.id}`}>
                  <FileText className="mr-2 h-5 w-5" />
                  Request Quote
                </Link>
              </Button>
            </div>

            {/* Contact */}
            <div className="mt-6 rounded-lg bg-muted p-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">Need help choosing?</p>
                  <p className="text-sm text-muted-foreground">
                    Call us at (02) 8123-4567
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="mb-8 font-heading text-2xl font-bold">Related Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group rounded-xl border border-border bg-card p-4 shadow-card transition-all duration-300 hover:shadow-card-hover"
                >
                  <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{p.category}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ProductDetail;
