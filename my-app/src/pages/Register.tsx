// import { useState } from "react";

// import { Link, useNavigate } from "react-router-dom";

// import { registerUser } from "../services/authService";

// import { toast } from "react-toastify";

// import { Button } from "../components/ui/button";

// import { Input } from "../components/ui/input";

// import { Label } from "../components/ui/label";

// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "../components/ui/card";

// const Register = () => {
//   const navigate = useNavigate();

//   const [name, setName] =
//     useState("");

//   const [email, setEmail] =
//     useState("");

//   const [password, setPassword] =
//     useState("");

//   const [loading, setLoading] =
//     useState(false);

//   const [error, setError] =
//     useState("");

//   const handleSubmit = async (
//     e: React.FormEvent
//   ) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       setError("");

//       await registerUser(
//         name,
//         email,
//         password
//       );

//       toast.success(
//         "Register successfully! Please login."
//       );

//       navigate("/login");

//     } catch (error: any) {

//       const message =
//         error.response?.data?.message ||
//         "Something went wrong";

//       setError(message);

//       toast.error(message);

//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen grid place-items-center px-4 py-10">
//       <div className="w-full max-w-md border-2 border-black rounded-2xl p-1">
        
//         <Card className="rounded-2xl shadow-lg">
          
//           <CardHeader className="space-y-2 text-center">
//             <CardTitle className="text-2xl font-bold">
//               Create Account
//             </CardTitle>
//           </CardHeader>

//           <CardContent>
//             <form
//               onSubmit={handleSubmit}
//               className="grid gap-5"
//             >
              
//               <div className="grid gap-2">
//                 <Label>
//                   Name
//                 </Label>

//                 <Input
//                   type="text"
//                   placeholder="Enter your name"
//                   value={name}
//                   onChange={(e) =>
//                     setName(
//                       e.target.value
//                     )
//                   }
//                   className="h-12 rounded-xl"
//                 />
//               </div>

//               <div className="grid gap-2">
//                 <Label>
//                   Email
//                 </Label>

//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) =>
//                     setEmail(
//                       e.target.value
//                     )
//                   }
//                   className="h-12 rounded-xl"
//                 />
//               </div>

//               <div className="grid gap-2">
//                 <Label>
//                   Password
//                 </Label>

//                 <Input
//                   type="password"
//                   placeholder="Enter password"
//                   value={password}
//                   onChange={(e) =>
//                     setPassword(
//                       e.target.value
//                     )
//                   }
//                   className="h-12 rounded-xl"
//                 />
//               </div>

//               {error && (
//                 <p className="text-sm text-red-500">
//                   {error}
//                 </p>
//               )}

//               <Button
//                 type="submit"
//                 className="w-full h-12 rounded-xl"
//                 disabled={loading}
//               >
//                 {loading
//                   ? "Loading..."
//                   : "Register"}
//               </Button>

//               <p className="text-sm text-center">
//                 Already have an account?{" "}
                
//                 <Link
//                   to="/login"
//                   className="text-blue-500 hover:underline"
//                 >
//                   Login
//                 </Link>
//               </p>

//             </form>
//           </CardContent>

//         </Card>

//       </div>
//     </div>
//   );
// };

// export default Register;




import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../services/authService";

import { toast } from "react-toastify";

import { Button } from "../components/ui/button";

import { Input } from "../components/ui/input";

import { Label } from "../components/ui/label";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  // =========================
  // Email Validation
  // =========================

  const validateEmail = (
    email: string
  ) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    // =========================
    // Validation
    // =========================

    if (
      !name ||
      !email ||
      !password
    ) {
      const message =
        "All fields are required";

      setError(message);

      toast.error(message);

      return;
    }

    if (name.length < 3) {
      const message =
        "Name must be at least 3 characters";

      setError(message);

      toast.error(message);

      return;
    }

    if (!validateEmail(email)) {
      const message =
        "Please enter valid email";

      setError(message);

      toast.error(message);

      return;
    }

    if (password.length < 6) {
      const message =
        "Password must be at least 6 characters";

      setError(message);

      toast.error(message);

      return;
    }

    try {
      setLoading(true);

      setError("");

      await registerUser(
        name,
        email,
        password
      );

      toast.success(
        "Register successfully! Please login."
      );

      navigate("/login");

    } catch (error: any) {

      const message =
        error.response?.data?.message ||
        "Something went wrong";

      setError(message);

      toast.error(message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-items-center px-4 py-10">
      <div className="w-full max-w-md border-2 border-black rounded-2xl p-1">
        
        <Card className="rounded-2xl shadow-lg">
          
          <CardHeader className="space-y-2 text-center">
            <CardTitle className="text-2xl font-bold">
              Create Account
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >
              
              <div className="grid gap-2">
                <Label>
                  Name
                </Label>

                <Input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) =>
                    setName(
                      e.target.value
                    )
                  }
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <Label>
                  Email
                </Label>

                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) =>
                    setEmail(
                      e.target.value
                    )
                  }
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="grid gap-2">
                <Label>
                  Password
                </Label>

                <Input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) =>
                    setPassword(
                      e.target.value
                    )
                  }
                  className="h-12 rounded-xl"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="w-full h-12 rounded-xl"
                disabled={loading}
              >
                {loading
                  ? "Loading..."
                  : "Register"}
              </Button>

              <p className="text-sm text-center">
                Already have an account?{" "}
                
                <Link
                  to="/login"
                  className="text-blue-500 hover:underline"
                >
                  Login
                </Link>
              </p>

            </form>
          </CardContent>

        </Card>

      </div>
    </div>
  );
};

export default Register;