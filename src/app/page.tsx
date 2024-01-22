import { Button } from "@nextui-org/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="mb-2">Hello World</h1>
      <Button color="danger" variant="shadow">
        Click to see the world!
      </Button>
    </main>
  );
}
