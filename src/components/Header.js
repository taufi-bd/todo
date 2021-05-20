import React from "react";
import { Heading, Center } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Heading bg="#253C59" color="#F2EDE4" py={["8", "10", "12", "14"]}>
      <Center>Todo App</Center>
    </Heading>
  );
};
