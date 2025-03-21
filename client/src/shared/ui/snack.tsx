import Icon from "./icon";

type Props = {
  color: string;
  children: React.ReactNode;
};

export default function Snack({ color, children }: Props) {
  return (
    <div className={`fixed flex items-center gap-4 bottom-[20px] left-1/2 -translate-x-1/2 bg-${color} p-4 min-w-[300px] text-background rounded-lg`}>
      {children}
      <Icon name="close" size="base" />
    </div>
  );
}
