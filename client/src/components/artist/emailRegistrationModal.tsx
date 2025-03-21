"use client";

import { useEffect, useRef, useState } from "react";
import Button from "../../shared/ui/button";
import { AnimatePresence, motion } from "motion/react";
import Modal from "@/layout/modal";
import Icon from "../../shared/ui/icon";
import { useOnClickOutside } from "@/shared/lib/useOnClickOutside";
import Text from "../../shared/ui/text";
import Heading from "../../shared/ui/heading";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import InputEmail from "../../shared/ui/form/inputEmail";
import { apiUrl } from "@/utils/environment";
import { createEmail } from "@/utils/statusHandler";
import Snack from "@/shared/ui/snack";

type Props = {
  buttonLevel: string;
  children: React.ReactNode;
};

export default function EmailRegistrationModal({
  buttonLevel,
  children,
}: Props) {
  const [showModal, setShowModal] = useState(false);
  const ref = useRef(null);
  const methods = useForm();
  const {
    reset,
    formState: { isSubmitSuccessful },
  } = methods;

  useOnClickOutside(ref, () => setShowModal(false));

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch(apiUrl + "account/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email }),
    });

    // Error handling
    const statusHandler = createEmail();
    const handler = statusHandler[response.status] || statusHandler.default;
    handler();
  };

  // Reset form if submit is successful
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <AnimatePresence mode="wait" initial={false}>
        {showModal && (
          <>
            <Modal />

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              ref={ref}
              className="bg-background z-10 fixed w-[800px] h-fit inset-0 m-auto p-12 rounded-lg"
            >
              <Icon
                name="close"
                size="lg"
                className="float-right cursor-pointer"
                onClick={() => setShowModal(false)}
              ></Icon>

              <Heading level="heading-primary">
                Registrierung für Tätowierer
              </Heading>

              <Text level="base" customs="heading-primary-mb">
                Gebe deine Email ein und du bekommst von uns einen Link, mit dem
                du dich als Tätowierer registrieren kannst.
              </Text>

              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
                  <InputEmail className="heading-primary-mb" />

                  <Button type="submit" level="primary-lg">
                    Jetzt Registrieren
                  </Button>
                </form>
              </FormProvider>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Button onClick={() => setShowModal(!showModal)} level={buttonLevel}>
        {children}
      </Button>

      <Snack color="alarm">Diese Email ist bereits vergeben. Bitte verwende eine andere.</Snack>
    </div>
  );
}
