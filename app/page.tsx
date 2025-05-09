import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Rutherford Pet Tracker</h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About</NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Card>
        <CardHeader>
          <CardTitle>Pet Tracker</CardTitle>
        </CardHeader>
      </Card>
      <div className="flex flex-col">
        <Button variant="submit">SUBMIT</Button>
        <Button variant="action" size="lg">Book a Demo</Button>

      </div>
    </div>
  );
}
