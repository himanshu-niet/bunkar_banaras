
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

export default function ShowProducts({product}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button color="primary" endContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>} onPress={onOpen}>
    Show Products
      </Button>
     
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={"inside"}
        isDismissable={false}
        size="3xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Product List
              </ModalHeader>
              <ModalBody>
               
              <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Stock
                  </th>
                    <th scope="col" className="px-6 py-3">
                    Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Total Proce
                    </th>

                  </tr>
                </thead>
                <tbody>
{product.map((item,idx)=>{
  return(
    <tr key={idx} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                    {item.title}
                    </th>

                    <td className="px-6 py-4">{item.stock}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.total}</td>
                  </tr>
  )
})}
                </tbody>
              </table>
            </div>
            


              </ModalBody>
              <ModalFooter>
                <div className="flex justify-center items-center">
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>

                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
