import { styled } from "@/jsx";
import { Icon } from "~/components/ui/Icon";

export default async function Home() {
  return (
    <main>
      <styled.div fontWeight="bold" color="primary">
        Soundify
      </styled.div>
      <Icon name="library" size="md" />
    </main>
  );
}
