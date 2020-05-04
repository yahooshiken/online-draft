import React from "react";
import { render } from "react-dom";

const root = document.getElementById("root");

interface IAppProps {
  appName: string;
}
const App = ({ appName }: IAppProps) => <div>{appName}</div>;

render(<App appName="hello" />, root);
