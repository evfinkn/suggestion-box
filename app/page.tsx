import { Theme } from "@radix-ui/themes";
import ToggleThemeButton from "@/app/components/ToggleThemeButton";
import CreatePostDialog from "@/app/components/CreatePostDialog";

import PostTypeTabs from "./components/PostTypeTabs";

export default async function App() {
  return (
    <Theme accentColor="iris" radius="large">
      <PostTypeTabs />
    </Theme>
  );
}
