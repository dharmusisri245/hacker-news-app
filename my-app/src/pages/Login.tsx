



import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

import { useAuth } from "../hooks/useAuth";

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

const Login = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      setError("");

      const data =
        await loginUser(
          email,
          password
        );

      login(data);

      toast.success(
        "Login successfully!"
      );

      navigate("/");

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
              Login
            </CardTitle>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >
              
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
                  : "Login"}
              </Button>

              <p className="text-sm text-center">
                Don't have an account?{" "}
                
                <Link
                  to="/register"
                  className="text-blue-500 hover:underline"
                >
                  Register
                </Link>
              </p>

            </form>
          </CardContent>

        </Card>

      </div>
    </div>
  );
};

export default Login;