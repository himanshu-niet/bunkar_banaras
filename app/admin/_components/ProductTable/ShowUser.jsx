
import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio } from "@nextui-org/react";
import axios from "axios";

export default function ShowUser({userId}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(()=>{
    getApi()
      },[])
    
      const [data,setData]=useState();
    
      const getApi=async ()=>{
        axios.get(`/api/admin/users/byId?id=${userId}`).then((res)=>{
          setData(res.data.data)
        })
      }

      if(!data) return ;


  return (
    <div>
      <Button color="primary" endContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>} onPress={onOpen}>
    Show User
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
                User
              </ModalHeader>
              <ModalBody>
               
              <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                    Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                    <th scope="col" className="px-6 py-3">
                    Phone
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Created At
                    </th>
                   
                  </tr>
                </thead>
                <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {data.email}
                </th>

                <td className="px-6 py-4">{data.name}</td>
                <td className="px-6 py-4">{data.phone}</td>
                <td className="px-6 py-4">{data.createdAt}</td>
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
