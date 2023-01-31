import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import ProductCard from "../index";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <div>
      <ProductCard />
      <h1>disable</h1>
      <ProductCard type="disable" />
      <h1>small</h1>
      <ProductCard size="small" />
    </div>
  );
});
