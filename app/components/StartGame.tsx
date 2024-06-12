import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { useGameStore } from '@/store/store';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';

export const StartGame = () => {
  const { updateSetting, startGame, setting, filteredPlayers } = useGameStore(
    (state) => state,
  );

  return (
    <Card className='p-4 border-2 border-black rounded-2xl relative'>
      <div className='absolute bg-black size-full -z-10 left-3 top-3 rounded-2xl' />
      <CardHeader>
        <CardTitle>Get 7 chances to guess an NBA player.</CardTitle>
        <CardDescription>2023-2024 Regular Season</CardDescription>
      </CardHeader>
      <CardContent className="children:mb-8">
        <div className="flex py-2 items-center">
          <p className="font-bold w-[160px]">Games Played</p>
          <span className="px-4 text-xl">&ge;</span>
          <Select
            onValueChange={(value: string) => {
              updateSetting(setting.min_minutes, +value);
            }}
          >
            <SelectTrigger className="w-[180px] font-semibold">
              <SelectValue placeholder={setting.min_games} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="65">65</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex py-2 items-center">
          <p className="font-bold w-[160px]">Minutes per game</p>
          <span className="px-4 text-xl">&ge;</span>
          <Select
            onValueChange={(value: string) => {
              updateSetting(+value, setting.min_games);
            }}
          >
            <SelectTrigger className="w-[180px] font-semibold">
              <SelectValue placeholder={setting.min_minutes} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="15">15</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="30">30</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={startGame} className='font- text-md'>
          Start guessing from {filteredPlayers.length} players
        </Button>
      </CardFooter>
    </Card>
  );
};
