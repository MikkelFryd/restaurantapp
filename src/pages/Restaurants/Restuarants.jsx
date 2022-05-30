import { useEffect, useState } from "react";
import Style from "./restaurants.module.scss";
import ReactMarkdown from "react-markdown";
import { Footer } from "../../components/footer/Footer";

export const Restaurants = () => {
  const selectoptions = [
    {
      label: "All",
      value: "All",
    },
    {
      label: "Pizza",
      value: "Pizza",
    },
    {
      label: "Seafood",
      value: "Seafood",
    },
    {
      label: "Italien",
      value: "Italien",
    },
    {
      label: "Food",
      value: "Food",
    },
  ];

  const [data, setData] = useState("");
  const [category, setCategory] = useState("All");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    fetch("http://localhost:1337/api/restaurants/?populate=*")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // console.log(category);

  return (
    <>
      <section className={Style.restaurantscontainer}>
        <div className={Style.selectcontainer}>
          <h4>Category: </h4>
          <select value={category} onChange={handleChange}>
            {selectoptions.map((option, index) => {
              return <option key={index}>{option.value}</option>;
            })}
          </select>
        </div>
        {data.data &&
          data.data.map((item, index) => {
            console.log(item.attributes.category);
            if (category === "All") {
              return (
                <div key={index} className={Style.infocontainer}>
                  <h3 key={index}>{item.attributes.title}</h3>
                  <ReactMarkdown children={item.attributes.textfield} />
                  <div>
                    <b>Opening hours: </b>
                    <p>{item.attributes.openinghours}</p>
                  </div>
                  {item.attributes.images.data &&
                    item.attributes.images.data.map((images, index) => {
                      return (
                        <img
                          key={index}
                          src={`http://localhost:1337${images.attributes.url}`}
                          alt=""
                        />
                      );
                    })}
                </div>
              );
            } else if (category === item.attributes.category) {
              return (
                <div key={index} className={Style.infocontainer}>
                  <h3 key={index}>{item.attributes.title}</h3>
                  <ReactMarkdown children={item.attributes.textfield} />
                  <div>
                    <b>Opening hours: </b>
                    <p>{item.attributes.openinghours}</p>
                  </div>
                  {item.attributes.images.data &&
                    item.attributes.images.data.map((images, index) => {
                      return (
                        <img
                          key={index}
                          src={`http://localhost:1337${images.attributes.url}`}
                          alt="image"
                        />
                      );
                    })}
                </div>
              );
            }
          })}
      </section>
      <Footer />
    </>
  );
};
