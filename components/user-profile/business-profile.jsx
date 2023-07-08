"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useUser } from "@clerk/nextjs";

const BusinessUserProfileDetails = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return <div>Business</div>;
};

export default BusinessUserProfileDetails;
