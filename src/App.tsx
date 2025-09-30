import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Index from "./pages/Index";
import Catalogo from "./pages/Catalogo";
import CategoryDetail from "./pages/CategoryDetail";
import FabricDetail from "./pages/FabricDetail";
import EstampadoGenderSelect from "./pages/EstampadoGenderSelect";
import ProductDetail from "./pages/ProductDetail";
import OutrosProdutos from "./pages/OutrosProdutos";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
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
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
