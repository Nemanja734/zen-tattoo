import Button from "@/ui/button";
import Icon from "@/ui/icon";

interface Props {
  children?: React.ReactNode;
  reset?: boolean;
  onClick: () => void;
}

export default function FilterButton({ children, reset = false, onClick }: Props) {
  return (
    <>
      {!reset ? (
        <Button level="stroke-lg" onClick={onClick}>
          {children} &ensp;
          <Icon name="chevDown" size="xs" />
        </Button>
      ) : (
        <Button level="black-lg" onClick={onClick}>Filter Zurücksetzen</Button>
      )}
    </>
  );
}
