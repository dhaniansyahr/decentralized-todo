/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Navbar from "@/components/Navbar";
import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "@/config/smartContracts";
// import { TODO_LIST_ABI, TODO_LIST_ADDRESS } from "@/config/smartContracts";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import Web3 from "web3";

interface Task {
  id: number;
  content: string;
  completed: boolean;
}

export default function Features() {
  const [title, setTitle] = useState<string>("");
  const [todos, setTodos] = useState<Task[]>([]);
  const [account, setAccont] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const connectToWallet = async () => {
    try {
      const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

      const accounts = await web3.eth.getAccounts();

      setAccont(accounts[0]);

      const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
      const taskCount = (await todoList.methods.taskCount().call()) as number;

      // console.log("TODO COUNT FROM CONTRACT : ", taskCount);

      const loadedTasks: Task[] = [];
      for (let i = 1; i <= taskCount; i++) {
        const task: any = await todoList.methods.tasks(i).call();
        console.log("TODO LIST CONTRACT : ", task);
        loadedTasks.push({
          id: task[0],
          content: task[1],
          completed: task[2],
        });
      }

      setTodos(loadedTasks);

      console.log("Connected With metamask Account : ", accounts[0]);
    } catch (error) {
      alert("Error connecting to MetaMask " + error);
      console.log("Error connecting to MetaMask " + error);
    }
  };

  const createTask = async (content: string) => {
    setLoading(true);
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    await todoList.methods
      .createTask(content)
      .send({ from: account })
      .once("receipt", () => {
        setLoading(false);
        connectToWallet();
      });
  };

  const taskCompleted = async (id: number) => {
    setLoading(true);
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

    const todoList = new web3.eth.Contract(TODO_LIST_ABI, TODO_LIST_ADDRESS);
    await todoList.methods
      .toggleCompleted(id)
      .send({ from: account })
      .once("receipt", () => {
        setLoading(false);
        connectToWallet();
      });
  };

  console.log("account", account);
  console.log("TODO CONTRACT : ", todos);

  return (
    <>
      <Navbar account={account} />
      <div className="w-full h-screen bg-primary">
        <div className="flex items-center justify-center h-full flex-col gap-4">
          <p className="text-white font-bold text-4xl">TODO LIST</p>

          <button
            className="rounded-full border border-solid border-white transition-colors flex items-center justify-center text-white gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            onClick={connectToWallet}
          >
            <Icon icon={"logos:ethereum"} width={30} height={30} />
            Connect ur Wallet
          </button>

          <div className="p-6 rounded-lg border border-gray-600 w-[600px] bg-secondary/50 flex flex-col gap-10">
            <div className="flex justify-between gap-6">
              <input
                type="text"
                name="todo"
                id="todo"
                placeholder="Add a new todo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="h-10 bg-transparent border-2 border-primary rounded w-full p-4 text-white placeholder:text-white focus:outline focus:outline-primary/50 focus:border-none"
              />
              <button
                className="h-10 min-w-[100px] bg-transparent border-2 border-primary rounded hover:bg-primary/50 uppercase font-bold text-base text-white"
                onClick={() => {
                  createTask(title);
                  // setTodos([
                  //   ...todos,
                  //   { id: todos.length + 1, title: title, completed: false },
                  // ]);

                  setTitle("");
                }}
              >
                Add
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {loading ? (
                <p className="text-white font-semibold text-lg">Loading...</p>
              ) : (
                <>
                  {todos?.length > 0 ? (
                    todos?.map((todo: any, index: number) => (
                      <div
                        key={index}
                        className="flex flex-row gap-4 justify-between items-center border-b border-white px-4"
                      >
                        <h1 className="font-semibold text-base text-white uppercase">
                          {todo?.content}
                        </h1>
                        <div className="flex flex-shrink items-center">
                          <button
                            className={`${
                              todo.completed ? "text-green-500" : "text-white"
                            } p-4 rounded-full hover:bg-gray-200/10 bg-transparent`}
                            onClick={() => {
                              taskCompleted(todo.id);
                              // setTodos(
                              //   todos.map((t: any) => {
                              //     if (t.id === todo.id) {
                              //       t.completed = !t.completed;
                              //     }
                              //     return t;
                              //   })
                              // );
                            }}
                          >
                            <Icon icon="ic:round-check" width={20} />
                          </button>
                          {/* <button
                            className="text-red-500 p-4 rounded-full hover:bg-gray-200/10 bg-transparent"
                            onClick={() => {
                              setTodos(
                                todos.filter((t: any) => t.id !== todo.id)
                              );
                            }}
                          >
                            <Icon icon="ic:outline-delete" width={20} />
                          </button> */}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-white font-semibold text-lg">No Todos</p>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
