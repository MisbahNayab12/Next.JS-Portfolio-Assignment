"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form";
import { Form } from "../ui/form"
import { z } from "zod";
import { FormField } from "../ui/form";
import { FormLabel } from "../ui/form";
import { FormItem } from "../ui/form";
import { FormControl } from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormMessage } from "../ui/form";

const FormSchema = z.object({
    email: z.string()
  })

const EmailForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
      })

const onSubmit = () => {
    console.log("Email submitted!")
}
 
    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="text-left">
                            <FormLabel className="text-white ml-8">Sign up for coupons, updates and other fun stuff!</FormLabel>
                            <FormControl>
                                <Input className="w-11/12 ml-8" placeholder="enter your email i.d" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
        <Button type="submit" className="hover:bg-pink-400 bg-green-800 font-semibold mt-5">Submit</Button>
      </form>
    </Form>
    )
}

export default EmailForm;