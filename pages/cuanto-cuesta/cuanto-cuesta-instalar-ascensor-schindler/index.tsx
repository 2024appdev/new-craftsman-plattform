import Head from 'next/head';

const InstalarAscensorSchindlerCoste = () => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>¿Cuánto cuesta instalar un ascensor Schindler? - Handyman</title>
        <meta
          name="description"
          content="Descubre los costes asociados con la instalación de un ascensor Schindler y cómo presupuestar para este tipo de proyecto de construcción."
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/cuanto-cuesta/cuanto-cuesta-instalar-ascensor-schindler`}
        />
      </Head>

      <h1 className="text-3xl font-bold text-center mb-8">¿Cuánto cuesta instalar un ascensor Schindler?</h1>

      <section className="mb-8">
        <div className="flex flex-wrap justify-center">
          <div className="bg-green-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Básica: €60,000 - €120,000</p>
            <p>Incluye la instalación de un ascensor Schindler estándar.</p>
          </div>
          <div className="bg-blue-500 text-white p-4 rounded-md shadow-md mx-4 mb-4 md:w-1/3 text-center">
            <p className="text-xl font-bold mb-2">Instalación Premium: €120,000 - €200,000</p>
            <p>Incluye la instalación de un ascensor Schindler con características avanzadas o diseño personalizado.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Factores que afectan los costos</h2>
        <ul className="list-disc list-inside">
          <li>Tamaño y capacidad del ascensor: Ascensores estándar vs. personalizados.</li>
          <li>Características adicionales: Ascensores con tecnología avanzada o diseño específico.</li>
          <li>Requisitos de instalación: Costos pueden variar según la estructura del edificio y accesibilidad.</li>
          <li>Ubicación: Precios pueden diferir según factores regionales y condiciones del mercado local.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Precios promedio para instalación de ascensor Schindler</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Instalación Básica</strong>: €60,000 - €120,000, incluyendo la instalación de un ascensor Schindler estándar.
          </li>
          <li>
            <strong>Instalación Premium</strong>: €120,000 - €200,000, incluyendo la instalación de un ascensor Schindler con características avanzadas o diseño personalizado.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Planificación de presupuesto</h2>
        <p>1. <strong>Evaluar necesidades de instalación</strong>: Determinar el tipo de ascensor Schindler y las características requeridas.</p>
        <p>2. <strong>Obtener múltiples presupuestos</strong>: Comparar estimaciones de diferentes empresas de instalación de ascensores.</p>
        <p>3. <strong>Considerar la durabilidad y mantenimiento</strong>: Evaluar los costos a largo plazo y beneficios de un ascensor Schindler.</p>
        <p>4. <strong>Planificar la logística de la instalación</strong>: Coordinar con expertos y verificar requisitos de permisos y acceso al edificio.</p>
      </section>

      <section>
        <p className="text-lg">
          Al planificar tu presupuesto y comprender los factores que afectan los costos de instalar un ascensor Schindler, puedes asegurar una instalación exitosa dentro de tus posibilidades financieras.
        </p>
      </section>
    </div>
  );
};

export default InstalarAscensorSchindlerCoste;