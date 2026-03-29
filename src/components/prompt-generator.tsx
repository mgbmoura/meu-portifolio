"use client";

import { useState, useTransition } from "react";
import { Loader2, Save, Share2, Sparkles } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { getAiPrompt } from "@/app/actions";
import { useLocalStorage } from "@/lib/hooks";

const themes = [
  { id: "Writing", label: "Writing" },
  { id: "Art", label: "Art" },
  { id: "Daily Challenge", label: "Daily Challenge" },
] as const;

const FormSchema = z.object({
  themes: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one theme.",
  }),
});

export function PromptGenerator() {
  const [isPending, startTransition] = useTransition();
  const [generatedPrompt, setGeneratedPrompt] = useState<string | null>(null);
  const [savedPrompts, setSavedPrompts] = useLocalStorage<string[]>("saved-prompts", []);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      themes: ["Writing"],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    startTransition(async () => {
      setGeneratedPrompt(null);
      const prompt = await getAiPrompt({ themes: data.themes });
      setGeneratedPrompt(prompt);
    });
  }

  const handleSavePrompt = () => {
    if (!generatedPrompt) return;
    if (savedPrompts.includes(generatedPrompt)) {
      toast({
        title: "Already Saved",
        description: "This prompt is already in your saved list.",
      });
      return;
    }
    setSavedPrompts([...savedPrompts, generatedPrompt]);
    toast({
      title: "Prompt Saved!",
      description: 'You can view it in the "Saved Prompts" section.',
    });
  };

  const handleSharePrompt = async () => {
    if (!generatedPrompt) return;
    const shareData = {
      title: "IdeaSpark Prompt",
      text: generatedPrompt,
    };
    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(generatedPrompt);
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

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Choose Your Themes</CardTitle>
          <CardDescription>
            Select one or more themes to guide the inspiration.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="themes"
                render={() => (
                  <FormItem>
                    <div className="mb-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {themes.map((item) => (
                        <FormField
                          key={item.id}
                          control={form.control}
                          name="themes"
                          render={({ field }) => {
                            return (
                              <FormItem
                                key={item.id}
                                className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 hover:bg-accent/20 transition-colors"
                              >
                                <FormControl>
                                  <Checkbox
                                    checked={field.value?.includes(item.id)}
                                    onCheckedChange={(checked) => {
                                      return checked
                                        ? field.onChange([
                                            ...field.value,
                                            item.id,
                                          ])
                                        : field.onChange(
                                            field.value?.filter(
                                              (value) => value !== item.id
                                            )
                                          );
                                    }}
                                  />
                                </FormControl>
                                <FormLabel className="font-normal cursor-pointer">
                                  {item.label}
                                </FormLabel>
                              </FormItem>
                            );
                          }}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isPending} className="w-full">
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Generate Prompt
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <AnimatePresence>
        {isPending && (
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="min-h-[200px] flex items-center justify-center">
              <div className="text-center text-muted-foreground p-8">
                 <Loader2 className="mx-auto h-8 w-8 animate-spin mb-4 text-primary" />
                 <p className="font-semibold">Sparking an idea...</p>
                 <p className="text-sm">The AI is thinking, please wait a moment.</p>
              </div>
            </Card>
          </motion.div>
        )}
        {generatedPrompt && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-background">
              <CardHeader>
                <CardTitle className="font-headline text-primary">Your Creative Spark!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-medium leading-relaxed">
                  {generatedPrompt}
                </p>
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                <Button variant="outline" onClick={handleSharePrompt}>
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button onClick={handleSavePrompt} className="bg-accent hover:bg-accent/80 text-accent-foreground">
                  <Save className="mr-2 h-4 w-4" />
                  Save
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
