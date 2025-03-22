"use client";

import Text from "@/shared/ui/text";
import InputPassword from "@/shared/ui/form/inputPassword";
import InputTel from "@/shared/ui/form/inputTel";
import InputText from "@/shared/ui/form/inputText";
import Heading from "@/shared/ui/heading";
import { apiUrl } from "@/utils/environment";
import { FormProvider, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import Button from "@/shared/ui/button";

type RegisterForm = {
  id?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

export default function Register() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const methods = useForm<RegisterForm>();

  const onSubmit = async (data: RegisterForm) => {
    toast.loading("Bitte warten ...");
    data.id = id;
    const response = await fetch(apiUrl + "account/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <div className="container max-w-[700px]!">
      <div className="rounded-lg border-1 p-10 shadow-xl">
        <Heading level="heading-primary">Registrierung</Heading>
        <Text level="base" className="heading-primary-mb">
          Registriere dich jetzt und beginne deine Karriere als selbstständiger
          Tätowierer!
        </Text>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            noValidate
            className="grid gap-4"
          >
            <InputText
              label="Vorname"
              placeholder="Vorname"
              inputName="firstName"
            />
            <InputText
              label="Nachname"
              placeholder="Nachname"
              inputName="lastName"
            />
            <InputTel placeholder="+49 000 1234 5678" inputName="phoneNumber" />
            <InputPassword inputName="password" />

            <Button type="submit" level="primary-lg" className="w-fit">
              Registrierung Abschließen
            </Button>
          </form>
        </FormProvider>
      </div>

      <Toaster />
    </div>
  );
}
