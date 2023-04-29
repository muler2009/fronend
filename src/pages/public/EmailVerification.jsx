import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useVerifyMutation } from "../../api/apiSlice";
import SuccessMessage from "../../components/ui/SuccessMessage";
import Loading from "../public/components/Loading";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

const showSuccessAlert = () => {
  MySwal.fire({
    width: 600,
    heightAuto: true,
    padding: 0,
    position: "top",
    showConfirmButton: false,
    icon: "success",
    iconColor: "green",
    timerProgressBar: true,
    padding: 10,
    footer: <p className="font-Poppins">Best place to learn</p>,
    html: (
      <div className={`w-full flex flex-col gap-5 h-full relative`}>
        <div className={`py-2`}>
          <h1 className={`font-Oswald text-4xl tracking-wide text-green-400 `}>
            Successfully Verified!
          </h1>
        </div>
        <div
          className={`py-5 w-3/4 mx-auto before:absolute before:bg-[#ddd] before:content[""] before:h-[1px] before:w-full before:left-0 before:my-2 `}
        >
          <h1 className={`text-center mt-5 font-Oswald tracking-wide text-2xl`}>
            Congratulations
            <br />
            <span className={`font-Poppins text-[15px]`}>
              your email has been successfully verified.
            </span>
          </h1>
        </div>

        <div className={`mx-auto w-2/3 font-Poppins leading-9`}>
          <h1 className={`text-sm py-4`}>
            <span>
              <a
                href="/login"
                className={`font-Poppins text-blue-500 hover:underline text-sm mr-2`}
                onClick={() => Swal.close()}
              >
                Login
              </a>
            </span>
          </h1>
        </div>
      </div>
    ),
  });
};

const EmailVerification = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [verifyStudent, { isLoading: isVerifyStudentLoading }] =
    useVerifyMutation();

  useEffect(async () => {
    await verifyStudent({
      token: params?.token,
    })
      .then((res) => {
        console.log(res);
        if (res?.data?.success) {
          showSuccessAlert(); // navigate("/login");
        } else {
          toast.error(res.error.data.title);
        }
      })
      .catch((err) => toast.error("Data is not saved"));
  }, [params]);
  return (
    <React.Fragment>
      <main
        className={`flex flex-col items-stretch bg-grey-lighter min-h-screen`}
      >
        <div className="h-20"></div>
        <div class="flex-1 text-center mt-15">
          <p className="text-lg  mt-15 mb-5">
            Wait until your email is verified
          </p>
          <Loading />
        </div>
        <footer className="w-full relative bottom-0 grid place-content-center bg-[#0073aa] overflow-hidden">
          <h6 className="font-Poppins text-sm py-5">
            &copy; 2023 ieXitTutor.com
          </h6>
        </footer>
      </main>
    </React.Fragment>
  );
};

export default EmailVerification;
