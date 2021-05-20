import React from "react";
import { Button, Text, Switch, Box, Flex, Spacer } from "@chakra-ui/react";
import { db } from "../firebase_config";
import { FaRegCheckCircle, FaRegClock } from "react-icons/fa";
import UpdateModal from "./UpdateModal";

export const TodoList = ({ todo, inprogress, id, setTodos }) => {
  function toggleInProgress() {
    db.collection("todos").doc(id).update({
      inprogress: !inprogress,
    });
  }
  function deleteTodo() {
    db.collection("todos").doc(id).delete();
  }

  return (
    <>
      <Flex
        _hover={{ boxShadow: "lg" }}
        boxShadow="md"
        bg="#FEFEFF"
        mb="5"
        p="4"
        w={["350px", "350px", "450px", "550px"]}
        maxW="550px"
        rounded="lg"
        alignItems="center"
      >
        <Box marginRight="4">
          {!inprogress ? (
            <FaRegCheckCircle color="green" size={18} />
          ) : (
            <FaRegClock color="#65385A" size={18} />
          )}
        </Box>
        <Box>
          <Text fontSize="lg" color="#11344e">
            {todo}
          </Text>
          <Text fontSize="xs" letterSpacing="wide">
            {inprogress ? `In Progress` : "Completed"}
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Flex>
            <Button
              style={{ boxShadow: "none" }}
              type="submit"
              size="sm"
              colorScheme="blue"
              variant="ghost"
              outline="0"
              onClick={toggleInProgress}
            >
              {inprogress ? <Switch /> : <Switch defaultChecked />}
            </Button>

            <UpdateModal
              todo={todo}
              id={id}
              inprogress={inprogress}
              setTodos={setTodos}
            />
            <Button
              style={{ boxShadow: "none" }}
              type="submit"
              size="sm"
              color="red"
              variant="ghost"
              outline="0"
              onClick={deleteTodo}
            >
              X
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
