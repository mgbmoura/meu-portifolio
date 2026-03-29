"use client";

import { useEffect, useState } from "react";
import { Share2, Trash2, Info } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { useLocalStorage } from "@/lib/hooks";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
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
} from "@/components/ui/alert-dialog"


export function SavedPromptsList() {
  const [prompts, setPrompts] = useLocalStorage<string[]>("saved-prompts", []);
  const [isClient, setIsClient] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleRemovePrompt = (promptToRemove: string) => {
    setPrompts(prompts.filter((p) => p !== promptToRemove));
    toast({
      title: "Prompt Removed",
      description: "The prompt has been removed from your saved list.",
    });
  };

  const handleSharePrompt = async (promptToShare: string) => {
    const shareData = {
      title: "IdeaSpark Prompt",
      text: promptToShare,
    };
    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(promptToShare);
        toast({
          title: "Copied to Clipboard!",
          description: "Prompt copied. You can now paste it to share.",
        });
      }
    } catch (error) {
      console.error("Error sharing:", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Could not share or copy the prompt.",
      });
    }
  };

  if (!isClient) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
                <Card key={i} className="h-48 animate-pulse bg-muted"></Card>
            ))}
        </div>
    );
  }

  if (prompts.length === 0) {
    return (
      <div className="text-center py-16 px-4 border-2 border-dashed rounded-lg">
        <Info className="mx-auto h-12 w-12 text-muted-foreground" />
        <h3 className="mt-4 text-lg font-medium text-muted-foreground">No Saved Prompts Yet</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Go to the generator to create and save your first creative spark!
        </p>
        <Button asChild className="mt-6">
          <a href="/">Generate Prompts</a>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {prompts.map((prompt, index) => (
          <motion.div
            key={prompt}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <Card className="flex flex-col h-full">
              <CardContent className="flex-1 p-6">
                <p className="leading-relaxed">{prompt}</p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2 p-4 bg-muted/50">
                 <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete this prompt from your saved list.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={() => handleRemovePrompt(prompt)}>Delete</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>

                <Button variant="ghost" size="icon" onClick={() => handleSharePrompt(prompt)}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
