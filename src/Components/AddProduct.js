import {
  FormControl,
  Input,
  FormLabel,
  Box,
  Heading,
  Button,
  Spacer,
  CircularProgress,
} from "@chakra-ui/react";
import { useState } from "react";
import { InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import axios from "axios";

const AddProduct = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [brand, setbrand] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalOrdersValue, setTotalOrdersValue] = useState(0);
  const [grossMargin, setGrossMargin] = useState(0);

  const handleAddProduct = () => {
    setIsLoaded(true);
    var date = new Date();
    date.toISOString();
    const data = {
      brand: brand,
      transactionType: transactionType,
      totalOrders: totalOrders,
      totalOrderValue: totalOrdersValue,
      grossMarginPercentage: grossMargin,
      date: date.toISOString(),
    };
    console.log(data);
    axios
      .post("http://localhost:5000/api/v1/brand-sales-daily", data)
      .then((res) => {
        console.log(res);
        setIsLoaded(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <InputGroup size="lg" marginTop={"6"}>
        <Input pr="10rem" />
        <InputRightElement width="7rem">
          <Button h="2.25rem" size="md" onClick={() => setIsOpen(!isOpen)}>
            Add Row
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button
        // onClick={() => setIsOpen(!isOpen)}
        style={{ float: "right", marginTop: "10px" }}
        colorScheme="facebook"
      >
        Place Order
      </Button>

      {isOpen && (
        <Box marginTop={20}>
          <Heading>Add Product</Heading>
          <Spacer height={5} />
          <FormControl>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                <FormLabel>Brand</FormLabel>
                <Input
                  onChange={(e) => {
                    setbrand(e.target.value);
                  }}
                  width={"90%"}
                  type="text"
                />
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <FormLabel>Transaction Type</FormLabel>
                <Input
                  onChange={(e) => {
                    setTransactionType(e.target.value);
                  }}
                  width={"90%"}
                  type="text"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                <FormLabel>Total Orders</FormLabel>
                <Input
                  onChange={(e) => {
                    setTotalOrders(e.target.value);
                  }}
                  width={"90%"}
                  type="number"
                />
              </div>
              <div
                style={{
                  width: "50%",
                }}
              >
                <FormLabel> Total Order Value</FormLabel>
                <Input
                  onChange={(e) => {
                    setTotalOrdersValue(e.target.value);
                  }}
                  width={"90%"}
                  type="number"
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div
                style={{
                  width: "50%",
                }}
              >
                <FormLabel> Gross Margin Percentage</FormLabel>
                <Input
                  onChange={(e) => {
                    setGrossMargin(e.target.value);
                  }}
                  width={"90%"}
                  type="number"
                />
              </div>
              <div
                style={{
                  width: "50%",
                }}
              />
            </div>
            <Button
              onClick={isLoaded ? null : handleAddProduct}
              marginTop={6}
              width={"10%"}
              color={"white"}
              bg={"blue.900"}
            >
              {isLoaded ? (
                <CircularProgress isIndeterminate size="24px" />
              ) : (
                <p>Submit</p>
              )}
            </Button>
          </FormControl>
        </Box>
      )}
    </>
  );
};

export default AddProduct;
