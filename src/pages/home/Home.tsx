import { FunctionComponent, useEffect } from "react";

import AppEndpoints from "@/constants/api.app";
import { useAxios } from "@/hooks/useAxios";

interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => {
  const { response, loading, refetch } = useAxios({
    url: AppEndpoints.users,
    skip: true,
  });

  useEffect(() => {
    refetch();
  }, []);

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  useEffect(() => {
    console.log(response);
  }, [response]);
  return (
    <>
      <div>
        <h1>Vite + React</h1>
      </div>
    </>
  );
};

export default HomePage;
