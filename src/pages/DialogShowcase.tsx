
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, ChevronsUpDown } from "lucide-react";

const DialogShowcase = () => {
  const [commandOpen, setCommandOpen] = useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setCommandOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <div className="container py-10 space-y-12">
      <h1 className="text-3xl font-bold tracking-tight mb-6">Dialog and Modal Components</h1>
      
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic Dialog</h2>
        <p className="text-muted-foreground mb-4">The standard dialog component for showing modal content.</p>
        
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Basic Dialog</DialogTitle>
                <DialogDescription>
                  This is a basic dialog that can be used to display information or collect user input.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                Dialog content goes here. This can include forms, information, or any other content.
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="secondary">Close</Button>
                </DialogClose>
                <Button type="button">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alert Dialog</h2>
        <p className="text-muted-foreground mb-4">Used for important actions that require confirmation.</p>
        
        <div className="flex items-center gap-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Item</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account
                  and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Sheet</h2>
        <p className="text-muted-foreground mb-4">A dialog that slides in from the edge of the screen.</p>
        
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit Profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when you're done.
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                Sheet content goes here. This is useful for larger forms or content that needs more space.
              </div>
              <SheetFooter>
                <Button type="submit">Save changes</Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">Sheet (Left)</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>Left Side Sheet</SheetTitle>
                <SheetDescription>
                  This sheet slides in from the left side of the screen.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Drawer</h2>
        <p className="text-muted-foreground mb-4">A dialog that slides up from the bottom of the screen, commonly used on mobile.</p>
        
        <div className="flex items-center gap-4">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="outline">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Mobile Drawer</DrawerTitle>
                <DrawerDescription>
                  This drawer slides up from the bottom and is commonly used on mobile interfaces.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                Drawer content goes here. This is often used for mobile navigation or actions.
              </div>
              <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Command Dialog</h2>
        <p className="text-muted-foreground mb-4">A command palette for quick actions and navigation (press Ctrl+K or ⌘+K).</p>
        
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => setCommandOpen(true)}
          >
            Open Command Palette
          </Button>
          <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Check className="mr-2 h-4 w-4" />
                  <span>Home</span>
                </CommandItem>
                <CommandItem>
                  <Check className="mr-2 h-4 w-4" />
                  <span>Documentation</span>
                </CommandItem>
                <CommandItem>
                  <Check className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Popover</h2>
        <p className="text-muted-foreground mb-4">A smaller floating dialog that provides contextual information or actions.</p>
        
        <div className="flex items-center gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[200px] justify-between">
                Select option
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput placeholder="Search options..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    <CommandItem className="cursor-pointer">Option 1</CommandItem>
                    <CommandItem className="cursor-pointer">Option 2</CommandItem>
                    <CommandItem className="cursor-pointer">Option 3</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </section>

      <section className="space-y-4 pb-6">
        <h2 className="text-2xl font-semibold">HTML Dialog Element</h2>
        <p className="text-muted-foreground mb-4">Example using the native HTML dialog element.</p>
        
        <div className="flex items-center gap-4">
          <Button
            onClick={() => {
              const dialog = document.getElementById('native-dialog') as HTMLDialogElement;
              dialog?.showModal();
            }}
          >
            Open Native Dialog
          </Button>
          
          <dialog id="native-dialog" className="p-6 rounded-lg shadow-lg backdrop:bg-black/50">
            <h3 className="text-lg font-medium mb-2">Native HTML Dialog</h3>
            <p className="mb-4">This is using the native HTML <code>&lt;dialog&gt;</code> element.</p>
            <div className="flex justify-end">
              <Button 
                onClick={() => {
                  const dialog = document.getElementById('native-dialog') as HTMLDialogElement;
                  dialog?.close();
                }}
              >
                Close
              </Button>
            </div>
          </dialog>
        </div>
      </section>
    </div>
  );
};

export default DialogShowcase;
