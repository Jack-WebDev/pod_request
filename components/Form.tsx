"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: "Oops! Please add your email" })
		.email({ message: "Oops! Please check your email" }),
});

export default function RequestForm() {
	const router = useRouter();
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	function onSubmit(values: z.infer<typeof formSchema>) {
		router.push("/submission");
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 w-full md:w-auto md:flex md:items-baseline"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									className="text-white rounded-2xl w-full placeholder:text-primary-LightGrayishBlue bg-primary-DarkGrayishBlue md:w-[40vw] lg:w-[25vw]"
									placeholder="Email address"
									{...field}
								/>
							</FormControl>

							<FormMessage className="text-red-600" />
						</FormItem>
					)}
				/>
				<Button
					type="submit"
					className="rounded-2xl w-full bg-secondary-PaleGreen text-primary-VeryDarkBlue font-semibold relative md:left-[-7.5rem]"
				>
					Request Access
				</Button>
			</form>
		</Form>
	);
}
