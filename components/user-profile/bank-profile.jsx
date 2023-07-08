"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useUser } from "@clerk/nextjs";

const BankUserProfileDetails = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return <div>Bank</div>;
};

export default BankUserProfileDetails;
