'use client'

import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot
} from "@/components/ui/input-otp";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { VerifyOTP, sendEmailOTP } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const OtpComponent = ({
  accountID,
  email,
}: {
  accountID: string;
  email: string;
}) => {
  const router = useRouter();
  const [isOpen, setisOpen] = useState(true);
  const [password, setpassword] = useState("");
  const [isLoading, setisLoading] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setisLoading(true);

    try {
      const sessionID = await VerifyOTP( { accountID, password } );
      if (sessionID) router.push('/')
    } catch (error) {
      console.log(`Failed to verify OTP: ${error}`);
    }

    setisLoading(false);
  };

  const handleResendOtp = async () => {
    await sendEmailOTP({ email });
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setisOpen}>
      {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
      <AlertDialogContent className="shad-alert-dialog">
        <AlertDialogHeader className="relative flex justify-center">
          <AlertDialogTitle className="h2 text-center">
            Enter Your OTP
            <Image
              src="/assets/icons/close-dark.svg"
              alt="Close"
              width={20}
              height={20}
              className="otp-close-button"
              onClick={() => setisOpen(false)}
            />
          </AlertDialogTitle>
          <AlertDialogDescription className="subtitle-2 text-center text-light-100">
            We&apos;ve sent a 6-digit OTP to{" "}
            <span className="pl-1 text-brand">{email}</span>. Please enter it
            below to verify your account.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <InputOTP maxLength={6} value={password} onChange={setpassword}>
          <InputOTPGroup className="shad-otp">
            <InputOTPSlot index={0} className="shad-otp-slot" />
            <InputOTPSlot index={1} className="shad-otp-slot" />
            <InputOTPSlot index={2} className="shad-otp-slot" />
            <InputOTPSlot index={3} className="shad-otp-slot" />
            <InputOTPSlot index={4} className="shad-otp-slot" />
            <InputOTPSlot index={5} className="shad-otp-slot" />
          </InputOTPGroup>
        </InputOTP>
        <AlertDialogFooter>
          <div className="flex w-full flex-col gap-4">
            <AlertDialogAction
              onClick={handleSubmit}
              className="shad-submit-btn h-12"
            >
              Submit
              { isLoading && <Image
                src="/assets/icons/loader.svg"
                alt="Loader"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              /> }
            </AlertDialogAction>
            <div className="subtitle-2 mt-2 text-center text-light-100">
              Didn&apos;t get OTP? 
              <Button type="button" variant="link" className="pl-1 text-brand" onClick={handleResendOtp}>Click to Resend OTP</Button>
            </div>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default OtpComponent;
