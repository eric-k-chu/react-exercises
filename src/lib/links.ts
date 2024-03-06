import { PaginationAdvanced } from "@/components/pagination/PaginationAdvanced";
import { Driver as Progress } from "@/components/progress/Driver";
import { Driver as Rerender } from "@/components/rerender/Driver";
import TagsInSearchBar from "@/components/search/TagsInSearchBar";
import { ZodFormValidation } from "@/components/zod/ZodFormValidation";
import { Driver as Dropdown } from "../components/dropdown/Driver";
import { Driver as Hangman } from "../components/hangman/Driver";
import { NativeInfiniteScroll } from "../components/scroll/NativeInfiniteScroll";
import { ControllableList } from "@/components/list/ControllableList";

interface LinkInfo {
  path: string;
  name: string;
  element: () => JSX.Element;
}

export const links: LinkInfo[] = [
  { path: "hangman", name: "Classic Hangman", element: Hangman },
  { path: "dropdown", name: "Dropdown shadcn/ui", element: Dropdown },
  {
    path: "scroll",
    name: "Infinite Scroll Sample",
    element: NativeInfiniteScroll,
  },
  { path: "pagination", name: "Pagination Adv", element: PaginationAdvanced },
  { path: "progress", name: "Progress Bar", element: Progress },
  { path: "rerender", name: "Rerender Optimization", element: Rerender },
  { path: "search-tags", name: "Tags in Searchbar", element: TagsInSearchBar },
  { path: "zod-form", name: "Forms with Zod", element: ZodFormValidation },
  { path: "list", name: "Controllable List", element: ControllableList },
];
