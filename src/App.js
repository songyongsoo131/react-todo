import React, { Component } from "react";
import Form from "./components/Form";
import Palette from "./components/Palette";
import TodoItemList from "./components/TodoItemList";
import TodoListTemplate from "./components/TodoListTemplate";

const colors = ["#343a40", "#f03e3e", "#12b886", "#228ae6"];

class App extends Component {
    id = 3;

    state = {
        input: "",
        todos: [
            { id: 0, text: "Introduce React", checked: false },
            { id: 1, text: "Use JSX", checked: true },
            { id: 2, text: "Understand LifeCycle", checked: false },
        ],
        color: "#343a40",
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });
    };

    handleCreate = () => {
        const { input, todos, color } = this.state;
        this.setState({
            input: "",
            todos: todos.concat({
                id: this.id++,
                text: input,
                checked: false,
                color,
            }),
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.handleCreate();
        }
    };

    handleToggle = (id) => {
        const { todos } = this.state;
        const index = todos.findIndex((todo) => todo.id === id);
        const selected = todos[index];
        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked,
        };

        this.setState({
            todos: nextTodos,
        });
    };

    handleRemove = (id) => {
        const { todos } = this.state;
        this.setState({
            todos: todos.filter((todos) => todos.id !== id),
        });
    };

    handleSelectColor = (color) => {
        this.setState({
            color,
        });
    };

    render() {
        const { input, todos, color } = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleSelectColor,
        } = this;
        return (
            <TodoListTemplate
                form={
                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        color={color}
                    ></Form>
                }
                palette={
                    <Palette
                        colors={colors}
                        selected={color}
                        onSelect={handleSelectColor}
                    ></Palette>
                }
            >
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                ></TodoItemList>
            </TodoListTemplate>
        );
    }
}

export default App;
