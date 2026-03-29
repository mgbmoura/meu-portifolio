import { PromptGenerator } from "@/components/prompt-generator";

export default function Home() {
  return (
    <div className="container mx-auto max-w-3xl py-10 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight lg:text-5xl">
          Unleash Your Creativity
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Select your themes and let IdeaSpark generate a unique prompt to ignite your next masterpiece.
        </p>
      </div>
      <PromptGenerator />
    </div>
  );
}
