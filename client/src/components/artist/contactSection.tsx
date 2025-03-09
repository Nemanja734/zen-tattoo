"use client";

import Heading from "../elements/heading";
import Text from "../elements/text";
import Button from "../elements/button";
import { FormProvider, useForm } from "react-hook-form";
import Icon from "../elements/icon";
import Input from "../elements/input";

export default function ContactSection() {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ContactFormInputs>();
  const methods = useForm();
  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className="container">
      <div className="text-center">
        <Heading level="heading-primary">
          Benötigst du weitere Informationen?
        </Heading>
        <Text level="base" customs="heading-primary-mb">
          Hinterlasse uns einfach eine Nachricht und wir melden uns zeitnah bei
          dir.
        </Text>
      </div>

      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="max-w-[500px] m-auto w-full grid gap-3"
        >
          <Input
            name="name"
            label="Name"
            placeholder="Vor- und Nachname"
            validation={{
              required: {
                value: true,
                message: "required",
              },
            }}
          />

          <Input
            name="email"
            label="E-Mail"
            type="email"
            placeholder="E-Mail-Adresse"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid",
              },
            }}
          />

          <Input
            name="message"
            label="Nachricht"
            multiline
            placeholder="Wie lange dauert es, bis mein Account verifiziert ist?"
            validation={{
              required: {
                value: true,
                message: "required",
              },
              minLength: {
                value: 10,
                message: "too short",
              },
            }}
          />

          <Button
            level="primary-lg"
            customs="flex items-center gap-4 w-fit mr-auto mt-4"
            type="submit"
          >
            <Icon name="mail" color="background" size={24} /> Senden
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
