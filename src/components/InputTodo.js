import React, { useState, useEffect } from "react";
import { Input, Center, Button, Text } from "@chakra-ui/react";
import { db } from "../firebase_config";
import firebase from "firebase/app";
import "firebase/firestore";
import { TodoList } from "./TodoList";

export const InputTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    if (todoInput === "") {
      return setError("Please type something");
    }
    db.collection("todos").add({
      inprogress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });
    setTodoInput("");
  };

  const getTodos = () => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot(function (querySnapshot) {
        setTodos(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            todo: doc.data().todo,
            inprogress: doc.data().inprogress,
          }))
        );
      });
  };
  return (
    <>
      <Center mt={["4", "6", "8", "10"]}>
        <div>{error ? <Text color="red">{error}</Text> : null} </div>
      </Center>

      <Center>
        <div>
          <Input
            value={todoInput}
            onChange={(e) => {
              setTodoInput(e.target.value);
              if (error) {
                setError("");
              }
            }}
            variant="flushed"
            placeholder="Create a Task"
            maxW="350px"
            width="350px"
            pr="60px"
          />
        </div>

        <Button
          style={{ boxShadow: "none" }}
          type="submit"
          ml="-50px"
          size="sm"
          colorScheme="blue"
          variant="ghost"
          outline="0"
          onClick={addTodo}
        >
          Add
        </Button>
      </Center>
      <Center mt="8" mb={["4", "6", "8", "10"]}>
        <div>
          {todos.map((todo) => (
            <TodoList
              key={todo.id}
              todo={todo.todo}
              inprogress={todo.inprogress}
              id={todo.id}
            />
          ))}
        </div>
      </Center>

      <Center mb="8">
        <Text color="#11344e">Created by © Md Taufikur Rahman</Text>
      </Center>
    </>
  );
};
