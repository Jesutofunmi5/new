import {
  ZuRoundFacebook,
  ZuRoundLinkedin,
  ZuRoundPintrest,
  ZuRoundSnapchat,
  ZuRoundTelegram,
  ZuRoundTicktock,
  ZuRoundTwitter,
  ZuRoundWhatsapp,
  ZuRoundYoutube
} from "assets/images";
import { FC, useState } from "react";
import { Link } from "react-router-dom";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from "react-share";
import { toast } from "react-toastify";
import { sendReferral, userData } from "services/users.service";
import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/dist/style.css";

export interface IRefer {
  firstName: string;
  lastName: string;
  email: string;
  refId: string;
}

const handleCopy = (referral: string) => {
  type CopyFn = (text: string) => Promise<boolean>; // Return success
  const copy: CopyFn = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("TEXT COPIED!!!");
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      return false;
    }
  };
  void copy(referral);
};

const handleSend = (emails: string[]) => {
  emails.map((email) => {
    const details: IRefer = {
      firstName: userData?.name?.firstName,
      lastName: userData?.name?.lastName,
      email,
      refId: userData?.refId
    };
    sendReferral(details)
      .then(() => toast.success("Referral Sent"))
      .catch(() => toast.error("Unable to send referral"));
    return true;
  });
};

const ReferAFriendView: FC<{ referral: string; title: string }> = ({ referral, title }) => {
  const [emails, setEmails] = useState<string[]>([]);
  return (
    <div>
      <div>
        <p className="text-[24px] font-thin">Your Company Matters A Lot! Ask Them To Join</p>
        <p className="mt-4">
          With your friends and family here, you can create unforgettable adventure here.
        </p>
      </div>
      <div className="mt-10">
        <p>Copy your referral code and invite them directly</p>
        <div className="flex border-green bg-white rounded-md lg:max-w-[978px] max-w-full h-[54px] border-[1px] items-center justify-between px-4 mt-2">
          <p className="w-4/5 overflow-hidden mr-2">{referral}</p>
          <button
            className="border-primary rounded-md border-[1px] h-[34px] text-green w-[102px]"
            onClick={() => handleCopy(referral)}
          >
            COPY
          </button>
        </div>
      </div>
      <div className="mt-10">
        <p>Enter their email address and we send them your referral code</p>
        <div className="flex border-green bg-white rounded-md w-full lg:max-w-[978px] max-w-full h-[54px] border-[1px] items-center justify-between px-4 mt-2">
          <ReactMultiEmail
            placeholder="Enter emails"
            emails={emails}
            className="w-5/6 mr-2 -ml-3 border-none"
            onChange={(_emails: string[]) => {
              setEmails(_emails);
            }}
            getLabel={(email, index, removeEmail) => {
              return (
                <div data-tag key={index}>
                  <div data-tag-item>{email}</div>
                  <span data-tag-handle onClick={() => removeEmail(index)}>
                    ×
                  </span>
                </div>
              );
            }}
          />
          <button
            className="bg-green border-green text-white rounded-md border-[1px] h-[34px] w-[102px]"
            onClick={() => handleSend(emails)}
          >
            SEND
          </button>
        </div>
      </div>
      <div className="flex w-full lg:max-w-[978px] max-w-full mt-8">
        <hr className="w-3/6 h-[1px] mr-7 mt-3 border-0 bg-slate-400"></hr>
        <p className="text-slate-400 ">OR</p>
        <hr className="w-3/6 h-[1px] ml-7 mt-3 border-0 bg-slate-400"></hr>
      </div>
      <div className="mt-10 font-thin text-[24px] max-w-full">
        <p className="">Share via social media</p>
        <div className="flex bg-white mt-2 -ml-8 lg:max-w-[1054px] h-[106px] rounded-lg items-center">
          <TwitterShareButton url={referral} className="md:ml-6 ml-4 md:mr-10 mr-5" title={title}>
            <img src={ZuRoundTwitter} />
          </TwitterShareButton>
          <Link to={"/"} className="md:mr-10 mr-5">
            <img src={ZuRoundSnapchat} />
          </Link>
          <FacebookShareButton url={referral} className="md:mr-10 mr-5" title={title}>
            <img src={ZuRoundFacebook} />
          </FacebookShareButton>
          <WhatsappShareButton url={referral} className="md:mr-10 mr-5" title={title}>
            <img src={ZuRoundWhatsapp} />
          </WhatsappShareButton>
          <Link to={"/"} className="md:mr-10 mr-5">
            <img src={ZuRoundTicktock} />
          </Link>
          <Link to={"/"} className="md:mr-10 mr-5">
            <img src={ZuRoundYoutube} />
          </Link>
          <TelegramShareButton url={referral} className="md:mr-10 mr-5" title={title}>
            <img src={ZuRoundTelegram} />
          </TelegramShareButton>
          <Link to={"/"} className="md:mr-10 mr-5">
            <img src={ZuRoundPintrest} />
          </Link>
          <LinkedinShareButton url={referral} className="md:mr-6 mr-4" title={title}>
            <img src={ZuRoundLinkedin} />
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
};

export default ReferAFriendView;
