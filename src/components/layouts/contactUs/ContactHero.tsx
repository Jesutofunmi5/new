const ContactHero = () => {
  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2022/12/11/05/10/bird-7648202_960_720.jpg')] bg-no-repeat bg-cover">
      <div className=" relative h-96 w-full bg-cover bg-center md:p-24 px-5 flex flex-col gap-12 md:items-start items-center md:justify-start justify-center">
        <h3 className="text-white text-6xl font-bold">Contact Us</h3>
        <p className="text-white mt-3 text-3xl font-light md:text-left text-center">
          We’d like to help you with any questions you may have. Get in touch!
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
