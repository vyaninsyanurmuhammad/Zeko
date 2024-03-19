import { RandomPosition } from "@/models/types/type-random-position";
import { RandomUser } from "@/models/types/type-random-user";
import { Team } from "@/models/types/type-team";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeamsThunk = createAsyncThunk("teams/getTeams", async () => {
  const response = await axios.get(`https://randomuser.me/api/?results=20`);
  const responsePosition = await axios.get(
    `https://65f4b902f54db27bc0224324.mockapi.io/positions/`
  );

  const data: RandomUser = response.data;
  const dataPosition: RandomPosition[] = responsePosition.data;

  const result: Team[] = [
    ...data.results.map((team, index) => {
      return {
        name: `${team.name.title} ${team.name.first} ${team.name.last}`,
        position: dataPosition[index].position,
        location: team.location.country,
        image: team.picture.large,
      } as Team;
    }),
  ];

  return result;
});
