import { useForm } from "react-hook-form";
import React from "react";
import { FormErrorMessage, FormLabel, FormControl, Input, Button } from "@chakra-ui/react";

interface IRegistration {
  enrollmentId: string;
  name: string;
  email: string;
}

interface IRegistratrionFormProps {
  onRegistered: (data: IRegistration) => void;
}

export default function RegistrationForm({ onRegistered }: IRegistratrionFormProps) {
  const {
    handleSubmit, // handels the form submit event
    register, // ties the inputs to react-form
    formState: { errors, isSubmitting }, // gets errors and "loading" state
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onRegistered)} noValidate>
      {/* noValidate will stop the browser validation, so we can write our own designs and logic */}
      <FormControl isInvalid={errors.enrollmentId}>
        <FormLabel htmlFor="enrollmentId">
          Enrollment ID
          {/* the form label from chakra ui is tied to the input via the htmlFor attribute */}
        </FormLabel>
        {/* you should use the save value for the id and the property name */}
        <Input
          id="enrollmentId"
          placeholder="AX-3345-GHBB-2021"
          {
            ...register("enrollmentId", {
              required: "Don't forget the Enrollment ID",
            }) /* this register function will take care of the react-form binding to the ui */
          }
        ></Input>
        {/* react-form will calculate the errors on submit or on dirty state */}
        <FormErrorMessage>{errors.enrollmentId && errors.enrollmentId.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name}>
        <FormLabel required htmlFor="name">
          Name
        </FormLabel>
        <Input
          id="name"
          placeholder="John Coolio"
          {...register("name", {
            required: "Did you forget your name?",
          })}
        ></Input>
        <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email}>
        <FormLabel required htmlFor="email">
          E-Mail Address
        </FormLabel>
        <Input
          id="email"
          placeholder="john.coolio@events.de"
          type="email"
          {...register("email", {
            required: "We really need your E-Mail!",
          })}
        ></Input>
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>
      <Button mt={10} colorScheme="blue" isLoading={isSubmitting} type="submit">
        Register 🐱‍🏍
      </Button>
    </form>
  );
}
