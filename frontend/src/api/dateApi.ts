import type DateType from "@/types/DateType";
import axios from "axios";

export default class DateAPI {
  static baseUrl = "http://localhost:3000/api";
  static async getDate() {
    try {
      const response = await axios.get(`${this.baseUrl}/date`);
      return { date: response.data.date as Date } as DateType;
    } catch (error) {
      console.error('Error fetching date:', error);
      throw error;
    }
  }
}
