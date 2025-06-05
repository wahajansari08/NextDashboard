import CardList from "@/components/CardList"
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Progress } from "@/components/ui/progress"
import { BadgeCheck, Candy, Citrus, LineChart, Shield } from "lucide-react"
import {
  Sheet,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import EditUser from "@/components/EditUser"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const SigleUserPage = () => {
    return(
        <div className="">
            <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink href="/users">Users</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage>John Doe</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
            {/* CONTAINER */}
            <div className="flex mt-4 flex-col xl:flex-row gap-8">
                {/* LEFT */}
                <div className="w-full xl:1/3 space-y-6">
                    {/* USER BADGES CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User Badges</h1>
                        <div className="flex gap-4 mt-4">
                            <HoverCard>
                                <HoverCardTrigger>
                                    <BadgeCheck size={36} className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Verified User</h1>
                                    <p className="text-sm text-muted-foreground">This user has been verified by admin.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Shield size={36} className="rounded-full bg-green-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Admin</h1>
                                    <p className="text-sm text-muted-foreground">Admin users have access to all features and can manage users.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Candy size={36} className="rounded-full bg-yellow-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Awarded</h1>
                                    <p className="text-sm text-muted-foreground">This user has been awarded for their contributions.</p>
                                </HoverCardContent>
                            </HoverCard>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <Citrus size={36} className="rounded-full bg-orange-500/30 border-1 border-blue-500/50 p-2"/>
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <h1 className="font-bold mb-2">Popular</h1>
                                    <p className="text-sm text-muted-foreground">This user has been popular in the community.</p>
                                </HoverCardContent>

                            </HoverCard>

                        </div>
                    </div>
                    {/* INFORMATION CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <div className="flex item-center justify-between">
                            <h1 className="text-xl font-semibold">User Information</h1>
                            <Sheet>
                            <SheetTrigger asChild>
                                <Button>Edit User</Button>
                            </SheetTrigger>
                            <EditUser />
                            </Sheet>
                        </div>
                        <div className="space-y-4 mt-4">
                            <div className="flex flex-col gap-2 mb-8">
                                <p className="text-sm text-muted-foreground">Profile Completition</p>
                                <Progress value={66} />
                            </div>
                            <div className="flex item-center- gap-2">
                                <span className="font-bold">
                                    Username:
                                </span>
                                <span>
                                    John.Doe
                                </span>
                            </div>
                            <div className="flex item-center- gap-2">
                                <span className="font-bold">
                                    Email:
                                </span>
                                <span>
                                    john.doe@mail.com
                                </span>
                            </div>
                            <div className="flex item-center- gap-2">
                                <span className="font-bold">
                                    Phone:
                                </span>
                                <span>
                                    0321654987
                                </span>
                            </div>
                            <div className="flex item-center- gap-2">
                                <span className="font-bold">
                                    Location:
                                </span>
                                <span>
                                    Quebec
                                </span>
                            </div>
                            <div className="flex item-center- gap-2">
                                <span className="font-bold">
                                    Role:
                                </span>
                                <Badge>Admin</Badge>
                            </div>
                        </div>
                        <p className="text-small text-muted-foreground mt-4">Joined on April 2024</p>
                    </div>
                    {/* CARD LIST CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Recent Transactions" />
                    </div>
                </div>
                {/* Right */}
                <div className="w-full xl:2/3 space-y-6">
                    {/* USER CARD CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <div className="flex item-center gap-2">
                            <Avatar className="size-12">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <h2 className="text-xl font-semibold">John Doe</h2>
                        </div>
                            <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui aspernatur debitis obcaecati iste quod quibusdam natus illum fuga quas nulla.</p>
                    </div>
                    {/* CHART CONTAINER */}
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">User activity</h1>
                        <LineChart />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default SigleUserPage