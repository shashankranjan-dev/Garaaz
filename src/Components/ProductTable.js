import { Table, Thead, Tbody, Tr, Th, Td, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/brand-sales-daily")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Table variant="striped">
      <Thead h={20} bg="#1A365D">
        <Tr>
          <Th textAlign="center" color={"white"} fontSize="md">
            SL No.
          </Th>
          <Th textAlign="center" color={"white"} fontSize="md">
            Brand
          </Th>
          <Th textAlign="center" color={"white"} fontSize="md">
            Transaction Type
          </Th>
          <Th textAlign="center" color={"white"} fontSize="md">
            Total Orders
          </Th>
          <Th textAlign="center" color={"white"} fontSize="md">
            Total Order Value
          </Th>
          <Th textAlign="center" color={"white"} fontSize="md">
            Gross Margin Percentage
          </Th>
          <Th textAlign="center" color={"white"} fontSize="md">
            Action
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        {products.map((product, index) => (
          <>
            <Tr>
              <Td textAlign="center" fontSize="md">
                {index + 1}
              </Td>
              <Td textAlign="center" fontSize="md">
                {product.brand}
              </Td>
              <Td textAlign="center" fontSize="md">
                {product.transactionType}
              </Td>
              <Td textAlign="center" fontSize="md">
                {product.totalOrders}
              </Td>
              <Td textAlign="center" fontSize="md">
                {product.totalOrderValue}
              </Td>
              <Td textAlign="center" fontSize="md">
                {product.grossMarginPercentage}
              </Td>
              <Td textAlign="center" fontSize="md">
                <IconButton
                  colorScheme="facebook"
                  aria-label="Call Segun"
                  size="lg"
                  icon={<DeleteIcon />}
                />
              </Td>
              {/* <Td>
                <Stack direction="row" spacing={4} align="center">
                  
                  <Button colorScheme="purple" variant="solid">
                    Edit
                  </Button>
                </Stack>
              </Td> */}
            </Tr>
          </>
        ))}
      </Tbody>
    </Table>
  );
};

export default ProductTable;
