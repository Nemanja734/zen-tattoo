"use client";

import { useEffect, useRef, useState } from "react";
import Button from "./button";
import { AnimatePresence, motion } from "motion/react";
import Modal from "@/layout/modal";
import Icon from "./icon";
import { useOnClickOutside } from "@/lib/useOnClickOutside";
import Text from "./text";
import Heading from "./heading";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import InputText from "./form/inputText";
import InputEmail from "./form/inputEmail";

type Props = {
  buttonLevel: string;
  children: React.ReactNode;
};

export default function ButtonEmailRegistration({
  buttonLevel,
  children,
}: Props) {
  const [showModal, setShowModal] = useState(true);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setShowModal(false));

  const methods = useForm();
  const onSubmit = (data: FieldValues) => console.log(data.email);

  useEffect(() => {
    if (methods.formState.isSubmitSuccessful) {
        methods.reset();
    }
  }, [methods.formState])

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
    </div>
  );
}
