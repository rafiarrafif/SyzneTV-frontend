import { Button } from "@/shared/libs/shadcn/ui/button";
import { ButtonGroup } from "@/shared/libs/shadcn/ui/button-group";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const ScrollingButton = () => {
  return (
    <div>
      <ButtonGroup>
        <Button variant="outline">
          <ArrowLeft />
        </Button>
        <Button variant="outline">
          <ArrowRight />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ScrollingButton;
