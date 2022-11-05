import { FC } from "react";

interface Props {
  title: string;
}

const HomeView: FC<Props> = ({ title }) => {
  return <div className="text-lg">{title}</div>;
};
export default HomeView;
