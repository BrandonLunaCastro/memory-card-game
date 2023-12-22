export const dataFetch = async () => {
  try {                     
    const res = await fetch("https://www.theboysapi.com/api/character");
    return res.json();
  } catch (error) {
    return(Error(error));
  }
}  