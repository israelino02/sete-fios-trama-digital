import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";

// Lazy load pages for better performance
const Index = React.lazy(() => import("./pages/Index"));
const Catalogo = React.lazy(() => import("./pages/Catalogo"));
const CategoryDetail = React.lazy(() => import("./pages/CategoryDetail"));
const FabricDetail = React.lazy(() => import("./pages/FabricDetail"));
const EstampadoGenderSelect = React.lazy(() => import("./pages/EstampadoGenderSelect"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const OutrosProdutos = React.lazy(() => import("./pages/OutrosProdutos"));
const Sobre = React.lazy(() => import("./pages/Sobre"));
const Contato = React.lazy(() => import("./pages/Contato"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

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
              <Route path="/catalogo/:categorySlug/:fabricType/selecionar-genero" element={<EstampadoGenderSelect />} />
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
