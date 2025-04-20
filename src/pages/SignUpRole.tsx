
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Wrench, User } from "lucide-react";

const SignUpRole = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Choose your role</h2>
          <p className="mt-2 text-sm text-gray-600">
            Select how you want to use our platform
          </p>
        </div>

        <div className="mt-8 space-y-4">
          <Button
            onClick={() => navigate("/signup/client")}
            className="w-full p-4 h-auto flex items-center justify-center space-x-4 bg-primary hover:bg-primary/90"
          >
            <User className="h-6 w-6" />
            <div className="text-left">
              <div className="font-semibold">Join as a Client</div>
              <div className="text-sm opacity-90">
                Find and hire skilled handymen for your projects
              </div>
            </div>
          </Button>

          <Button
            onClick={() => navigate("/signup/handyman")}
            className="w-full p-4 h-auto flex items-center justify-center space-x-4 bg-[#F6AC3D] hover:bg-[#F6AC3D]/90"
          >
            <Wrench className="h-6 w-6" />
            <div className="text-left">
              <div className="font-semibold">Join as a Handyman</div>
              <div className="text-sm opacity-90">
                Offer your services and connect with clients
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpRole;
