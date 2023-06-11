import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import * as Bs from "react-icons/bs";

const contactChildrens = {
  init: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const subscribtion = [
  {
    title: "Basic",
    cost: 299,
    perQuestion: 200,
    explaination: [
      {
        ex: "With full explanantion",
        demo: "demonestration ",
        recommendations: "Recommendations",
      },
    ],
  },
  {
    title: "Standard",
    cost: 499,
    perQuestion: 500,
    explaination: [
      {
        ex: "With full explanantion",
        demo: "demonestration ",
        recommendations: "Recommendations",
      },
    ],
  },
  {
    title: "Advanced",
    cost: 699,
    perQuestion: "800+",
    explaination: [
      {
        ex: "With full explanantion",
        demo: "demonestration ",
        recommendations: "Recommendations",
      },
    ],
  },
];

export const registration_processes = [
  {
    title: "Register",
    step: "Step",
    step_no: "01",
    process: [
      {
        list_one:
          "Go to https://www.lefetena.com and scroll down to register section or click menu button to signup",
        list_two:
          "Fill up the required information (i.e Full name, email, etc)",
      },
    ],
  },
  {
    title: "Verify Account",
    step: "Step",
    step_no: "02",
    process: [
      {
        list_one:
          "Up on receiving successful registration message Go to your email then click verification link sent from lefetena.com",
        list_two:
          "Once verified, login using the email and password you used during registration",
      },
    ],
  },
  {
    title: "Subscribe",
    step: "Step",
    step_no: "03",
    process: [
      {
        list_one: "Subscribe for the module you want",
        list_two: "Get the payee code",
      },
    ],
  },
  {
    title: "Payment",
    step: "Step",
    step_no: "04",
    process: [
      {
        list_one:
          "Transfer the payment as per the requested module to the bank account listed in lefetena.com website",
      },
    ],
  },
  {
    title: "Unlocking Subscription",
    step: "Step",
    step_no: "05",
    process: [
      {
        list_one:
          "Submit photo/screenshot of the Transfer detail and payee code",
        list_two: (
          <>
            use lefetena.com telegram account to send the required details{" "}
            {
              <div className="flex flex-wrap  gap-4">
                <motion.div
                  variants={contactChildrens}
                  className="flex space-x-3 items-center cursor-pointer md:px-10"
                  onClick={() =>
                    window.open("https://t.me/lefetena_1", "_blank")
                  }
                >
                  <Bs.BsTelegram size={35} color="#00bdff" />
                  <div className="flex flex-col xxxs:pr-16">
                    <h1 className="font-Poppins">Telegram</h1>
                    <p className="font-Poppins text-sm text-[#00bdff] hover:underline">
                      lefetena_1
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  variants={contactChildrens}
                  className="flex space-x-3 items-center cursor-pointer md:px-10"
                  onClick={() =>
                    window.open("https://t.me/lefetena_2", "_blank")
                  }
                >
                  <Bs.BsTelegram size={35} color="#00bdff" />
                  <div className="flex flex-col xxxs:pr-16">
                    <h1 className="font-Poppins">Telegram</h1>
                    <p className="font-Poppins text-sm text-[#00bdff] hover:underline">
                      lefetena_2
                    </p>
                  </div>
                </motion.div>
              </div>
            }{" "}
          </>
        ),
      },
    ],
  },
];
