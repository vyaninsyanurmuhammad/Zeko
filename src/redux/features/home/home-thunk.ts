import { RandomPosition } from "@/models/types/type-random-position";
import { RandomUser } from "@/models/types/type-random-user";
import { Testimoni } from "@/models/types/type-testimoni";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTestimoniesThunk = createAsyncThunk(
  "home/getTestimonies",
  async () => {
    const response = await axios.get(`https://randomuser.me/api/?results=6`);
    const responsePosition = await axios.get(
      `https://65f4b902f54db27bc0224324.mockapi.io/positions/`
    );
    const dataPosition: RandomPosition[] = responsePosition.data;

    const data: RandomUser = response.data;

    const testimoniMessages = [
      "I recently used Superb! to create my landing page and it was a breeze.",
      "The drag-and-drop interface made it easy to customize and the end result was exactly what I was looking for.",
      "Thanks for the great service. We've used zeko for the last five years. Great job.",
      "Zeko is worth much more than I paid. We're loving it.",
      "I've tried so many different products in the past to solve my [insert problem], but none of them have worked as well as the XYZ Product.",
      "I've been using the Zeko for a few months now and I'm blown away by the results.",
    ];

    const result: Testimoni[] = [
      ...data.results.map((team, index) => {
        return {
          name: `${team.name.title} ${team.name.first} ${team.name.last}`,
          position: `${dataPosition[index].position}, ${team.location.country}`,
          message: testimoniMessages[index],
          image: team.picture.large,
        } as Testimoni;
      }),
    ];

    return result;
  }
);
