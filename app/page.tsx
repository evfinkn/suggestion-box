"use client";

import { Flex, Text, Theme } from "@radix-ui/themes";
import ToggleThemeButton from "./components/ToggleThemeButton";
import CreatePostDialog from "./components/CreatePostDialog";
// import MoreOptionsMenu from "./components/MoreOptionsMenu";
import Post from "./components/Post";

export default function App() {
  return (
    <Theme accentColor="iris" radius="large">
      <Flex align="center" justify="center" style={{ maxWidth: 1250 }}>
        <Flex direction="column" gap="2">
          <Text>Hello from Radix Themes :)</Text>
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
            {/* <MoreOptionsMenu /> */}
            <Post
              text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
voluptatum, quas, quos, quod voluptate voluptatem quia quibusdam
voluptas doloribus quae fugit. Quisquam voluptatum, quas, quos, quod
voluptate voluptatem quia quibusdam voluptas doloribus quae fugit.`}
            />
          </Flex>
          <CreatePostDialog />
        </Flex>
      </Flex>
    </Theme>
  );
}
