async function fatchData() {
  const response = await fetch("data.txt");
  const data = await response.json()
  console.log(data);
}
fatchData()