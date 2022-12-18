import { ZUimages } from "assets";
import { Button } from "components";
import { SIGNUP } from "routes/CONSTANTS";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const AboutView = () => {
  return (
    <div className="text-lg bg-white">
      <div
        className="w-full h-max overflow-hidden bg-cover bg-white"
        style={{ backgroundImage: `url('${ZUimages.aboutBackground}')` }}
      >
        <div className="mt-12 px-8">
          <h6 className="text-green text-2xl font-medium">Welcome to Zumaridi</h6>
          <div className="pt-4 w-1/2">
            <h1 className="text-main text-[3.5rem] font-bold">
              Connect Simply,
              <p>
                Engage
                <span className="text-green"> Powerfully.</span>
              </p>
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-8">
            <div className="pr-10">
              <p className="text-2xl font-semibold leading-8 text-gray mb-10">
                Zumaridi is a live streaming and conferencing platform where you can connect simply
                and engage powerfully. Zumaridi comes from the Swahili word meaning "Emerald" The
                emerald has been a gem of fascination in many cultures for over six thousand years.
                It is so prized, that carat for carat, a fine emerald may be two to three times as
                valuable as a diamond. Zumaridi harnesses the power of collaboration to create
                innovative solutions to solve African problems and empower young people in Africa.
              </p>
              <Button to={SIGNUP} className="absolute -mr-[650px] px-16 uppercase ">
                Get Started
              </Button>
            </div>
            <div className="mt-10 md:-mt-[7rem] mb-10">
              <img src={ZUimages.aboutConference} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center sm:py-12 mx-4 md:mx-40 mt-10 md:mt-32">
        <div className="px-4 md:px-12 py-10 bg-white shadow-lg rounded-1xl">
          <div className="grid sm:grid-cols-2 gap-4 p-8">
            <div className="sm:border-b-0 sm:border-r">
              <div className="flex">
                <img src={ZUimages.zuArchery} className=""></img>
                <h1 className="pl-4">Mission</h1>
              </div>
              <p className="text-gray-200 pt-4">Connecting people through technology</p>
            </div>
            <div className="">
              <div className="flex">
                <img
                  src={ZUimages.zuEye}
                  className="border border-dashed border-green p-1 border-8"
                ></img>
                <h1 className="pl-4">Vision</h1>
              </div>
              <p className="text-gray-200 pt-4">Innovate for change</p>
            </div>
          </div>
        </div>
      </div>
      {/* This is where @cobbygraves took over from */}

      <Grid
        container
        justifyContent="center"
        sx={{
          backgroundImage: `url('../img/backgrounds/BG.png')`,
          paddingTop: 5,
          paddingBottom: 10
        }}
      >
        <Grid item container justifyContent="center">
          <Typography variant="h3" sx={{ marginTop: 4 }}>
            Why choose us
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={4}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ marginBottom: 7, marginTop: 5, position: "relative" }}>
            <img src={`${ZUimages.yellowElipse}`} alt="" />
            <img
              src="../img/logo/checklist.png"
              alt=""
              style={{ width: 45, height: 45, position: "absolute", top: 30, left: 35 }}
            />
          </Box>

          <Typography sx={{ fontWeight: "bolder", marginBottom: 3 }}>Manage Smartly</Typography>
          <Typography
            sx={{ textAlign: "center", paddingLeft: 10, paddingRight: 10, color: "#666761" }}
          >
            Culpa non ad do in duis nisi ea deserunt minim nostrud.
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={4}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ marginBottom: 7, marginTop: 5, position: "relative" }}>
            <img src={`${ZUimages.greenElipse}`} alt="" />
            <img
              src="../img/logo/power.png"
              alt=""
              style={{ width: 45, height: 45, position: "absolute", top: 30, left: 35 }}
            />
          </Box>
          <Typography sx={{ fontWeight: "bolder", marginBottom: 3 }}>Communicate Fast</Typography>
          <Typography
            sx={{ textAlign: "center", paddingLeft: 10, paddingRight: 10, color: "#666761" }}
          >
            Culpa non ad do in duis nisi ea deserunt minim nostrud.
          </Typography>
        </Grid>
        <Grid
          item
          container
          md={4}
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
        >
          <Box sx={{ marginBottom: 7, marginTop: 5, position: "relative" }}>
            <img src={`${ZUimages.purpleElipse}`} alt="" />
            <img
              src="../img/logo/database.png"
              alt=""
              style={{ width: 45, height: 45, position: "absolute", top: 30, left: 35 }}
            />
          </Box>
          <Typography sx={{ fontWeight: "bolder", marginBottom: 3 }}>Save Costs</Typography>
          <Typography
            sx={{ textAlign: "center", paddingLeft: 10, paddingRight: 10, color: "#666761" }}
          >
            Culpa non ad do in duis nisi ea deserunt minim nostrud.
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item container justifyContent="center">
          <img
            src="../img/logo/diamond.png"
            alt=""
            style={{ width: 45, height: 45, marginTop: 67, marginRight: 5 }}
          />
          <Typography variant="h3" sx={{ marginTop: 7, marginBottom: 4, color: "#25373f" }}>
            Value
          </Typography>
        </Grid>
        <Grid item md={6} container justifyContent="center">
          <img
            src="../img/logo/workspace.png"
            alt=""
            style={{ width: "100%", height: 320, padding: 3, objectFit: "cover" }}
          />
        </Grid>
        <Grid item md={6}>
          <Box
            sx={(theme) => ({
              display: "flex",
              paddingLeft: 2,
              paddingRight: 2,
              [theme.breakpoints.only("xs")]: { mt: 3 }
            })}
          >
            <Box sx={{ position: "relative" }}>
              <img src={`${ZUimages.yellowElipse}`} alt="" style={{ maxWidth: 47, height: 40 }} />
              <img
                src="../img/logo/ingenuity.png"
                alt=""
                style={{ width: 30, height: 30, position: "absolute", top: 5, left: 5 }}
              />
            </Box>
            <Typography sx={{ paddingLeft: 2, color: "#666761" }}>
              <b>Ingenuity: </b>At Zumaridi, ingenuity is key to solving complex problems and
              overcoming obstacles. We encourage our team members to think outside the box and to
              come up with creative solutions to the challenges we face.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: 3, paddingLeft: 2, paddingRight: 2 }}>
            <Box sx={{ position: "relative" }}>
              <img src={`${ZUimages.yellowElipse}`} alt="" style={{ maxWidth: 47, height: 40 }} />
              <img
                src="../img/logo/teamwork.png"
                alt=""
                style={{ width: 30, height: 30, position: "absolute", top: 5, left: 5 }}
              />
            </Box>
            <Typography sx={{ paddingLeft: 2, color: "#666761" }}>
              <b>Teamwork: </b>We believe that teamwork is essential to achieving our goals. By
              working together and supporting one another, we are able to accomplish more than we
              could on our own. We encourage collaboration and open communication within our team,
              and strive to create a positive and inclusive working environment.
            </Typography>
          </Box>
          <Box sx={{ display: "flex", marginTop: 3, paddingLeft: 2, paddingRight: 2 }}>
            <Box sx={{ position: "relative" }}>
              <img src={`${ZUimages.yellowElipse}`} alt="" style={{ maxWidth: 47, height: 40 }} />
              <img
                src="../img/logo/delivery.png"
                alt=""
                style={{ width: 30, height: 30, position: "absolute", top: 5, left: 5 }}
              />
            </Box>
            <Typography sx={{ paddingLeft: 2, color: "#666761" }}>
              <b>Delivery Result: </b>Do you have new ideas or contribution? are finding it
              difficulty to use the Zumaridi Platform for your Business? contact our support line.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 10, marginBottom: 10 }}>
        <img src="../img/backgrounds/partners.jpg" alt="" style={{ width: "100%", height: 300 }} />
      </Box>
    </div>
  );
};

export default AboutView;
