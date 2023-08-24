import { ArchiveIcon } from "@radix-ui/react-icons";
import { Button, Tooltip } from "@radix-ui/themes";

export default function ArchiveButton() {
    return (
        <Tooltip content="Archive">
            <Button variant="ghost">
                <ArchiveIcon />
            </Button>
        </Tooltip>
    );
}
