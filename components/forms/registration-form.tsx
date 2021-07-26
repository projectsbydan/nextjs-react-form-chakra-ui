import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
} from "@chakra-ui/react";

export default function RegistrationForm({
  onRegistered,
}: {
  onRegistered: (data: {
    enrollmentId: string;
    name: string;
    email: string;
  }) => void;
}) {
  const {
    handleSubmit,
    register,

    formState: { errors, isSubmitting },
  } = useForm({ shouldUseNativeValidation: false });

  return (
    <form onSubmit={handleSubmit(onRegistered)}>
      <FormControl isInvalid={errors.name} isRequired>
        <FormLabel htmlFor="enrollmentId">Enrollment ID</FormLabel>
        <Input
          id="enrollmentId"
          placeholder="AX-3345-GHBB-2021"
          required={false}
          {...register("enrollmentId", {
            required: "Don't forget the Enrollment ID",
          })}
        ></Input>
        <FormErrorMessage>
          {errors.enrollmentId && errors.enrollmentId.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.name} isRequired>
        <FormLabel required htmlFor="name">
          Name
        </FormLabel>
        <Input
          id="name"
          placeholder="John Coolio"
          required={false}
          {...register("name", {
            required: "Did you forget your name?",
          })}
        ></Input>
        <FormErrorMessage>
          {errors.name && errors.name.message}
        </FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.email} isRequired>
        <FormLabel required htmlFor="email">
          E-Mail Address
        </FormLabel>
        <Input
          id="email"
          placeholder="john.coolio@events.de"
          required={false}
          type="email"
          {...register("email", {
            required: "We really need your E-Mail!",
          })}
        ></Input>
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>
      <Button mt={10} colorScheme="blue" isLoading={isSubmitting} type="submit">
        Register 🐱‍🏍
      </Button>
    </form>
  );
}
