import { useEffect, useState } from "react";

interface User {
  id_user: number;
  email: string;
  password: string;
  id_park: number;
}

export const useFetcher = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch("http://localhost:5000/api/users");
        const data = await result.json();

        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return users;
};
