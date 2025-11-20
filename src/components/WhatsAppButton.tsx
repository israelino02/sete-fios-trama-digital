import * as React from "react";
import { Button, ButtonProps } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps extends Omit<ButtonProps, 'asChild' | 'onClick'> {
  message: string;
  children?: React.ReactNode;
  showIcon?: boolean;
  asChild?: boolean;
}

const WHATSAPP_NUMBER = "5581994616071";

export const WhatsAppButton = ({ 
  message, 
  children = "Falar no WhatsApp",
  showIcon = true,
  asChild = false,
  ...buttonProps 
}: WhatsAppButtonProps) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;

  if (asChild) {
    return (
      <Button asChild {...buttonProps}>
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          {showIcon && <MessageCircle className="w-4 h-4 mr-2" />}
          {children}
        </a>
      </Button>
    );
  }

  return (
    <Button 
      onClick={() => window.open(whatsappUrl, "_blank")}
      {...buttonProps}
    >
      {showIcon && <MessageCircle className="w-4 h-4 mr-2" />}
      {children}
    </Button>
  );
};

export { WHATSAPP_NUMBER };
