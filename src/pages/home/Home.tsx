
import { FunctionComponent } from "react";

interface HomePageProps {
    
}
 
const HomePage: FunctionComponent<HomePageProps> = () => {
    // const {response,  loading, refetch} = useAxios({
    //   url: AppEndpoints.users
    // });

    // useEffect(() => {
    //   refetch();
    // }, []);

    // useEffect(() => {
    //   console.log(loading);
    //   console.log(response);
    // }, [response])
    return (
        <>
          <div>
          <h1>Vite + React</h1>
          </div>
          
        </>
      );
}
 
export default HomePage;