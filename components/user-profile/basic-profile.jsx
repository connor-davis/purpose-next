"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useUser } from "@clerk/nextjs";

const BasicUserProfileDetails = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return <div>Basic</div>;
};

export default BasicUserProfileDetails;
