import Head from 'next/head';

const MontarCasetaPrefabricadaCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta montar una caseta prefabricada? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costos asociados con el montaje de casetas prefabricadas y cómo presupuestar para este tipo de proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-montar-caseta-prefabricada`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta montar una caseta prefabricada?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo base: €5,000 - €10,000</p>
            <p>Costo promedio para el montaje básico de una caseta prefabricada.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Costo personalizado: €10,000 - €20,000</p>
            <p>Costo más alto para montajes con diseños especiales o ubicaciones complicadas.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y diseño de la caseta prefabricada.</li>
          <li>Accesibilidad al sitio de montaje.</li>
          <li>Calidad de los cimientos y preparación del terreno.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para montar casetas prefabricadas</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Costo base</strong>: €5,000 - €10,000, para montajes básicos de casetas prefabricadas.
          </li>
          <li>
            <strong>Costo personalizado</strong>: €10,000 - €20,000, para montajes con diseños especiales o ubicaciones complicadas.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Selección de la caseta prefabricada</strong>: Elegir el diseño y características de la caseta.</p>
        <p>2. <strong>Preparación del sitio</strong>: Asegurar la adecuada preparación del terreno y cimientos.</p>
        <p>3. <strong>Contratación de montadores</strong>: Obtener cotizaciones de montadores calificados para el proyecto.</p>
      </section>

      <section>
        <p className="text-lg">
          Planifica tu presupuesto considerando los factores que afectan los costos y selecciona montadores de casetas prefabricadas con experiencia para asegurar un montaje adecuado y de calidad.
        </p>
      </section>
    </div>
  );
};

export default MontarCasetaPrefabricadaCoste;