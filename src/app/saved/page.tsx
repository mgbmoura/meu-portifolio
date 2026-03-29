import { SavedPromptsList } from "@/components/saved-prompts-list";

export default function SavedPage() {
  return (
    <div className="container mx-auto max-w-5xl py-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
          Your Saved Sparks
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Revisit your favorite creative prompts anytime.
        </p>
      </div>
      <SavedPromptsList />
    </div>
  );
}
