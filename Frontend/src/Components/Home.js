import { Box, Heading, Button } from "@chakra-ui/react";
import ProductTable from "./ProductTable";
import AddProduct from "./AddProduct";

const Home = () => {
  return (
    <Box p={4}>
      <Button colorScheme="facebook" style={{ float: "right" }}>
        + Import File
      </Button>
      <Heading
        textAlign={"left"}
        marginTop={"10"}
        fontSize={"30"}
        color={"gray"}
      >
        Select Workshop
      </Heading>
      <Box marginTop={"8"}>
        <ProductTable />
      </Box>

      <Box>
        <AddProduct />
      </Box>
    </Box>
  );
};

export default Home;
