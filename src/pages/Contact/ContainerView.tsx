import type { FC } from "react";

interface Props {
  title: string;
}

const ContainerView: FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default ContainerView;
