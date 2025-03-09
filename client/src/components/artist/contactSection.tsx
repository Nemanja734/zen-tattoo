"use client";

import Heading from "../elements/heading";
import Text from "../elements/text";
import Button from "../elements/button";
import { FormProvider, useForm } from "react-hook-form";
import Icon from "../elements/icon";
import Input from "../elements/input";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

interface ContactFormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const methods = useForm<ContactFormInputs>();
  const { handleSubmit } = methods;

  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  // Todo, send message to email addresss and save sender email
  const onSubmit = async (data: ContactFormInputs) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setSubmitStatus("success");
      console.log(data);
    } catch (error) {
      setSubmitStatus("error");
      console.log(error);
    }
  };

  return (
    <div className="bg-primary-tint rounded-t-2xl">
      <div className="container">
        <div className="text-center">
          <Heading level="heading-primary">
            Benötigst du weitere Informationen?
          </Heading>
          <Text level="base" customs="heading-primary-mb">
            Hinterlasse uns einfach eine Nachricht und wir melden uns zeitnah
            bei dir.
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
                  message: "Dieses Feld ist erforderlich.",
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
                  message: "Dieses Feld ist erforderlich.",
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Ungültige E-Mail-Adresse.",
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
                  message: "Dieses Feld ist erforderlich",
                },
                minLength: {
                  value: 10,
                  message: "Mindestens 10 Zeichen.",
                },
              }}
            />

            <Button
              level="primary-lg"
              customs="flex items-center justify-center gap-4 m-auto w-full"
              type="submit"
              disabled={methods.formState.isSubmitting}
            >
              <Icon name="mail" color="background" size={24} /> Senden
            </Button>
            {submitStatus === "success" && (
              <Text level="base" customs="text-primary mt-2">
                Deine Nachricht wurde erfolgreich gesendet!
              </Text>
            )}
            {submitStatus === "error" && (
              <Text level="base" customs="text-alarm mt-2">
                Etwas ist schiefgelaufen. Bitte versuche es erneut.
              </Text>
            )}
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
