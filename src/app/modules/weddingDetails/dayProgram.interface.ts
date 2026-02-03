export type TDayProgramItem = {
  time: string;
  title: string;
  description: string;
  icon?: string;
};

export type TDayProgram = {
  title?: string;
  subtitle?: string;
  items: TDayProgramItem[];
  printUrl?: string; // Added field for printing the program
};
