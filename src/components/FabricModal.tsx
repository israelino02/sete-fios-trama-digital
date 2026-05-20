import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Fabric } from "@/data/fabrics";
import { getFabricMainImage } from "@/data/fabrics";
import { resolveUpload } from "@/lib/uploadAssets";

interface FabricModalProps {
  fabric: Fabric | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectFabric: (fabric: Fabric) => void;
  allFabrics: Fabric[];
}

export const FabricModal = ({ 
  fabric, 
  isOpen, 
  onClose, 
  onSelectFabric,
  allFabrics 
}: FabricModalProps) => {
  if (!fabric) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full max-h-screen h-screen w-screen overflow-y-auto p-0">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          <DialogHeader className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 z-10"
              onClick={onClose}
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </Button>
            <DialogTitle className="text-3xl font-display font-bold text-foreground pr-12">
              {fabric.type}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-8 mt-8">
            {/* Main Image */}
            <div className="aspect-video rounded-lg overflow-hidden border shadow-lg">
              <img
                src={resolveUpload(getFabricMainImage(fabric))}
                alt={fabric.type}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <div className="bg-muted/50 p-6 rounded-lg">
              <p className="text-foreground text-lg leading-relaxed">{fabric.description}</p>
            </div>

            {/* Available Fabrics List */}
            <div>
              <h3 className="font-semibold text-xl text-foreground mb-6">
                Tecidos disponíveis:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {allFabrics.map((f) => (
                  <Button
                    key={f.type}
                    variant={f.type === fabric.type ? "default" : "outline"}
                    className="h-auto py-4 px-6 font-medium text-base"
                    onClick={() => onSelectFabric(f)}
                  >
                    {f.type}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
