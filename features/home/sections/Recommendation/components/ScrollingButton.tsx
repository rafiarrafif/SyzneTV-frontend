import { Button } from "@/shared/libs/shadcn/ui/button";
import { ButtonGroup } from "@/shared/libs/shadcn/ui/button-group";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ScrollingButton = ({
  scrollLeft,
  scrollRight,
}: {
  scrollLeft: () => void;
  scrollRight: () => void;
}) => {
  return (
    <div>
      <ButtonGroup>
        <Button variant="outline" onClick={scrollLeft}>
          <ArrowLeft />
        </Button>
        <Button variant="outline" onClick={scrollRight}>
          <ArrowRight />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ScrollingButton;
