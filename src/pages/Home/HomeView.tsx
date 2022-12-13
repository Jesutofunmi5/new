import { AcheiveMore, Create, Hero, Integrations, Process, Save, Testimonial } from "./layout";

const HomeView = () => {
  return (
    <div className="">
      <Hero />
      <AcheiveMore />
      <Integrations />
      <Save />
      <Process />
      <Testimonial />
      <Create />
      {/* <div className="bg-white flex-col height-200vh "></div> */}
    </div>
  );
};
export default HomeView;
