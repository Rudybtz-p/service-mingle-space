import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="flex w-full max-w-2xl mx-auto gap-2">
      <Input
        type="text"
        placeholder="Search for services..."
        className="flex-1"
      />
      <Button>
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  );
};