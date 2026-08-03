import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { lazyWithRetry } from "@/lib/lazyWithRetry";

// Lazy load pages for better performance
const Index = lazyWithRetry(() => import("./pages/Index"));
const Catalogo = lazyWithRetry(() => import("./pages/Catalogo"));
const CategoryDetail = lazyWithRetry(() => import("./pages/CategoryDetail"));
const FabricDetail = lazyWithRetry(() => import("./pages/FabricDetail"));

const ProductDetail = lazyWithRetry(() => import("./pages/ProductDetail"));
const OutrosProdutos = lazyWithRetry(() => import("./pages/OutrosProdutos"));
const Sobre = lazyWithRetry(() => import("./pages/Sobre"));
const Contato = lazyWithRetry(() => import("./pages/Contato"));
const NotFound = lazyWithRetry(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <React.Suspense fallback={<div className="flex items-center justify-center min-h-screen">Carregando...</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/catalogo/:categorySlug" element={<CategoryDetail />} />
              <Route path="/catalogo/:categorySlug/:fabricType/selecionar-genero" element={<CategoryDetail />} />
              <Route path="/catalogo/:categorySlug/:fabricType/:gender" element={<FabricDetail />} />
              <Route path="/catalogo/:categorySlug/:fabricType" element={<FabricDetail />} />
              <Route path="/produto/:productId" element={<ProductDetail />} />
              <Route path="/outros-produtos" element={<OutrosProdutos />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </React.Suspense>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
