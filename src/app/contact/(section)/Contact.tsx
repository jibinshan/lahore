"use client";
import { Icons } from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Mail, MapPin, MoveRight, Phone } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const FormValidation = z.object({
  name: z.string().min(1, "please enter your name"),
  phone: z.string().min(11, "Please enter a valid phone number with 11 digits").max(11, "Please enter a valid phone number with 11 digits"),
  email: z.string().min(1, "please enter your email"),
  reason: z.string().min(1, "please enter reason"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof FormValidation>;

const Contact = ({ }) => {
  const form = useForm<FormData>({
    resolver: zodResolver(FormValidation),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      reason: "",
      message: "",
    },
  });

  const onSubmit = (data: FormData) => {
    bookTableMutation.mutate(data);
  };

  const bookTableMutation = useMutation({
    mutationFn: async (values: z.infer<typeof FormValidation>) => {
      return await axios.post("/api/contact", values);
    },
    onSuccess: () => {
      toast(
        (t) => (
          <div className="flex flex-col gap-2 items-center justify-center">
            <p className="text-center">Your reservation request has been successfully submitted to the restaurant!</p>
            <button
              onClick={() => {
                toast.dismiss(t.id);
                form.reset();
              }}
              className="bg-primary text-white px-4 py-2 rounded"
            >
              OK
            </button>
          </div>
        ),
        { duration: Infinity }
      );
    },
    onError: () => {
      toast.error(
        "There was an error submitting your message. Please try again later",
      );
    },
  });
  return (
    <section className="flex h-full w-full items-center justify-center bg-[#000000]">
      <div className="flex h-full w-full flex-col gap-[2.5rem] px-0 pl-0 md:px-2">
        <div className="flex w-full flex-col lg:flex-row">
          <div
            style={{ backgroundImage: "url(/images/contact/contact.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center" }}
            className="relative flex h-screen w-full items-center justify-center lg:ml-[-10px] lg:w-1/2"
          >
            <div className="absolute w-full h-full left-0 top-0 bg-black/50"></div>
            <div className="h-7/12 flex md:w-7/12 flex-col gap-16 px-3 md:px-0 z-20">
              <div className="flex w-full flex-col gap-10">
                <div className="flex w-full flex-col gap-2">
                  <p className="font-oswald text-4xl md:text-7xl font-extralight">
                    Get in touch
                  </p>
                  <p className="text-sm font-light">
                    Use the form on the right to send us a message.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Link href='https://www.instagram.com/thetiffinboxuk?igsh=MTh2ZHc4aXl3Y2U4cw==' target="_blank">
                    <Icons.instagram />
                  </Link>
                  <Link href='https://www.tripadvisor.in/Restaurant_Review-g186403-d27022571-Reviews-The_Tiffin_Box-Coventry_West_Midlands_England.html' target="_blank">
                    <Icons.unknown />
                  </Link>
                  <Link href='https://www.facebook.com/share/1AygAGmSs7/' target="_blank">
                    <Icons.facebook />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-lg font-semibold">Working Hours</p>
                <div className="flex gap-7">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#b3b3aa]">Saturday</p>
                    <p className="text-[#b3b3aa]">Sunday</p>
                    <p className="text-[#b3b3aa]">Monday</p>
                    <p className="text-[#b3b3aa]">Tuesday</p>
                    <p className="text-[#b3b3aa]">Wednesday</p>
                    <p className="text-[#b3b3aa]">Thursday</p>
                    <p className="text-[#b3b3aa]">Friday</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12:00 - 22:30</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12:00 - 21:00</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>Closed</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>17:00 - 22:00</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>17:00 - 22:00</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>17:00 - 22:00</span>
                    </p>
                    <p className="flex gap-7 text-[#b3b3aa]">
                      <span>:</span>
                      <span>12:00 - 22:30</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col bg-[#000000] pb-24 pt-5 lg:w-1/2 lg:items-center lg:justify-center">
            <div className="flex w-full flex-col gap-6 px-3 lg:w-3/5 lg:px-0">
              <div className="flex gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <MapPin className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <p>
                    7-9, The Butts, Earlsdon,<br /> Coventry CV1 3GJ
                  </p>
                  <Link href='https://maps.app.goo.gl/jELmPgqdAxuXMP5q7' target="_blank">
                    <p className="flex gap-2 text-sm text-[#b3b3aa]">
                      <span>Get Direction</span>
                      <MoveRight />
                    </p>
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Phone className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href='tel:+447436514048'>
                    <p>+447436514048</p>
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center gap-6">
                <div>
                  <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                    <Mail className="text-[#b7955b]" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <Link href='mailto:info@fusionclanwarwick.co.uk'>
                    <p>info@fusionclanwarwick.co.uk</p>
                  </Link>
                </div>
              </div> */}
            </div>
            <div className="w-full px-3 lg:w-3/5 lg:px-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="h-full">
                  <div className="flex gap-4 pt-7">
                    <div className="flex w-full flex-col gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="First Name"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Phone"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Email Address"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="reason"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Input
                                placeholder="Reason for contacting (optional)"
                                {...field}
                                className="h-12 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem className="w-full">
                            <FormControl>
                              <Textarea
                                placeholder="Your Message"
                                {...field}
                                className="h-24 min-w-[250px] rounded-lg border-none bg-[#222222] pl-8 text-[#958B7D] placeholder:text-[#958B7D] active:outline-none active:ring-0"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="flex w-full flex-col pt-7 lg:flex-row">
                    <Button
                      disabled={bookTableMutation.isPending}
                      className="w-full py-6"
                    >
                      Contact US
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Contact;

// /images/contact/contact.png
