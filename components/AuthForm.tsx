"use client";
import React, { useState } from "react";
import Image from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { createAccount } from "@/lib/actions/user.actions";
import OtpComponent from "@/components/OtpComponent";

const formSchema = z.object({ username: z.string().min(2).max(50) });

type FormType = "signin" | "signup";

const authFormSchema = (formType: FormType) => {
  return z.object({
    email: z.string().email("Invalid email address"),
    fullName:
      formType === "signup" ? z.string().min(5).max(50) : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isLoading, setisLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [accountID, setaccountID] = useState<string | null>(null);

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", fullName: "" },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setisLoading(true);
    setErrorMessage("");

    try {
      const user = await createAccount({
        fullName: values.fullName || "",
        email: values.email,
      });
      setaccountID(user.accountId);
    } catch (error) {
      console.error("Error creating account:", error);
      setErrorMessage("Failed to create account. Please try again.");
    } finally{
      setisLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="auth-form">
          <h1 className="form-title">
            {type === "signin" ? "Sign In" : "Sign Up"}
          </h1>
          {type === "signup" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <div className="shad-form-item">
                    <FormLabel className="shad-form-label">Full Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your Full Name"
                        {...field}
                        className="shad-input"
                      />
                    </FormControl>
                  </div>
                  <FormMessage className="shad-form-message" />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="shad-form-item">
                  <FormLabel className="shad-form-label">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="shad-input"
                    />
                  </FormControl>
                </div>
                <FormMessage className="shad-form-message" />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="form-submit-button"
            disabled={isLoading}
          >
            {type === "signin" ? "Sign In" : "Sign Up"}
            {isLoading && (
              <Image
                src="/assets/icons/loader.svg"
                alt="Loading"
                width={24}
                height={24}
                className="ml-2 animate-spin"
              />
            )}
          </Button>
          {errorMessage && <p className="error-message">*{errorMessage}</p>}

          <div className="body-2 flex justify-center">
            <p className="text-light-100">
              {type === "signin"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === "signin" ? "/signup" : "/signin"}
              className="ml-1 font-medium text-brand"
            >
              {type === "signin" ? "Sign Up" : "Sign In"}
            </Link>
          </div>
        </form>
      </Form>

      { accountID && (
        <OtpComponent email={form.getValues("email")} accountID={accountID} />
      )}
    </>
  );
};

export default AuthForm;
