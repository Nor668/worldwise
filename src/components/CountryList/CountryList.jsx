import { useCities } from "../../contexts/CitiesContext";

import styles from "./CountryList.module.css";
import Spinner from "../Spinner/Spinner";
import Message from "../Message/Message";
import CountryItem from "../CountryItem/CountryItem";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  const countries = cities.reduce((acc, targ) => {
    if (!acc.map((el) => el.country).includes(targ.country))
      return [...acc, { country: targ.country, emoji: targ.emoji }];
    else return acc;
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
