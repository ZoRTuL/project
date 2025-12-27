"use client"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";


export default function Contact() {

    const [result, setResult] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        formData.append("phone", phone);
        formData.append("access_key", "62584c8b-c39a-401d-a545-ad909a27c115");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };


    return (
        <>
            <div className="py-24 bg-gray-50">
                <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
                    Зв'яжіться з нами зараз
                </h2>
                <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl mx-auto py-10">
                    <div className="flex flex-col items-center gap-3 w-40">
                        <img src="/telephone.png" className="w-20" alt="" />
                        <a
                            href="tel:+380000000000"
                            className="w-full text-center py-3 rounded-lg bg-amber-200 backdrop-blur text-black shadow-md hover:-translate-y-1 hover:shadow-xl transition"
                        >
                            Call us
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-40">
                        <img src="/mail.png" className="w-20" alt="" />
                        <a
                            href="mailto:example@gmail.com"
                            className="w-full text-center py-3 rounded-lg bg-amber-200 backdrop-blur text-black shadow-md hover:-translate-y-1 hover:shadow-xl transition"
                        >
                            Email
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-40">
                        <img src="/viber.png" className="w-20" alt="" />
                        <a
                            href="viber://chat?number=+380000000000"
                            className="w-full text-center py-3 rounded-lg bg-amber-200 backdrop-blur text-black shadow-md hover:-translate-y-1 hover:shadow-xl transition"
                        >
                            Viber
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-40">
                        <img src="/round.png" className="w-20" alt="" />
                        <a
                            href="https://t.me/your_username"
                            target="_blank"
                            className="w-full text-center py-3 rounded-lg bg-amber-200 backdrop-blur text-black shadow-md hover:-translate-y-1 hover:shadow-xl transition"
                        >
                            Telegram
                        </a>
                    </div>

                    <div className="flex flex-col items-center gap-3 w-40">
                        <img src="/social.png" className="w-20" alt="" />
                        <a
                            href="https://wa.me/380000000000"
                            target="_blank"
                            className="w-full text-center py-3 rounded-lg bg-amber-200 backdrop-blur text-black shadow-md hover:-translate-y-1 hover:shadow-xl transition"
                        >
                            Whatsapp
                        </a>
                    </div>
                </div>

                <div className="mt-20">
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">Або залиште номер, ми вам передзвонимо</h2>
                    <div>
                        <form onSubmit={onSubmit} className="flex flex-col gap-3 w-[50%] m-auto">
                            <PhoneInput
                                country={"ua"}
                                onlyCountries={["ua"]}
                                disableDropdown={true}
                                disableCountryCode={false}
                                countryCodeEditable={false}
                                value={phone}
                                onChange={(value) => setPhone(value)}
                                inputProps={{
                                    name: "phone",
                                    required: true,
                                }}
                                masks={{ ua: "(..) ... .. .." }}
                                inputClass="!w-full !rounded-xl !border"
                            />
                            <button className="bg-blue-600 text-white py-3 rounded-xl">Надіслати</button>
                            <p>{result}</p>
                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}