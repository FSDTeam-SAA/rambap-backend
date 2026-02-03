export type TMenuCategory = {
  categoryName: string; // e.g., "Starters", "Main Course"
  items: string[]; // List of food items
};

export type TWeddingMenu = {
  title?: string; // Main title "Wedding Menu"
  menuSections: TMenuCategory[];
};
