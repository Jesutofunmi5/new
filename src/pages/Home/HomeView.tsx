import { Link } from "react-router-dom";
import { Button } from "components";

import { ZUimages } from "assets";
import { SIGNUP } from "routes/CONSTANTS";

const HomeView = () => {
  return (
    <div className="text-lg ">
      {/* Hero Section */}
      <div
        className="relative top-0 w-full h-screen flex items-center justify-between bg-black text-white overflow-hidden"
        style={{ backgroundImage: `url('${ZUimages.heroBackground}')` }}
      >
        <div className="absolute inset-0 bg-[#1C1C1E] opacity-10" />

        <div className="relative flex-col mt-100 ml-35  text-white padding-20 ">
          <br />
          <br />
          <h1 className="text-justify my-4 text-4xl ml-20 md:text-[60px] text-white">
            Connect Simply, <br /> Engage
            <span className="font-bold text-[#50C878]"> Powerfully.</span>
          </h1>

          <h5 className="text-justify my-4 ml-20 ">
            The end-to-end video engagement platform <br />
            enabling organizations to create meetings <br />
            and webinars at scale.
          </h5>
          <Link to={SIGNUP}>
            <div className="w-100 h-auto   p-2 ml-20 bg-[#50C878] text-center justify-center cursor:pointer">
              GET STARTED!
            </div>
          </Link>
        </div>

        <div className="mt-60">
          <img src={ZUimages.youngManWithVector} className="" />
        </div>

        {/* Hero contents */}
      </div>
      <div className="bg-white flex-col height-200vh ">
        <br />
        <br />
        <div className="flex flex-row items-justify space-between items-center">
          <div className="relative mr-48 ">
            <img src={ZUimages.dots} className=""></img>
          </div>
          <div className="relative flex-col mr-48">
            <br />
            <h4 className="">
              Achieve more with <br />
              the Zumaridi Video <br />
              Conferencing
            </h4>
          </div>
          <div className="relative text-justify  mr-24 ">
            <p>
              Amet minim mollit non deserunt <br />
              ullamco est sit aliqua dolor do amet <br /> sint. Velit officia consequat duis <br />
              enim velit mollit. Exercitation veniam <br /> consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <br />
        <br />
        <div className="flex flex-row space-around items-center ">
          <div className="flex-col ml-24  w-[700px] item-center text-left">
            <img src={ZUimages.yellowElipse} className="ml-6 "></img>
            <img src={ZUimages.zuAthletics} className="ml-6  z-10 -my-10"></img>
            <br />
            <br />
            <br />
            <h6>
              <strong>Manage Smartly</strong>
            </h6>
            <br />
            <p>
              Amet minim mollit non
              <br />
              ullamco est sit aliqua
            </p>
          </div>
          <div className="flex-col ml-72 mx-6 w-[750px] item-center">
            <img src={ZUimages.greenElipse} className="ml-6 "></img>
            <img src={ZUimages.zuArchery} className="ml-6 z-10 -my-10"></img>
            <br />
            <br />
            <br />
            <h6>
              <strong>Communicate Fast</strong>
            </h6>
            <br />
            <p>
              Amet minim mollit non
              <br />
              ullamco est sit aliqua
            </p>
          </div>
          <div className="flex-col  ml-72  w-[700px] mx-6 item-center ">
            <img src={ZUimages.purpleElipse} className=" ml-6 "></img>
            <img src={ZUimages.zuMoneyCoins} className="mx-6 -my-10 z-10"></img>
            <br />
            <br />
            <br />
            <h6>
              <strong>Save Costs</strong>
            </h6>
            <br />
            <p>
              Amet minim mollit non
              <br />
              ullamco est sit aliqua
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="bg-[#C7E8D2] flex-col w-full h-100vh text-center items-center h-">
          <br />
          <br />
          <h3 className="">
            <strong>Software Integrations</strong>
          </h3>
          <br />
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua <br /> dolor do amet sint. Velit
            officia consequat duis enim
            <br />
            <br />
          </p>
          <h6 className="underline underline-offset-8 text-[#07AA3D] my-16">Explore All Apps</h6>

          <img src={ZUimages.socialIcons} className="ml-[300px] "></img>
        </div>
        <div className="bg-[#F8F9FC] flex flex-row items-center justify-between height-200vh ">
          <div className="ml-48 mb-24  -mt-24">
            <h3>
              Save your extra <br />
            </h3>
            <h3>
              by using <br />
            </h3>
            <h3 className="text-[#07AA3D]">
              Zumaridi.
              <br />
            </h3>
          </div>
          <div className="absolute ml-24">
            <img src={ZUimages.elipseAndLine} className="h-96 -z-[20] ml-[450px]"></img>
          </div>
          <div className=" mt-24 mb-24 z-[0]">
            <div className="flex flex-col mb-8 mt-18 -z-[10]">
              <img src={ZUimages.dots} className="ml-36 mr-18 mt-6  -z-[20] "></img>
            </div>
            <div className="flex flex-col items-center bg-white h-[450px] -ml-8 -mt-36 -mr-6 mb-12 m w-72 z-[100] ">
              <div className="flex flex-col items-center justify-around my-6 rounded-lg  w-60">
                <h4>$271,284</h4>
                <p>Annual Revenue</p>
              </div>
              <div className="flex flex-col items-center justify-around my-6 rounded-lg  w-60">
                <h4>$4,249</h4>
                <p>Savings Using Other Services</p>
              </div>
              <div className="flex flex-col items-center justify-around text-white bg-[#22CC74] my-6 rounded-lg  p-6 w-60">
                <h4>$21,947</h4>
                <p>Savings Using Zumaridi</p>
              </div>
            </div>

            <br />
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="flex flex-col items-center ">
          <div className=" mt-36 items-center text-center">
            <h6 className="text-[#07AA3D] text-center">Our Process</h6>

            <h3 className="font-bold my-6">Digital system for your company</h3>
            <br />
            <br />
          </div>
          <div className="flex flex-row space-between mb-12 my-12">
            <div className="flex flex-col  mx-6 h-96 w-96  items-center ">
              <div className="rounded-full bg-[#5034FC] h-24 w-24 text-center items-center font-bold text-white shadow-[0px_2px_50px_2px_rgb(80,52,252)] shadow-[#5034FC]-500/50">
                <br />
                <h5>1</h5>
                <br />
              </div>
              <br />
              <br />
              <h5 className="font-bold my-6">Sign Up</h5>

              <h6 className="my-6 text-center text-[#8D969B]">
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet
                sint.
              </h6>
            </div>
            <div className="flex flex-col mx-6 h-96 w-96 items-center">
              <div className="rounded-full bg-[#EF4339] h-24 w-24  text-center font-bold text-white items-center shadow-[0px_2px_50px_2px_rgb(239,67,57)] shadow-[#EF4339]-500/50">
                <br />
                <h5>2</h5>
              </div>
              <br />
              <br />
              <h5 className="font-bold my-6">Fill Details</h5>
              <br />
              <h6 className="text-center text-[#8D969B]">
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet
                sint.
              </h6>
            </div>
            <div className="flex flex-col mx-6 h-96 w-96  items-center">
              <div className="rounded-full bg-[#0ABFBC] h-24 w-24  text-center font-bold text-white items-center shadow-[0px_2px_50px_2px_rgb(10,191,188)] shadow-cyan-500/100">
                <br />

                <h5>3</h5>
              </div>
              <br />
              <br />
              <h5 className="font-bold my-6">Enjoy The Process</h5>
              <br />
              <h6 className="text-center text-[#8D969B]">
                Amet minim mollit non deserunt <br /> ullamco est sit aliqua dolor do <br /> amet
                sint.
              </h6>
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div className="flex flex-col items-center bg-[#F8F9FC] ">
          <br />
          <br />
          <div className="items-center text-center">
            <h6 className="text-[#07AA3D] text-center">Testimonial</h6>
            <br />
            <h3 className="font-bold ">
              We Care About Our Customers <br />
              Experience too
            </h3>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="flex flex-col space-between  items-center  ">
            <img src={ZUimages.circularUser1} className="absolute mr-[1000px] -mt-[150px] "></img>
            <img src={ZUimages.circularUser3} className="absolute -mt-[200px] mr-[170px] "></img>
            <img src={ZUimages.circularUser2} className="absolute -mt-[160px] -mr-[610px]"></img>

            <div className="flex flex-row space-between">
              <div className="flex flex-col h-[350px] w-[350px] bg-[#07AA3D] rounded-lg mx-6 text-justify text-white p-[20px] ">
                <br />
                <br />
                <p>
                  There are many variations passages of <br /> Lorem lpsum available, but the
                  majority
                  <br /> have suffered alteration in some form, by injected or randomised.
                </p>
                <div className="flex flex-row space-between">
                  <div className="flex flex-col">
                    <br />
                    <br />
                    <br />

                    <h6 className="font-bold">Gary Simon</h6>
                    <br />
                    <div className="flex flex-row space-between text-justify items-justify">
                      <p className="">Sholl’s Colonial Cafeteria</p>
                      <div className="flex flex-row item-end ml-12">
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[350px] w-[350px]  bg-white rounded-lg mx-6 text-justify text-black p-[20px]">
                <br />
                <br />
                <p>
                  There are many variations passages of <br /> Lorem lpsum available, but the
                  majority
                  <br /> have suffered alteration in some form, by injected or randomised.
                </p>
                <div className="flex flex-row space-between">
                  <div className="flex flex-col">
                    <br />
                    <br />
                    <br />

                    <h6 className="font-bold">Karla Lynn</h6>
                    <br />
                    <div className="flex flex-row space-between text-justify items-justify">
                      <p className="">Sholl’s Colonial Cafeteria</p>
                      <div className="flex flex-row item-end ml-12">
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[350px] w-[350px] bg-white rounded-lg mx-6 text-justify text-black p-[20px]">
                <br />
                <br />
                <p>
                  There are many variations passages of <br /> Lorem lpsum available, but the
                  majority
                  <br /> have suffered alteration in some form, by injected or randomised.
                </p>
                <div className="flex flex-row space-between">
                  <div className="flex flex-col">
                    <br />
                    <br />
                    <br />

                    <h6 className="font-bold">Stella Jennifer</h6>
                    <br />
                    <div className="flex flex-row space-between text-justify items-justify">
                      <p className="">Sholl’s Colonial Cafeteria</p>
                      <div className="flex flex-row item-end ml-12">
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                        <img src={ZUimages.star} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div className="flex flex-col space-between items-center justify-center h-72 w-full  bg-white">
            <div className=" absolute z-10 text-white items-left -ml-[580px]">
              <h5>
                Get Started By Creating <br /> an Account
              </h5>
            </div>
            <Button to={SIGNUP} className="absolute -mr-[650px]">
              Create an Account
            </Button>
            <img
              src={ZUimages.lastRowBackground}
              className="w-[1000px] items-center mt-[75px]"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeView;
