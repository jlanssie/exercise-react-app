import {FC} from "react";

interface Props {
	value: number | undefined;
	onClick(): void;
}

export const Square: FC<Props> = ({
	value,
	onClick
}: Props) => {
	return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;