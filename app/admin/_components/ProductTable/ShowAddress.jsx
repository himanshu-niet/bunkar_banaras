
import React, { useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";

export default function ShowAddress({address}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <Button color="primary" endContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>} onPress={onOpen}>
    Show Address
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
                Address
              </ModalHeader>
              <ModalBody>
               
              <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                    Street
                    </th>
                    <th scope="col" className="px-6 py-3">
                    City
                  </th>
                    <th scope="col" className="px-6 py-3">
                    State
                    </th>
                    <th scope="col" className="px-6 py-3">
                    PostalCode
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Country
                    </th>

                  </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {address.street}
                </th>

                <td className="px-6 py-4">{address.city}</td>
                <td className="px-6 py-4">{address.state}</td>
                <td className="px-6 py-4">{address.postalCode}</td>
                <td className="px-6 py-4">{address.country}</td>
              </tr>         </tbody>
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
