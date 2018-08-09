import React from "react";
import { ThemeContext } from "../themeContext";

export default props => (
  <ThemeContext.Consumer>
    {context => {
      console.log("context: ", context);
      return (
        <div className="about-component content-wrapper"
        style={{
            background: context.theme.background,
            color: context.theme.color
        }}>
          <h3>About</h3>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ipsum cumque, quaerat saepe officiis quos quis
            fuga? Debitis in laboriosam quisquam sunt possimus minus rerum vero dolores? Ullam, earum ea?
          </p>
        </div>
      );
    }}
  </ThemeContext.Consumer>
);
