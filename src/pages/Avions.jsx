import React, { useEffect, useState } from "react";
import CardPlane from "../component/Card.avion";
import DataJets from "../component/Data.Jets";

export default function Avions() {
  const [categories, setCategories] = useState('')

  // useEffect(() => {
  //   fetch('https://picsum.photos/v2/list?page=2&limit=10')
  //     .then(res => res.json())
  //     .then(json => setImages(json))
  // }, [])


  useEffect(() => {
    setCategories('')
  }, [])




  return (

    <>
      {categories ?
        <>
          <DataJets category={categories} />

        </>
        :
        <>
          <CardPlane categories={setCategories} />

        </>
      }
    </>

  );
}
