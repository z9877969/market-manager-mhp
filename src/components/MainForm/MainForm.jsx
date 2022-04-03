import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Select from "../_shared/Select/Select";
import { getRegionsApi, getTownsApi } from "../../utils/servicesApi";

const MainForm = () => {
  const [form, setForm] = useState({
    region: "",
    town: "",
    market: "",
  });
  const [regions, setRegions] = useState([]);
  const [towns, setTowns] = useState([]);
  const [markets, setMarkets] = useState([]);

  const { region, town, market } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const getRegionsList = async () => {
      const regionsList = await getRegionsApi();
      setRegions(regionsList);
    };
    getRegionsList();
  }, []);

  useEffect(() => {
    const setTownsList = async () => {
      town && setForm((prev) => ({ ...prev, town: "" }));
      const townsList = await getTownsApi(region);
      setTowns(townsList);
    };
    region && setTownsList();
    // eslint-disable-next-line
  }, [region]);

  useEffect(() => {
    const checkedMarkets = town
      ? towns
          .find(({ id }) => id === town)
          .markets.map(({ id, name, adress }) => ({
            id,
            title: `${name}, ${adress}`,
          }))
      : [];
    setMarkets(checkedMarkets);
    // eslint-disable-next-line
  }, [town]);

  return (
    <Row className="justify-content-center">
      <Form as={Col} sm={10} md={8}>
        <Select
          options={regions}
          value={region}
          name="region"
          cbOnChange={handleChange}
          placeholder="Виберiть область"
        />
        <Select
          options={towns}
          value={town}
          name="town"
          cbOnChange={handleChange}
          placeholder="Виберiть мiсто"
        />
        <Select
          options={markets}
          value={market}
          name="market"
          cbOnChange={handleChange}
          placeholder="Виберiть торгову точку"
        />
        <Button variant="success">Ввести цiну</Button>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Row>
  );
};

export default MainForm;
