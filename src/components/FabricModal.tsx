import * as React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Fabric } from "@/data/fabrics";

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
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display font-bold text-foreground">
            {fabric.type}
          </DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-4"
            onClick={onClose}
            aria-label="Fechar"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          {/* Main Image */}
          <div className="aspect-video rounded-lg overflow-hidden border">
            <img
              src={fabric.mainImage}
              alt={fabric.type}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-foreground leading-relaxed">{fabric.description}</p>
          </div>

          {/* Available Fabrics List */}
          <div>
            <h3 className="font-semibold text-lg text-foreground mb-4">
              Tecidos disponíveis:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {allFabrics.map((f) => (
                <Button
                  key={f.type}
                  variant={f.type === fabric.type ? "default" : "outline"}
                  className="h-auto py-3 font-medium"
                  onClick={() => onSelectFabric(f)}
                >
                  {f.type}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
