import { RandomPosition } from "@/models/types/type-random-position";
import { RandomUser } from "@/models/types/type-random-user";
import { Team } from "@/models/types/type-team";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTeamsThunk = createAsyncThunk("about/getTeams", async () => {
  const response = await axios.get(`https://randomuser.me/api/?results=3`);

  const data: RandomUser = response.data;
  const dataPosition = ["Founder", "Co-Founder & CEO", "COO" ];

  const result: Team[] = [
    ...data.results.map((team, index) => {
      return {
        name: `${team.name.title} ${team.name.first} ${team.name.last}`,
        position: dataPosition[index],
        location: team.location.country,
        image: team.picture.large,
      } as Team;
    }),
  ];

  return result;
});
