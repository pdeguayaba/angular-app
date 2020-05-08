export interface User {
  firstName: string;
  lastName: string;
  // To make variables optional just put the '?'
  age?: number;
  address?: {
    street?: string;
    city?: string;
    state?: string;
  };
  image?: string;
}
