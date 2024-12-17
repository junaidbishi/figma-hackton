"use client"

import { NavigationMenuDemo } from "@/app/components/navigationmenu"
import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button >
            <FiMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
              
            </SheetHeader>
            
            <ul>
    <li className="grid grid-cols-1 gap-y-4">
        <Link href={""}><NavigationMenuDemo/></Link>
        <Link className="ml-3" href={""}>Brands</Link>
        <Link className="ml-3"  href={""}>New arrival</Link>
        <Link className="ml-3" href={""}>On sale</Link>
    </li>

    </ul>
              
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
