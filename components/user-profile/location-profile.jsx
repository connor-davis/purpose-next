"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { useUser } from "@clerk/nextjs";

const LocationUserProfileDetails = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return <div>Location</div>;
};

export default LocationUserProfileDetails;
