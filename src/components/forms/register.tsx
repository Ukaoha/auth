/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useLayoutEffect, useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "./FormError";
import FormSuccess from "./FormSuccess";
import { register } from "@/actions/register";
import { z } from "zod";

const Signup = () => {
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");
  const [isLoading, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      register(values).then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      });
    });
  };
  return <div>register</div>;
};

export default Signup;
