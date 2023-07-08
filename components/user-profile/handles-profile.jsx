"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useUser } from "@clerk/nextjs";

const HandlesUserProfileDetails = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return <div>Handles</div>;
};

export default HandlesUserProfileDetails;
