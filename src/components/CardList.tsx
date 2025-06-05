import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { User2 } from "lucide-react";
import { Badge } from "./ui/badge";


const popularContent = [
  {
    id: 1,
    title: "Exploring the Cosmos",
    badge: "Science",
    image: User2,
    count: 1240
  },
  {
    id: 2,
    title: "Mastering JavaScript",
    badge: "Programming",
    image: User2,
    count: 987
  },
  {
    id: 3,
    title: "Healthy Living Tips",
    badge: "Lifestyle",
    image: User2,
    count: 1523
  },
  {
    id: 4,
    title: "10 Travel Destinations",
    badge: "Travel",
    image: User2,
    count: 2019
  },
  {
    id: 5,
    title: "Photography Basics",
    badge: "Art",
    image: User2,
    count: 678
  },
];

const latestTransactions = [
  {
    id: 1,
    title: "Alice Johnson",
    badge: "Completed",
    image: User2,
    count: 250
  },
  {
    id: 2,
    title: "Mark Lee",
    badge: "Pending",
    image: User2,
    count: 700
  },
  {
    id: 3,
    title: "Freelance Hub",
    badge: "Processing",
    image: User2,
    count: 400
  },
  {
    id: 4,
    title: "Diana Gularus",
    badge: "Completed",
    image: User2,
    count: 100
  },
  {
    id: 5,
    title: "Deny Phant",
    badge: "Completed",
    image: User2,
    count: 300
  },
  {
    id: 6,
    title: "Jimmy Moore",
    badge: "Completed",
    image: User2,
    count: 400
  },
];


const CardList = ({title}:{title:string}) => {

    const list = title === "Popular Content" ? popularContent : latestTransactions

    return (
        <div className="">
            <h1 className="text-lg font-medium mb-6">{title}</h1>
            <div className="flex flex-col gap-2">
                {list.map(item=>(
                    <Card key={item.id} className="flex-row items-center justify-between gap-4 p-4">
                        <div className="w-10 rounded-sm relative overflow-hidden">
                            {/* <Image
                                src="<{item.image} />"
                                alt="Example"
                                fill
                                style={{ objectFit: "cover" }}
                            /> */}
                            <User2 />
                        </div>
                        <CardContent className="p-0  w-4/5">
                            <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                            <Badge variant="outline">{item.badge}</Badge>
                        </CardContent>
                        <CardFooter className="p-0">{item.count/1000}K</CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default CardList