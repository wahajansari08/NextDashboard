"use client"
import { Calendar1Icon, CalendarHeartIcon } from "lucide-react"
import { Calendar } from "./ui/calendar"
import { Card } from "./ui/card"
import { Checkbox } from "./ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { ScrollArea } from "./ui/scroll-area"
import { useState } from "react"
import { format } from "date-fns"
import { Button } from "./ui/button"

const TodoList = ()=>{
    const [date,setDate] = useState<Date | undefined>(new Date());
    const [open,setOpen] = useState(false);

    return(
        <div>
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className="w-full">
                        <Calendar1Icon/>
                        {date ? format(date, "PPP") : <span>Pick a Date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-auto">
                    {/* Calender */}
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date)=>{
                            setOpen(false)  
                        }}
                        />
                </PopoverContent>
            </Popover>
            {/* LIST */}
            <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
                <div className="flex flex-col gap-4">
                {/* LIST ITEM */}
                <Card className="p-4">
                    <div className="flex item-center gap-4">
                        <Checkbox id="item1" className="mt-2" checked/>
                        <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugiat.</label>
                    </div>
                </Card>
                {/* LIST ITEM */}
                <Card className="p-4">
                    <div className="flex item-center gap-4">
                        <Checkbox id="item1" className="mt-2" checked/>
                        <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugiat.</label>
                    </div>
                </Card>
                {/* LIST ITEM */}
                <Card className="p-4">
                    <div className="flex item-center gap-4">
                        <Checkbox id="item1" className="mt-2" checked/>
                        <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugiat.</label>
                    </div>
                </Card>
                {/* LIST ITEM */}
                <Card className="p-4">
                    <div className="flex item-center gap-4">
                        <Checkbox id="item1" className="mt-2" checked/>
                        <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugiat.</label>
                    </div>
                </Card>
                {/* LIST ITEM */}
                <Card className="p-4">
                    <div className="flex item-center gap-4">
                        <Checkbox id="item1" className="mt-2" checked/>
                        <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugiat.</label>
                    </div>
                </Card>
                {/* LIST ITEM */}
                <Card className="p-4">
                    <div className="flex item-center gap-4">
                        <Checkbox id="item1" className="mt-2" checked/>
                        <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugiat.</label>
                    </div>
                </Card>
                {/* LIST ITEM */}
                <Card className="p-4">
                    <div className="flex item-center gap-4">
                        <Checkbox id="item1" className="mt-2" checked/>
                        <label htmlFor="item1" className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, fugiat.</label>
                    </div>
                </Card>
                </div>
            </ScrollArea>
        </div>
    )
}
export default TodoList