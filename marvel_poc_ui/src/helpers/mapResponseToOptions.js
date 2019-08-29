// Sorry for not using JSDocs :(
// response = [ { id: number, name: string } ]
const mapResponseToOptions = response =>
  Array.isArray(response)
    ? response.map(({ id, name }) => ({ value: id, label: name }))
    : [];

export default mapResponseToOptions;
