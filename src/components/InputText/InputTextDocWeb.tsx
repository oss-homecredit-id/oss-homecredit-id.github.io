import React, { FC } from "react";
import { InputText } from "./InputText";
// import TabItem from "@theme/TabItem"; can't import into component need help for this

const test = () => {
  return (
    <>
      ```tsx
      <InputText
        label="label name"
        id="inputText"
        value="asd"
        placeholder="input text"
        errorText="hi"
      />
      ```
    </>
  );
};

export const InputTextDocWeb = (props: any) => {
  // const { TabItem } = props;
  // console.log(TabItem);
  return (
    // <TabItem>
    <div className="component_usage_frame">
      <div className="component_usage_container">
        <div className="component_usage_preview">
          <InputText
            label="label name"
            id="inputText"
            value="asd"
            placeholder="input text"
            errorText="hi"
          />
        </div>
        <div className="component_usage_option">
          <input type="checkbox" value="1" />
        </div>
      </div>
      ```tsx
      <InputText
        label="label name"
        id="inputText"
        value="asd"
        placeholder="input text"
        errorText="hi"
      />
      ```
    </div>
    // </TabItem>
  );
};
