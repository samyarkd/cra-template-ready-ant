export interface Route {
  icon: React.ElementType;
  breadTree: string[];
  label: string;
  path: string;
  children?: Route[];
}
