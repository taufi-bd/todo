import React, { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Button,
  Input,
  Text,
  Center,
} from "@chakra-ui/react";
import { db } from "../firebase_config";
import { FaEdit } from "react-icons/fa";

const UpdateModal = ({ todo, id }) => {
  const [updateTodo, setUpdateTodo] = useState("");
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const open = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  function updateHandler(e) {
    e.preventDefault();
    if (updateTodo === "") {
      return setError("Please type something");
    }
    db.collection("todos").doc(id).update({
      todo: updateTodo,
    });
    setUpdateTodo("");
    setIsOpen(false);
  }
  return (
    <div>
      <Popover
        placement="left"
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={close}
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button
            style={{ boxShadow: "none" }}
            type="submit"
            size="sm"
            colorScheme="red"
            variant="ghost"
            outline="0"
            onClick={open}
          >
            <FaEdit color="orange" />
          </Button>
        </PopoverTrigger>
        <PopoverContent w="50">
          <PopoverArrow />
          <PopoverHeader>
            <Input
              value={updateTodo}
              placeholder={todo}
              onChange={(e) => {
                setUpdateTodo(e.target.value);
                if (error) {
                  setError("");
                }
              }}
            />
          </PopoverHeader>
          <PopoverBody>
            <div>
              {error ? (
                <Text color="red" mb="2">
                  {error}
                </Text>
              ) : null}{" "}
            </div>
            <Center>
              <Button
                style={{ boxShadow: "none" }}
                type="submit"
                size="sm"
                colorScheme="green"
                variant="solid"
                outline="0"
                onClick={updateHandler}
              >
                Update
              </Button>
            </Center>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default UpdateModal;
