"use client"
import { Textarea } from "@heroui/react"
import InputField from "../../InputField"
import CustomButton from "../../Buttons/CustomButton"

const ContactUsForm = () => {
    return (
        <form className="w-full flex flex-col gap-9">
            <div className="relative grid grid-cols-1 w-full">
                <InputField classNames={{
                    inputWrapper: "border-1 border-cool-gray bg-white !px-2",
                    label: "!mb-2 font-normal text-sm text-smoky-black"
                }}
                    label="First Name"
                    placeholder="Type Here"
                    type="text"
                />
            </div>
            <div className="relative grid grid-cols-1 w-full">
                <InputField classNames={{
                    inputWrapper: "border-1 border-cool-gray bg-white !px-2",
                    label: "!mb-2 font-normal text-sm text-smoky-black"
                }}
                    label="Last Name"
                    placeholder="Type Here"
                    type="text"
                />
            </div>
            <div className="relative grid grid-cols-1 w-full">
                <InputField classNames={{
                    inputWrapper: "border-1 border-cool-gray bg-white !px-2",
                    label: "!mb-2 font-normal text-sm text-smoky-black"
                }}
                    label="Phone Number"
                    placeholder="Type Here"
                    type="number"
                />
            </div>
            <div className="relative grid grid-cols-1 w-full">
                <InputField classNames={{
                    inputWrapper: "border-1 border-cool-gray bg-white !px-2",
                    label: "!mb-2 font-normal text-sm text-smoky-black"
                }}
                    label="Email"
                    placeholder="Type Here"
                    type="email"
                />
            </div>
            <div className="relative grid grid-cols-1 w-full">
                <Textarea
                    className="col-span-12 md:col-span-6 mb-6 md:mb-0"
                    classNames={{
                        inputWrapper: "border-1 border-cool-gray bg-white !px-2 rounded-none",
                        label: "!mb-2 font-normal text-sm text-smoky-black"
                    }}
                    label="Message"
                    labelPlacement="outside"
                    placeholder="Message"
                    variant={"bordered"}
                />
            </div>
            <div className="w-full">
                <CustomButton className="w-44">
                    SUBMIT
                </CustomButton>
            </div>
        </form>
    )
}

export default ContactUsForm