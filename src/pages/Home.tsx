import GlobalStreak from "@/components/custom/GlobalStreak";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Home() {
  return (
    <Card className="w-[800px]">
      <CardHeader>
        <CardTitle className="text-3xl">Wellcome back \\Username//</CardTitle>
      </CardHeader>
      <CardContent>
        <GlobalStreak value={3} label="Esta semana" />
      </CardContent>
    </Card>
  );
}

export default Home;
