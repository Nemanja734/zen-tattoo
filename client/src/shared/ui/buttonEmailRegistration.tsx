"use client";

import { useEffect, useState } from "react";
import Button from "./button";
import Icon from "./icon";
import Text from "./text";
import Heading from "./heading";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import InputEmail from "./form/inputEmail";
import Modal from "@/layout/modal";
import { apiUrl } from "@/utils/environment";
import { createEmail } from "@/utils/statusHandler";
import toast, { Toaster } from "react-hot-toast";

type EmailForm = {
  email: string;
};

type Props = {
  buttonLevel: string;
  children: React.ReactNode;
};

export default function ButtonEmailRegistration({
  buttonLevel,
  children,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const methods = useForm<EmailForm>();
  const {
    formState: { isSubmitSuccessful },
    reset,
  } = methods;

  const onSubmit = async (data: EmailForm) => {
    toast.loading("Email wird versendet ...");
    const response = await fetch(apiUrl + "account/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const statusHandler = createEmail();
    toast.dismiss();
    const handler = statusHandler[response.status] || statusHandler.default;
    handler();
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div className="text-left">
      <Modal showModal={showModal} closeModal={() => setShowModal(false)}>
        <div className="flex justify-between items-center heading-primary-mb">
          <Heading level="heading-primary" className="mb-0!">
            Registrierung für Tätowierer
          </Heading>

          <Icon
            name="close"
            size="lg"
            className="cursor-pointer"
            onClick={() => setShowModal(false)}
          ></Icon>
        </div>

        <Text level="base" className="heading-primary-mb">
          Gebe deine Email ein und du bekommst von uns einen Link, mit dem du
          dich als Tätowierer registrieren kannst.
        </Text>

        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <InputEmail inputName="email" className="heading-primary-mb" />

            <Button type="submit" level="primary-lg">
              Jetzt Registrieren
            </Button>
          </form>
        </FormProvider>
      </Modal>

      <Button
        onClick={() => setShowModal(!showModal)}
        level={buttonLevel}
        className="m-auto"
      >
        {children}
      </Button>

      <Toaster />
    </div>
  );
}
