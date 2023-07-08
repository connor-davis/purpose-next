import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BankUserProfileDetails from "@/components/user-profile/bank-profile";
import BasicUserProfileDetails from "@/components/user-profile/basic-profile";
import BusinessUserProfileDetails from "@/components/user-profile/business-profile";
import HandlesUserProfileDetails from "@/components/user-profile/handles-profile";
import LocationUserProfileDetails from "@/components/user-profile/location-profile";

const UserProfilePage = () => {
  return (
    <Card className="flex flex-col w-full h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-medium cookie">
          User Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <Tabs defaultValue="basic">
          <TabsList>
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="business">Business</TabsTrigger>
            <TabsTrigger value="handles">Handles</TabsTrigger>
            <TabsTrigger value="bank">Bank</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>
          <TabsContent value="basic">
            <BasicUserProfileDetails />
          </TabsContent>
          <TabsContent value="business">
            <BusinessUserProfileDetails />
          </TabsContent>
          <TabsContent value="handles">
            <HandlesUserProfileDetails />
          </TabsContent>
          <TabsContent value="bank">
            <BankUserProfileDetails />
          </TabsContent>
          <TabsContent value="location">
            <LocationUserProfileDetails />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserProfilePage;
