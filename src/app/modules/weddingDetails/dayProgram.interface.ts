export type TDayProgramItem = {
  time: string;
  title: string;
  description: string;
  icon?: string;
  mapUrl?: string;
};

export type TDayProgram = {
  title?: string;
  subtitle?: string;
  items: TDayProgramItem[];
};
