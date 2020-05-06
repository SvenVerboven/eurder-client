export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    city: string;
    country: string;
    houseNumber: string;
    street: string;
    zipp: string
  };
  password: string;
  phoneNumber: {
    countryCode: string;
    number: string
  };
  role: string;
}
