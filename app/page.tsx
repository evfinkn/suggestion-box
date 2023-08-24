import { Button, Flex, Text, Theme } from "@radix-ui/themes";
import ToggleThemeButton from "./components/ToggleThemeButton";
import CreatePostDialog from "./components/CreatePostDialog";
import MoreOptionsMenu from "./components/MoreOptionsMenu";

export default function App() {
  return (
    <Theme accentColor="indigo" radius="large">
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes :)</Text>
        <Button>Let{"'"}s go</Button>
        <Flex
          // display={{ md: 'none' }}
          align="center"
          gap="4"
          // position="absolute"
          // top="0"
          // bottom="0"
          // right="0"
          // pr="4"
        >
          <ToggleThemeButton />
          <MoreOptionsMenu />
        </Flex>
        <CreatePostDialog />
      </Flex>
    </Theme>
  );
}
