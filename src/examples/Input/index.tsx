import { useRef, useState } from "react";

import {
  Layout,
  Heading,
  Icon,
  Input,
  Button,
  TabbedCard,
} from "@mankindui/core";

import { HiOutlineChatBubbleLeft as SpeechIcon } from "react-icons/hi2"; //input + icon example
import {
  HiMagnifyingGlass as SearchIcon,
  HiXMark as CloseIcon,
} from "react-icons/hi2"; //search example
import {
  HiEye as ShowPasswordIcon,
  HiEyeSlash as HidePasswordIcon,
} from "react-icons/hi2"; //password example icons

import Code from "./code.mdx";

const InputExample = () => {
  const [savedData, setSavedData] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false); //password input
  const ref = useRef<HTMLInputElement | null>(null); //input search

  return (
    <TabbedCard componentName="Input">
      <TabbedCard.Preview>
        <>
          <Layout>
            <Heading as="h5" className="text-l">
              Basic input
            </Heading>
            <Input>
              <Input.InputElement
                value={savedData}
                onChange={(event) => {
                  setSavedData(event.target.value);
                }}
              />
            </Input>
          </Layout>

          <Layout>
            <Heading as="h5" className="text-l">
              Input (readonly)
            </Heading>
            <Input>
              <Input.InputElement
                value={savedData}
                readOnly
                onChange={(event) => {
                  setSavedData(event.target.value);
                }}
              />
            </Input>
          </Layout>

          <Layout>
            <Heading as="h5" className="text-l">
              Input + Icon
            </Heading>
            <Input variants={{ variant: "default" }}>
              <Icon size="L">
                <SpeechIcon />
              </Icon>
              <Input.InputElement
                value={savedData}
                placeholder="placeholder"
                onChange={(event) => {
                  setSavedData(event.target.value);
                }}
              />
            </Input>
          </Layout>

          <Layout>
            <Heading as="h5" className="text-l">
              Input Password
            </Heading>
            <Input>
              <Input.InputElement
                value={savedData}
                placeholder={"placeholder"}
                type={passwordVisible ? "text" : "password"}
                onChange={(event) => {
                  setSavedData(event.target.value);
                }}
              />
              <Button
                intent="icon"
                padding="none"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                <Icon size="L">
                  {passwordVisible ? (
                    <HidePasswordIcon />
                  ) : (
                    <ShowPasswordIcon />
                  )}
                </Icon>
              </Button>
            </Input>
          </Layout>

          <Layout>
            <Heading as="h5" className="text-l">
              Input Filter
            </Heading>
            <Input>
              <Icon size="M">
                <SearchIcon />
              </Icon>
              <Input.InputElement
                value={savedData}
                placeholder="placeholder"
                onChange={(event) => {
                  setSavedData(event.target.value);
                }}
              />
              {savedData.length > 0 && (
                <Button
                  intent="icon"
                  padding="none"
                  onClick={() => {
                    setSavedData("");
                  }}
                >
                  <Icon size="M">
                    <CloseIcon />
                  </Icon>
                </Button>
              )}
            </Input>
          </Layout>

          <Layout>
            <Heading as="h5" className="text-l">
              Input Search
            </Heading>
            <Input>
              <Input.InputElement
                ref={ref}
                value={savedData}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  const val = event.target.value;
                  setSavedData(val);
                }}
                placeholder="placeholder"
              />
              <Button
                intent="icon"
                padding="none"
                onClick={() => {
                  if (ref.current) {
                    console.log("value: ", ref.current.value);
                  }
                }}
              >
                <Icon size="M">
                  <SearchIcon />
                </Icon>
              </Button>
            </Input>
          </Layout>

          <Layout>
            <Heading as="h5" className="text-l">
              Input (no-border / no-bg)
            </Heading>
            <Input variants={{ variant: "unstyled" }}>
              <Input.InputElement
                value={savedData}
                placeholder="placeholder"
                onChange={(event) => {
                  setSavedData(event.target.value);
                }}
              />
            </Input>
          </Layout>
        </>
      </TabbedCard.Preview>
      <TabbedCard.Code>
        <Code />
      </TabbedCard.Code>
    </TabbedCard>
  );
};

export default InputExample;
